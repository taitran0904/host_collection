import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@mui/material";

const renderTextFieldOutlined = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => {
  return (
    <TextField
      error={touched && invalid}
      helperText={touched && error}
      size="small"
      {...input}
      {...custom}
    />
  );
};

renderTextFieldOutlined.propTypes = {
  classes: PropTypes.object,
  label: PropTypes.string,
  input: PropTypes.object,
  meta: PropTypes.object,
};

export default renderTextFieldOutlined;
