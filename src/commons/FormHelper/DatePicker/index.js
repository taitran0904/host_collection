import "date-fns";
import React from "react";
import { withStyles } from "@mui/styles";
import PropTypes from "prop-types";
// import {
//   DatePicker,
//   MuiPickersUtilsProvider
// } from '@mui/lab';
import { DatePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DateFnsUtils from "@date-io/date-fns";
import styles from "./styles";
import { TextField } from "@mui/material";

const renderDatePicker = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  // <MuiPickersUtilsProvider utils={DateFnsUtils}>
  //   <DatePicker
  //     label={label}
  //     placeholder={label}
  //     error={touched && invalid}
  //     helperText={touched && error}
  //     format="MM/dd/yyyy"
  //     {...input}
  //     {...custom}
  //   />
  // </MuiPickersUtilsProvider>
  <LocalizationProvider dateAdapter={AdapterDateFns}>
    <DatePicker
      disableFuture
      label={label}
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
