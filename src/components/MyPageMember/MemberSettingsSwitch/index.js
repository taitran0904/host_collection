import React from "react";
import { withStyles } from "@mui/styles";
import PropTypes from "prop-types";
import styles from "./styles";

function MemberSettingsSwitch(props) {
  const { classes, onHandleSwitch, switchState } = props;

  return <></>;
}

MemberSettingsSwitch.propTypes = {
  classes: PropTypes.object,
  onHandleSwitch: PropTypes.func,
  switchState: PropTypes.object,
};

export default withStyles(styles)(MemberSettingsSwitch);
