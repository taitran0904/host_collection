import React from "react";
import { withStyles } from "@mui/styles";
import PropTypes from "prop-types";
import { FiEdit, FiTrash } from "react-icons/fi";
import { NavLink } from "react-router-dom";

import styles from "./styles";
import * as titleConstants from "../../../constants/ui/myPage";

function ShopManagerItem(props) {
  const { classes, id, name, shop, role, avatar, status } = props;

  const renderStatus = () => {
    let result = null;
    if (status === "1") {
      if (role === "1") {
        result = (
          <p style={{ background: "#2BBBAD" }}>
            {titleConstants.INFORMATION_MANAGER}
          </p>
        );
      } else {
        result = (
          <p style={{ background: "#AA66CC" }}>
            {titleConstants.PHOTO_MANAGER}
          </p>
        );
      }
    } else if (status === "2") {
      if (role === "1") {
        result = (
          <>
            <h6>{titleConstants.INFORMATION_MANAGER}</h6>
            <p
              className={classes.status}
              style={{ background: "rgb(171, 131, 13, 0.7)" }}
            >
              {titleConstants.PENDING}
            </p>
          </>
        );
      } else {
        result = (
          <>
            <h6>{titleConstants.PHOTO_MANAGER}</h6>
            <p
              className={classes.status}
              style={{ background: "rgb(171, 131, 13, 0.7)" }}
            >
              {titleConstants.PENDING}
            </p>
          </>
        );
      }
    } else if (status === "3") {
      if (role === "1") {
        result = (
          <>
            <h6>{titleConstants.INFORMATION_MANAGER}</h6>
            <p
              className={classes.status}
              style={{ background: "rgb(255, 53, 71, .6)" }}
            >
              {titleConstants.REJECTED}
            </p>
          </>
        );
      } else {
        result = (
          <>
            <h6>{titleConstants.PHOTO_MANAGER}</h6>
            <p
              className={classes.status}
              style={{ background: "rgb(255, 53, 71, .6)" }}
            >
              {titleConstants.REJECTED}
            </p>
          </>
        );
      }
    }
    return result;
  };

  return (
    <div className={classes.box}>
      <div className={classes.boxImg}>
        <img src={avatar} alt="1" />
      </div>
      <h4>{name}</h4>
      <h5>{shop}</h5>
      {renderStatus()}
      <div className={classes.option}>
        <NavLink to={`/my-page/shop-management/${id}`}>
          <FiEdit />
        </NavLink>
        <button type="button">
          <FiTrash />
        </button>
      </div>
    </div>
  );
}

ShopManagerItem.propTypes = {
  classes: PropTypes.object,
  name: PropTypes.string,
  avatar: PropTypes.string,
  status: PropTypes.string,
  id: PropTypes.any,
  shop: PropTypes.string,
  role: PropTypes.string,
};

export default withStyles(styles)(ShopManagerItem);
