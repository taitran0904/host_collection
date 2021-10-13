import React, { useEffect } from "react";
import { withStyles } from "@mui/styles";
import PropTypes from "prop-types";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./styles";
import getToken from "../../commons/getToken";

function Homepage(props) {
  const { classes, history } = props;

  useEffect(() => {
    if (getToken()) {
      history.push("/my-page");
    } else {
      history.push("/login");
    }
  }, []);

  return (
    <div>
      <div className={classes.container}></div>
    </div>
  );
}

Homepage.propTypes = {
  classes: PropTypes.object,
  history: PropTypes.object,
};

export default withStyles(styles)(Homepage);
