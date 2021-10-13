import React from "react";
import { withStyles } from "@mui/styles";
import PropTypes from "prop-types";
import { bindActionCreators, compose } from "redux";
import { connect } from "react-redux";

import styles from "./styles";
import * as uiActions from "../../actions/loading";
import "./styles.css";

class GlobalLoading extends React.Component {
  render() {
    const { classes, showLoading } = this.props;

    let result = null;

    if (showLoading) {
      result = (
        <div className={classes.wrapper}>
          <div className="loading">
            <div className="loading__square" />
            <div className="loading__square" />
            <div className="loading__square" />
            <div className="loading__square" />
            <div className="loading__square" />
            <div className="loading__square" />
            <div className="loading__square" />
          </div>
        </div>
      );
    }

    return result;
  }
}

GlobalLoading.propTypes = {
  classes: PropTypes.object,
  showLoading: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return {
    showLoading: state.loading.showLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    uiActions: bindActionCreators(uiActions, dispatch),
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withStyles(styles), withConnect)(GlobalLoading);
