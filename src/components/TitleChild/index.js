import React from "react";
import { withStyles } from "@mui/styles";
import PropTypes from "prop-types";
import styles from "./styles";

function TitleChild(props) {
  const { classes, titleChild, style } = props;

  return (
    <div style={style} className={`${classes.titleChild} titleChild`}>
      <h5>{titleChild}</h5>
    </div>
  );
}

TitleChild.propTypes = {
  classes: PropTypes.object,
  titleChild: PropTypes.string,
  style: PropTypes.object,
};

export default withStyles(styles)(TitleChild);
