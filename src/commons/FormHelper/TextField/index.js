import React from "react";
import { withStyles } from "@mui/styles";
import PropTypes from "prop-types";
import { TextField, InputAdornment } from "@mui/material";
import { FiKey, FiMail } from "react-icons/fi";
import styles from "./styles";
import { width } from "@mui/system";

const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
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
            <FiMail size={24} color="#cccccc" fontSize={1} />
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
