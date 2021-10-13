import React from "react";
import { Redirect, Route } from "react-router-dom";
import PropTypes from "prop-types";
import getToken from "./getToken";

export const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      getToken() ? (
        <Redirect
          to={{
            pathname: "/"
          }}
        />
      ) : (
        <Component {...props} />
      )
    }
  />
);

ProtectedRoute.propTypes = {
  component: PropTypes.any
};
