import React from "react";
import { Redirect, Route } from "react-router-dom";
import PropTypes from "prop-types";
import getToken from "./getToken";

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      getToken() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login"
          }}
        />
      )
    }
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.any
};
