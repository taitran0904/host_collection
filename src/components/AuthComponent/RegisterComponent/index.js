import React, { useState } from "react";
import { withStyles } from "@mui/styles";
import PropTypes from "prop-types";
import { Button } from "@mui/material";
import { reduxForm, Field } from "redux-form";
import { compose, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { FiEye, FiEyeOff, FiKey, FiMail, FiUser } from "react-icons/fi";
import { NavLink } from "react-router-dom";

import renderTextField from "../../../commons/FormHelper/TextField";
import validate from "./validate";
import * as authAction from "../../../actions/auth";
import styles from "./styles";
import * as titleConstants from "../../../constants/ui/login";
import Logo from "../../../assets/images/logo.png";

function RegisterComponent(props) {
  const [showPassword, setShowPassword] = useState(false);
  const { classes, handleSubmit, submitting, authActionCreators, history } =
    props;

  const onHandleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onRegister = (data) => {
    const {
      nameRegister,
      emailRegister,
      passwordRegister,
      rePasswordRegister,
    } = data;

    authActionCreators.register({
      nameRegister,
      emailRegister,
      passwordRegister,
      rePasswordRegister,
      history,
    });
  };

  return (
    <div className={classes.register}>
      <div className={`${classes.registerContent}`}>
        <form onSubmit={handleSubmit(onRegister)}>
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
              id="nameRegister"
              label={titleConstants.NAME}
              name="nameRegister"
              component={renderTextField}
              className={classes.textField}
              value=""
              margin="none"
              icon={<FiUser size={20} />}
              fullWidth
            />
          </div>
          <div className={classes.divField}>
            <Field
              id="emailRegister"
              label={titleConstants.EMAIL_ADDRESS}
              name="emailRegister"
              component={renderTextField}
              className={classes.textField}
              value=""
              margin="none"
              icon={<FiMail size={20} />}
              fullWidth
            />
          </div>
          <div className={classes.divField}>
            <Field
              id="passwordRegister"
              label={titleConstants.PASSWORD}
              name="passwordRegister"
              className={classes.textField}
              component={renderTextField}
              type={showPassword ? "text" : "password"}
              margin="none"
              icon={<FiKey size={20} />}
              fullWidth
            />
            <button
              type="button"
              className={classes.showPassword}
              onClick={onHandleShowPassword}
            >
              {showPassword ? <FiEye /> : <FiEyeOff />}
            </button>
          </div>
          <div className={classes.divField}>
            <Field
              id="rePasswordRegister"
              label={titleConstants.RETYPE_PASSWORD}
              name="rePasswordRegister"
              className={classes.textField}
              component={renderTextField}
              type={showPassword ? "text" : "password"}
              margin="none"
              icon={<FiKey size={20} />}
              fullWidth
            />
            <button
              type="button"
              className={classes.showPassword}
              onClick={onHandleShowPassword}
            >
              {showPassword ? <FiEye /> : <FiEyeOff />}
            </button>
          </div>

          <div className={classes.group__login}>
            <Button
              disabled={submitting}
              variant="contained"
              type="submit"
              className={classes.registerBtn}
            >
              {titleConstants.QUICK_REGISTER}
            </Button>
            <p>
              <NavLink to="/login" exact>
                こちらからログイン
              </NavLink>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

const withReduxForm = reduxForm({
  form: titleConstants.REGISTER_FORM_NAME,
  validate,
});

RegisterComponent.propTypes = {
  classes: PropTypes.object,
  onChangeLogin: PropTypes.func,
  status: PropTypes.bool,
  handleSubmit: PropTypes.func,
  submitting: PropTypes.bool,
  history: PropTypes.object,
  authActionCreators: PropTypes.shape({
    register: PropTypes.func,
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

export default compose(
  withStyles(styles),
  withReduxForm,
  withConnect
)(RegisterComponent);
