import React from "react";
import { withStyles } from "@mui/styles";
import PropTypes from "prop-types";
import { Box } from "@mui/material";

import styles from "./styles";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      <Box>{children}</Box>
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}

function MemberTopFavorite(props) {
  const { classes } = props;
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return <div className={classes.container}></div>;
}

MemberTopFavorite.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(MemberTopFavorite);
