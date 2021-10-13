import React from "react";
import { withStyles } from "@mui/styles";
import PropTypes from "prop-types";
import { FiEdit, FiTrash } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { Popconfirm } from "antd";

import noImageShop from "../../../assets/images/no-image-shop.jpg";
import styles from "./styles";
import "./styles.css";
import * as titleConstants from "../../../constants/ui/myPage";
import { IMAGE_BASE_URL } from "../../../constants";
import { encodeId } from "../../../commons/generateId";

function ShopListItem(props) {
  const { classes, name, image, status, id, classMDB, onDeleteShopItem } =
    props;

  const idNew = encodeId(id);

  const renderStatus = () => {
    let result = null;
    if (status === "1") {
      result = <p style={{ background: "#4285F4" }}>{titleConstants.USING}</p>;
    } else if (status === "4") {
      result = (
        <p style={{ background: "#FF3547" }}>{titleConstants.NEED_MORE_INFO}</p>
      );
    } else if (status === "3") {
      result = (
        <p style={{ background: "#FFBF00" }}>{titleConstants.PENDING}</p>
      );
    }
    return result;
  };

  const renderImage = () => {
    let result = null;
    if (image || image !== null) {
      result = (
        <img src={`${IMAGE_BASE_URL}/avatar/small/${image}`} alt={name} />
      );
    } else {
      result = <img src={noImageShop} alt="no shop" />;
    }
    return result;
  };

  return (
    <div className={`${classes.box} ${classMDB}`}>
      <div className={classes.boxImg}>
        {renderImage()}
        <div className={classes.option}>
          <NavLink to={`/my-page/edit-shop/${idNew}`}>
            <FiEdit />
          </NavLink>
          <Popconfirm
            title={titleConstants.ARE_YOU_SURE_DELETE_SHOP}
            onConfirm={() => onDeleteShopItem(id)}
            okText={titleConstants.YES_DELETE}
            cancelText={titleConstants.NO}
          >
            <button type="button">
              <FiTrash />
            </button>
          </Popconfirm>
        </div>
      </div>
      <h5>{name}</h5>
      {renderStatus()}
    </div>
  );
}

ShopListItem.propTypes = {
  classes: PropTypes.object,
  name: PropTypes.string,
  image: PropTypes.string,
  status: PropTypes.string,
  id: PropTypes.number,
  classMDB: PropTypes.any,
  onDeleteShopItem: PropTypes.func,
};

export default withStyles(styles)(ShopListItem);
