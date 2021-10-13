import React from "react";
import { withStyles } from "@mui/styles";
import PropTypes from "prop-types";
import { compose, bindActionCreators } from "redux";
import { connect } from "react-redux";

import styles from "./styles";
import { Welcome, MainMenu } from "../index";
import * as authActions from "../../../actions/auth";
import * as generalActions from "../../../actions/general";

function MobileMenu(props) {
  const { classes, authActionCreators, generalActionCreators } = props;
  const { logout } = authActionCreators;
  const { showAside, hideAside } = generalActionCreators;

  return (
    <div className={classes.mobileHeader}>
      <Welcome
        onHiddenAside={hideAside}
        onShowAside={showAside}
        mobile="mobile"
        logout={logout}
      />
      <MainMenu onHiddenAside={hideAside} mobile="mobile" />
    </div>
  );
}

MobileMenu.propTypes = {
  classes: PropTypes.object,
  authActionCreators: PropTypes.shape({
    logout: PropTypes.func,
  }),
  generalActionCreators: PropTypes.shape({
    showAside: PropTypes.func,
    hideAside: PropTypes.func,
  }),
};

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => {
  return {
    authActionCreators: bindActionCreators(authActions, dispatch),
    generalActionCreators: bindActionCreators(generalActions, dispatch),
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withStyles(styles), withConnect)(MobileMenu);
