import "date-fns";
import React from "react";
import { withStyles } from "@mui/styles";
import PropTypes from "prop-types";
import { DatePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import styles from "./styles";
import { TextField } from "@mui/material";

const renderDatePicker = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <LocalizationProvider dateAdapter={AdapterDateFns}>
    <DatePicker
      disableFuture
      openTo="year"
      views={["year", "month", "day"]}
      error={touched && invalid}
      helperText={touched && error}
      {...input}
      {...custom}
      renderInput={(params) => <TextField {...params} />}
    />
  </LocalizationProvider>
);

renderDatePicker.propTypes = {
  classes: PropTypes.object,
  label: PropTypes.string,
  input: PropTypes.object,
  meta: PropTypes.object,
};

export default withStyles(styles)(renderDatePicker);
