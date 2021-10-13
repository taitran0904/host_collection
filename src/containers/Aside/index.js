import React from "react";
import { withStyles } from "@mui/styles";
import PropTypes from "prop-types";
import { compose, bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as generalActions from "../../actions/general";
import * as userActions from "../../actions/user";
import * as birthdayActions from "../../actions/birthday";
import * as authActions from "../../actions/auth";
import styles from "./styles";
import { Welcome, MainMenu } from "../../components/AsideComponent";

class Aside extends React.Component {
  componentDidMount = () => {
    const { generalActionCreators, userActionCreators } = this.props;
    const { fetchLocation, fetchBannerAside, fetchGeneralInfo } =
      generalActionCreators;
    const { fetchUserInfo } = userActionCreators;

    fetchLocation();
    fetchBannerAside();
    fetchGeneralInfo();
    fetchUserInfo();
  };

  render() {
    const {
      classes,
      history,
      authActionCreators,
      authStatus,
      userInfo,
      generalActionCreators,
      aside,
    } = this.props;
    const { logout } = authActionCreators;
    const { hideAside } = generalActionCreators;

    return (
      <div className={`${classes.aside} ${aside ? classes.active : ""}`}>
        <Welcome
          hideAside={hideAside}
          history={history}
          authStatus={authStatus}
          userInfo={userInfo}
          logout={logout}
        />
        <MainMenu hideAside={hideAside} />
      </div>
    );
  }
}

Aside.propTypes = {
  classes: PropTypes.object,
  locations: PropTypes.array,
  banners: PropTypes.array,
  generalInfo: PropTypes.array,
  aside: PropTypes.bool,
  history: PropTypes.object,
  userInfo: PropTypes.object,
  authStatus: PropTypes.string,
  currentLocation: PropTypes.object,
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
