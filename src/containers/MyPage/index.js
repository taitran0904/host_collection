import React from "react";
import { withStyles } from "@mui/styles";
import PropTypes from "prop-types";
import { Route, Switch, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import _ from "lodash/lang";

import styles from "./styles";
import * as titleConstants from "../../constants/ui/myPage";
import TitlePage from "../../components/TitlePage";
import {
  myPageMemberRoutes,
  myPageHostRoutes,
  myPageShopRoutes,
} from "../../routes";

function MyPage(props) {
  const { classes } = props;

  const renderMyPageMember = (myPageMemberRoutes) => {
    let result = null;

    if (myPageMemberRoutes.length > 0) {
      result = myPageMemberRoutes.map((route) => {
        return (
          <Route
            key={route.id}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    return result;
  };

  const renderMyPageHost = (myPageHostRoutes) => {
    let result = null;

    if (myPageHostRoutes.length > 0) {
      result = myPageHostRoutes.map((route) => {
        return (
          <Route
            key={route.id}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    return result;
  };

  const renderMyPageShop = (myPageShopRoutes) => {
    let result = null;

    if (myPageShopRoutes.length > 0) {
      result = myPageShopRoutes.map((route) => {
        return (
          <Route
            key={route.id}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    return result;
  };

  const renderTabOfHost = (myPageHostRoutes) => {
    let result = null;
    const { classes } = props;

    if (myPageHostRoutes.length > 0) {
      result = myPageHostRoutes.map((route) => {
        return (
          <NavLink
            className={classes.tabItem}
            key={`tab-${route.id}`}
            to={route.path}
            exact={route.exact}
          >
            {route.name}
          </NavLink>
        );
      });
    }
    return result;
  };

  const renderMyPageByRole = () => {
    const { userInfo } = props;
    let result = null;
    if (!_.isEmpty(userInfo)) {
      switch (userInfo.role) {
        case 4: {
          result = (
            <>
              <div className={classes.tabHost}>
                {renderTabOfHost(myPageHostRoutes)}
              </div>
              <div className={classes.myPageContent}>
                <Switch>{renderMyPageHost(myPageHostRoutes)}</Switch>
              </div>
            </>
          );
          break;
        }
        default: {
          result = (
            <div className={classes.myPageContent}>
              <Switch>
                {renderMyPageMember(myPageMemberRoutes)}
                {renderMyPageShop(myPageShopRoutes)}
              </Switch>
            </div>
          );
          break;
        }
      }
    }
    return result;
  };

  return (
    <div className={classes.container}>
      <TitlePage title={titleConstants.MY_PAGE} />
      {renderMyPageByRole()}
    </div>
  );
}

MyPage.propTypes = {
  classes: PropTypes.object,
  userInfo: PropTypes.object,
};

const mapStateToProps = (state) => ({
  userInfo: state.user.userInfo,
});

const mapDispatchToProps = null;

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withStyles(styles), withConnect)(MyPage);
