/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from "react";
import { withStyles, makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose, bindActionCreators } from "redux";
import { NavLink } from "react-router-dom";
import uniqid from "uniqid";
import styles from "./styles";
import TitleChild from "../../../components/TitleChild";
import * as titleConstants from "../../../constants/ui/myPage";
import { ShopListItem, ShopManagerItem } from "../../../components/MyPageShop";
import * as shopActions from "../../../actions/shop";

function ShopManagement(props) {
  const { classes, shopList } = props;
  const [manager] = React.useState([
    {
      id: uniqid(),
      name: "Barack Obama",
      shop: "Madrid",
      role: "1",
      avatar:
        "https://i.pinimg.com/564x/1b/09/94/1b09948d3e7e7e22bd67db55578d8ad7.jpg",
      status: "1",
    },
    {
      id: uniqid(),
      name: "Barack Obama",
      shop: "Madrid",
      role: "2",
      avatar:
        "https://i.pinimg.com/564x/1b/09/94/1b09948d3e7e7e22bd67db55578d8ad7.jpg",
      status: "1",
    },
    {
      id: uniqid(),
      name: "Barack Obama",
      shop: "Madrid",
      role: "2",
      avatar:
        "https://i.pinimg.com/564x/1b/09/94/1b09948d3e7e7e22bd67db55578d8ad7.jpg",
      status: "2",
    },
    {
      id: uniqid(),
      name: "Barack Obama",
      shop: "Madrid",
      role: "1",
      avatar:
        "https://i.pinimg.com/564x/1b/09/94/1b09948d3e7e7e22bd67db55578d8ad7.jpg",
      status: "3",
    },
  ]);

  const roundedLength = 2 * Math.round(shopList.length / 2);
  const useStyles = makeStyles((theme) => ({
    [theme.breakpoints.down("xs")]: {
      shopListScroll: {
        overflowX: shopList.length > 2 ? "overlay" : "initial",
      },
      shopList: {
        width:
          shopList.length > 2
            ? `calc(((35vw + 7px) * ${roundedLength}) + 40px);`
            : "initial",
      },
      item: {
        width: shopList.length > 2 ? "70vw" : "100%",
      },
    },
  }));
  const classMDB = useStyles();

  useEffect(() => {
    const { fetchShopList } = props.shopActionCreators;
    fetchShopList();
  }, [props.shopActionCreators]);

  const onDeleteShopItem = (id) => {
    const { deleteShopItem } = props.shopActionCreators;
    deleteShopItem(id);
  };

  const renderShopList = (shopList) => {
    let result = null;
    if (shopList && shopList.length > 0) {
      result = shopList.map((item) => {
        return (
          <ShopListItem
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.avatar_image}
            location={item.cid_location}
            status={item.status}
            classMDB={classMDB.item}
            onDeleteShopItem={onDeleteShopItem}
          />
        );
      });
    }
    return result;
  };

  const renderManagerList = (manager) => {
    let result = null;
    if (manager && manager.length > 0) {
      result = manager.map((item) => {
        return (
          <ShopManagerItem
            key={item.id}
            id={item.id}
            name={item.name}
            shop={item.shop}
            role={item.role}
            avatar={item.avatar}
            status={item.status}
          />
        );
      });
    }
    return result;
  };

  return (
    <div className={classes.container}>
      <div>
        <TitleChild titleChild={titleConstants.SHOP_LIST} />
        <NavLink className={classes.newBtn} to="/my-page/create-new-shop">
          {titleConstants.CREATE_NEW_SHOP}
        </NavLink>
        <div className={classMDB.shopListScroll}>
          <div className={`${classes.shopList} ${classMDB.shopList}`}>
            {renderShopList(shopList)}
          </div>
        </div>
      </div>
      <div>
        <TitleChild titleChild={titleConstants.MANAGER_LIST} />
        <NavLink className={classes.newBtn} to="/my-page/create-new-manager">
          {titleConstants.CREATE_NEW_MANAGER}
        </NavLink>
        <div className={classes.managerList}>{renderManagerList(manager)}</div>
      </div>
    </div>
  );
}

ShopManagement.propTypes = {
  classes: PropTypes.object,
  shopList: PropTypes.array,
  shopActionCreators: PropTypes.shape({
    deleteShopItem: PropTypes.func,
  }),
};

const mapStateToProps = (state) => ({
  shopList: state.shop.shopList,
});

const mapDispatchToProps = (dispatch) => ({
  shopActionCreators: bindActionCreators(shopActions, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withStyles(styles), withConnect)(ShopManagement);
