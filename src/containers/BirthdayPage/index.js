import React from "react";
import { withStyles } from "@mui/styles";
import PropTypes from "prop-types";
import styles from "./styles";
import { Birthday } from "../../components/HomeComponent";

const months = [];

for (let i = 1; i <= 12; i++) {
  if (i === new Date().getMonth() + 1) {
    months.push({ selected: true, name: i });
  } else {
    months.push({ selected: false, name: i });
  }
}

function BirthdayPage(props) {
  return <Birthday isPage hiddenViewMore />;
}

BirthdayPage.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(BirthdayPage);
