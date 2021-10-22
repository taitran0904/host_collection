import React, { useEffect } from "react";
import { withStyles } from "@mui/styles";
import PropTypes from "prop-types";
import { compose, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";

import * as generalActions from "../../actions/general";
import * as userActions from "../../actions/user";
import * as birthdayActions from "../../actions/birthday";
import * as authActions from "../../actions/auth";
import styles from "./styles";
import { Welcome, MainMenu } from "../../components/AsideComponent";
import { FiShoppingBag, FiUser } from "react-icons/fi";
import * as titleConstants from "../../constants/ui/myPage";

function Aside(props) {
  useEffect(() => {
    const { generalActionCreators, userActionCreators } = props;
    const { fetchUserInfo } = userActionCreators;

    fetchLocation();
    fetchBannerAside();
    fetchGeneralInfo();
    fetchUserInfo();
  }, []);

  const history = useHistory();
  const {
    classes,
    authActionCreators,
    authStatus,
    userInfo,
    generalActionCreators,
    aside,
  } = props;
  const { logout } = authActionCreators;
  const { hideAside, fetchLocation, fetchBannerAside, fetchGeneralInfo } =
    generalActionCreators;

  return (
    <div className={`${classes.aside} ${aside ? classes.active : ""}`}>
      <Welcome
        hideAside={hideAside}
        history={history}
        authStatus={authStatus}
        userInfo={userInfo}
        logout={logout}
      />
      <MainMenu />
      <p
        style={{
          backgroundColor: "#f0f0f0",
          textAlign: "center",
          padding: 10,
        }}
      >
        目次
      </p>
      <Button
        startIcon={<FiShoppingBag size={18} />}
        sx={{
          width: "70%",
          height: 60,
          color: "#555",
          mt: -2,
        }}
        onClick={() => {
          history.push("/shop-list");
          hideAside && hideAside();
        }}
      >
        <p>{titleConstants.SHOP_LIST}</p>
      </Button>
      <div style={{ height: 0.5, backgroundColor: "#e1e1e1" }} />
    </div>
  );
  // }
}

Aside.propTypes = {
  classes: PropTypes.object,
  locations: PropTypes.array,
  banners: PropTypes.array,
  generalInfo: PropTypes.array,
  aside: PropTypes.bool,
  userInfo: PropTypes.object,
  authStatus: PropTypes.string,
  currentLocation: PropTypes.object,
  history: PropTypes.object,
  hideAside: PropTypes.func,
  generalActionCreators: PropTypes.shape({
    fetchLocation: PropTypes.func,
    fetchBannerAside: PropTypes.func,
    fetchGeneralInfo: PropTypes.func,
    showAside: PropTypes.func,
    hideAside: PropTypes.func,
    setCurrentLocation: PropTypes.func,
  }),
  authActionCreators: PropTypes.shape({
    logout: PropTypes.func,
  }),
  userActionCreators: PropTypes.shape({
    fetchUserInfo: PropTypes.func,
  }),
};
const mapStateToProps = (state) => {
  return {
    locations: state.general.locations,
    banners: state.general.banners,
    generalInfo: state.general.generalInfo,
    authStatus: state.auth.authStatus,
    userInfo: state.user.userInfo,
    aside: state.general.aside,

    currentLocation: state.general.currentLocation,
    initialValues: {
      area: state.general.currentLocation,
    },
  };
};

const mapDispatchToProps = (dispatch) => ({
  generalActionCreators: bindActionCreators(generalActions, dispatch),
  authActionCreators: bindActionCreators(authActions, dispatch),
  userActionCreators: bindActionCreators(userActions, dispatch),
  birthdayActionCreators: bindActionCreators(birthdayActions, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withStyles(styles), withConnect)(Aside);
