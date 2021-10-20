import React, { useState } from "react";
import { withStyles } from "@mui/styles";
import { Button, FormControlLabel, Checkbox } from "@mui/material";
import { FiUser, FiKey, FiEye, FiEyeOff, FiMail } from "react-icons/fi";
import PropTypes from "prop-types";
import { compose, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { NavLink } from "react-router-dom";

import * as authAction from "../../../actions/auth";
import renderTextField from "../../../commons/FormHelper/TextField";
import * as titleConstants from "../../../constants/ui/login";
import validate from "./validate";
import styles from "./styles";
import Logo from "../../../assets/images/logo.png";

function LoginComponent(props) {
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(false);

  const { classes, handleSubmit, submitting } = props;

  const onHandleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onLogin = (data) => {
    const { email, password } = data;
    const { authActionCreators, history } = props;
    const { loginFlow } = authActionCreators;
    loginFlow(email, password, history, checked);
  };

  return (
    <div className={classes.login}>
      <div className={`${classes.loginContent}`}>
        <form onSubmit={handleSubmit(onLogin)}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 60,
            }}
          >
            <img style={{ width: 200 }} src={Logo} alt="logo" />
          </div>
          <div className={classes.divField}>
            <Field
              id="email"
              label={titleConstants.EMAIL_ADDRESS}
              name="email"
              component={renderTextField}
              className={classes.textField}
              icon={<FiMail size={20} />}
              value=""
              autoFocus
            />
          </div>
          <div className={classes.divField}>
            <Field
              id="password"
              label={titleConstants.PASSWORD}
              name="password"
              className={classes.textField}
              component={renderTextField}
              type={showPassword ? "text" : "password"}
              icon={<FiKey size={20} />}
            />
            <button
              type="button"
              className={classes.showPassword}
              onClick={onHandleShowPassword}
            >
              {showPassword ? <FiEye /> : <FiEyeOff />}
            </button>
          </div>
          <div>
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  checked={checked}
                  onChange={() => setChecked(!checked)}
                  name="remember"
                />
              }
              label="Remember me"
            />
            <Button
              sx={{
                backgroundColor: "#555",
                float: "right",
                paddingLeft: 4,
                paddingRight: 4,
                fontWeight: "bold",
                fontSize: 12,
              }}
              disabled={submitting}
              variant="contained"
              type="submit"
              className={classes.loginBtn}
            >
              {titleConstants.LOGIN_BUTTON}
            </Button>
          </div>
          <div className={classes.group__register}>
            <span>また</span>
            <NavLink to="/register" exact>
              登録
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}

LoginComponent.propTypes = {
  classes: PropTypes.object,
  onChangeRegister: PropTypes.func,
  status: PropTypes.bool,
  handleSubmit: PropTypes.func,
  submitting: PropTypes.bool,
  history: PropTypes.object,
  authActionCreators: PropTypes.shape({
    loginFlow: PropTypes.func,
  }),
};

const mapStateToProps = (state) => {
  return {
    userSearched: state.auth.userSearched,
    token: state.auth.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    authActionCreators: bindActionCreators(authAction, dispatch),
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReduxForm = reduxForm({
  form: titleConstants.LOGIN_FORM_NAME,
  validate,
});

export default compose(
  withStyles(styles),
  withReduxForm,
  withConnect
)(LoginComponent);
