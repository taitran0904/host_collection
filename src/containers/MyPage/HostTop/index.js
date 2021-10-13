import React from "react";
import { withStyles } from "@mui/styles";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import styles from "./styles";
import {
  HostTopInfo,
  HostTopInfoStatistical,
} from "../../../components/MyPageHost";

function HostTop(props) {
  const { classes, userInfo } = props;

  return (
    <div className={classes.container}>
      <HostTopInfo userInfo={userInfo} />
      <div className={classes.bulkhead}></div>
      <HostTopInfoStatistical />
    </div>
  );
}

HostTop.propTypes = {
  classes: PropTypes.object,
  userInfo: PropTypes.object,
};

const mapStateToProps = (state) => ({
  userInfo: state.user.userInfo,
});

const mapDispatchToProps = null;

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withStyles(styles), withConnect)(HostTop);
