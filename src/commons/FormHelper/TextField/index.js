import React from "react";
import { withStyles } from "@mui/styles";
import PropTypes from "prop-types";
import { TextField, InputAdornment } from "@mui/material";
import styles from "./styles";

const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  icon,
  ...custom
}) => {
  return (
    <TextField
      fullWidth={true}
      placeholder={label}
      variant="standard"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            {icon ? icon : <div></div>}
          </InputAdornment>
        ),
      }}
      error={touched && invalid}
      helperText={touched && error}
      {...input}
      {...custom}
    />
  );
};

renderTextField.propTypes = {
  classes: PropTypes.object,
  label: PropTypes.string,
  input: PropTypes.object,
  meta: PropTypes.object,
};

export default withStyles(styles)(renderTextField);
