import React from "react";
import { withStyles } from "@mui/styles";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./styles";
import * as titleConstants from "../../../constants/ui/homepage";

function ViewMoreHome(props) {
  const { classes, link } = props;

  return (
    <div className={classes.container}>
      <NavLink to={link}>{titleConstants.VIEW_MORE}</NavLink>
    </div>
  );
}

ViewMoreHome.propTypes = {
  classes: PropTypes.object,
  link: PropTypes.string,
};

export default withStyles(styles)(ViewMoreHome);
