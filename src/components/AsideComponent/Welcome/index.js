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

function Welcome(props) {
  const { classes, hideAside, mobile, onShowAside, authStatus } = props;

  const onLogout = () => {
    const { logout, history } = props;
    logout(history);
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
    <div className={mobile ? classes.welcomeMobile : ""}>
      <NavLink
        onClick={() => hideAside && hideAside()}
        className={mobile ? "logoMobile" : ""}
        to="/"
        exact={false}
      >
        <img className={classes.logo} src={logo} alt="logo" />
      </NavLink>

      <div className={classes.welcome}>
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
        <button
          type="button"
          onClick={onShowAside}
          className={`${classes.openBtn} ${mobile ? "menuMobile" : ""}`}
        >
          <FiMenu />
        </button>
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
