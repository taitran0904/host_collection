import React from "react";
import { NavLink } from "react-router-dom";
import { withStyles } from "@mui/styles";
import { FiLogIn, FiLogOut, FiMenu, FiX } from "react-icons/fi";
import PropTypes from "prop-types";

import _ from "lodash/lang";
import styles from "./styles";
import logo from "../../../assets/images/logo.png";
import * as titleContant from "../../../constants/ui/aside";
import getToken from "../../../commons/getToken";
import { IMAGE_BASE_URL } from "../../../constants";
import noAvatar from "../../../assets/images/no-avatar.png";

function Welcome(props) {
  const { classes, hideAside, mobile, onShowAside, userInfo } = props;
  const { authStatus } = props;

  const onLogout = () => {
    const { logout, history } = props;
    logout(history);
  };

  const renderAvatar = () => {
    let result = "";
    if (!_.isEmpty(userInfo) && !_.isEmpty(userInfo.avatar)) {
      result = (
        <img src={`${IMAGE_BASE_URL}/avatar/${userInfo.avatar}`} alt="avatar" />
      );
    }
    // else {
    //   result = <img src={noAvatar} alt="avatar" />;
    // }
    return result;
  };

  const renderAuthButton = () => {
    const { classes, authStatus } = props;
    let result = null;
    if (authStatus === "2" || getToken()) {
      result = (
        <button type="button" className={classes.logoutBtn} onClick={onLogout}>
          <FiLogOut />
        </button>
      );
    } else if (authStatus === "1" || authStatus === "2") {
      result = (
        <NavLink to="/login" className={classes.loginBtn}>
          <FiLogIn />
        </NavLink>
      );
    } else {
      result = (
        <NavLink to="/login" className={classes.loginBtn}>
          <FiLogIn />
        </NavLink>
      );
    }
    return result;
  };

  const renderUserWelcome = () => {
    let result = "";
    const { userInfo } = props;

    if (_.isEmpty(userInfo) || userInfo.name === null) {
      result = `${titleContant.WELCOME_TO_PORTAL}`;
    } else {
      result = `${userInfo.name}`;
    }
    return result;
  };

  return (
    <div
      style={{
        boxShadow:
          (authStatus === "2" || getToken()) && "0 3px 13px rgba(0, 0, 0, .1)",
      }}
      className={mobile ? classes.welcomeMobile : ""}
    >
      {(authStatus === "2" || getToken()) && (
        <NavLink
          onClick={() => hideAside && hideAside()}
          className={mobile ? "logoMobile" : ""}
          to="/"
          exact={false}
        >
          <img className={classes.logo} src={logo} alt="logo" />
        </NavLink>
      )}

      <div className={classes.welcome}>
        <div className={classes.avatar}>{renderAvatar()}</div>
        <h6
          className={`${classes.welcomeText} ${mobile ? "welcomeMobile" : ""}`}
        >
          {renderUserWelcome()}
        </h6>
        {!mobile && renderAuthButton()}
        <button
          type="button"
          onClick={() => hideAside()}
          className={`${classes.closeBtn} ${mobile ? "closeMobile" : ""}`}
        >
          <FiX />
        </button>
        {(authStatus === "2" || getToken()) && (
          <button
            type="button"
            onClick={onShowAside}
            className={`${classes.openBtn} ${mobile ? "menuMobile" : ""}`}
          >
            <FiMenu />
          </button>
        )}
      </div>
    </div>
  );
}

Welcome.propTypes = {
  classes: PropTypes.object,
  onShowAside: PropTypes.func,
  hideAside: PropTypes.func,
  mobile: PropTypes.string,
  authStatus: PropTypes.string,
  userInfo: PropTypes.object,
  history: PropTypes.object,
  logout: PropTypes.func,
};

export default withStyles(styles)(Welcome);
