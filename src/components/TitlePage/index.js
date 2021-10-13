import React from "react";
import { withStyles } from "@mui/styles";
import PropTypes from "prop-types";
import styles from "./styles";

function TitlePage(props) {
  const { classes, title, icon, containerStyle } = props;

  return (
    <div style={containerStyle} className={classes.titlePage}>
      {icon && icon}
      <h1>{title}</h1>
    </div>
  );
}

TitlePage.propTypes = {
  classes: PropTypes.object,
  title: PropTypes.string,
  icon: PropTypes.object,
  containerStyle: PropTypes.object,
};

export default withStyles(styles)(TitlePage);
