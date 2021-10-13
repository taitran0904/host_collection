import React from "react";
import { withStyles } from "@mui/styles";
import PropTypes from "prop-types";
import { FaGlassCheers } from "react-icons/fa";
import { IoMdCloseCircleOutline, IoMdHeartEmpty } from "react-icons/io";
import { NavLink } from "react-router-dom";
import styles from "./styles";
import * as titleConstants from "../../../constants/ui/myPage";

function FavoriteHostItem(props) {
  const { classes, isTopTab, single, customer } = props;

  return (
    <div style={single && { border: 0 }} className={classes.box}>
      <div>
        <NavLink
          className={classes.boxLeft}
          to="/host-detail/1"
          title={titleConstants.CLICK_TO_VIEW_HOST}
        >
          <img
            src="https://i.pinimg.com/originals/a8/da/b2/a8dab2e3cac44a7d2ae5bf0ef06fb2d4.jpg"
            alt="avatar"
          />
          <div>
            <h4>Barack Obama</h4>
            <h5>32/12/1995 20 AGE</h5>
            <h5>173cm / A / Gemini</h5>
          </div>
        </NavLink>
      </div>
      {!customer && (
        <div className={classes.boxRight}>
          <button className={classes.boxRightBtn} type="button">
            <FaGlassCheers />
            <span>{titleConstants.TODAY_CHOOSE}</span>
          </button>
          {isTopTab ? (
            <button className={classes.boxRightBtn} type="button">
              <IoMdCloseCircleOutline />
              <span>{titleConstants.REMOVE}</span>
            </button>
          ) : (
            <button className={classes.boxRightBtn} type="button">
              <IoMdHeartEmpty />
              <span>{titleConstants.LIKE_THIS}</span>
            </button>
          )}
        </div>
      )}
    </div>
  );
}

FavoriteHostItem.propTypes = {
  classes: PropTypes.object,
  isTopTab: PropTypes.any,
  single: PropTypes.any,
  customer: PropTypes.any,
};

export default withStyles(styles)(FavoriteHostItem);
