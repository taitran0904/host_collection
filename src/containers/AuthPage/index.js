import React, { useState } from "react";
import { withStyles } from "@mui/styles";
import PropTypes from "prop-types";
import styles from "./styles";
import { LoginComponent } from "../../components/AuthComponent";

function LoginPage(props) {
  const { classes, history } = props;
  const [loginStatus, setLoginStatus] = useState(true);
  const [registerStatus, setRegisterStatus] = useState(false);

  const onChangeRegister = () => {
    setLoginStatus(true);
    setRegisterStatus(false);
  };

  return (
    <div className={classes.auth__page}>
      <div className={classes.loginWrapper}>
        <LoginComponent
          status={loginStatus}
          onChangeRegister={onChangeRegister}
          history={history}
        />
      </div>
    </div>
  );
}

LoginPage.propTypes = {
  classes: PropTypes.object,
  history: PropTypes.object,
};

export default withStyles(styles)(LoginPage);
