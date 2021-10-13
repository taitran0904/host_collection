import React from "react";
import { withStyles, makeStyles } from "@mui/styles";
import { FaStore } from "react-icons/fa";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import styles from "./styles";
import TitlePage from "../../TitlePage";
import * as titleConstants from "../../../constants/ui/homepage";

const shops = [
  {
    id: 1,
    name: "Tokyo",
  },
  {
    id: 2,
    name: "Moscow",
  },
  {
    id: 3,
    name: "Saint Petersburg",
  },
  {
    id: 4,
    name: "Krakow",
  },
  {
    id: 5,
    name: "Montreal",
  },
  {
    id: 6,
    name: "Buenos Aires",
  },
  {
    id: 7,
    name: "Ho Chi Minh City",
  },
];

function ShopList(props) {
  const { classes } = props;

  const roundedLength = shops && 2 * Math.round(shops.length / 2);

  const useStyles = makeStyles((theme) => ({
    [theme.breakpoints.down("xs")]: {
      shopMB: {
        columnCount: shops && (shops.length > 4 ? roundedLength / 2 : 2),
        width: shops && (shops.length > 4 ? `${roundedLength * 23}vw` : "100%"),
        columnGap: 0,
      },
    },
  }));
  const classMB = useStyles();

  const renderShop = () => {
    if (shops && shops.length > 0) {
      return shops.map((item) => {
        return (
          <NavLink
            to={`/shop-list/${item.id}`}
            className={classes.shopItem}
            key={item.id}
          >
            {item.name}
          </NavLink>
        );
      });
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.titleWrap}>
        <TitlePage
          containerStyle={{ marginBottom: 0 }}
          title={titleConstants.SHOP_LIST}
          icon={<FaStore className={classes.icon} />}
        />
      </div>
      <div className={classes.shopWrap}>
        <div className={`${classes.shopContainer} ${classMB.shopMB}`}>
          {renderShop()}
        </div>
      </div>
    </div>
  );
}

ShopList.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(ShopList);
