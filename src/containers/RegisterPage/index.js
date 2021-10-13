import React, { useState } from "react";
import { withStyles } from "@mui/styles";
import PropTypes from "prop-types";
import styles from "./styles";
import { RegisterComponent } from "../../components/AuthComponent";

function LoginPage(props) {
  const { classes, history } = props;
  const [loginStatus, setLoginStatus] = useState(true);
  const [registerStatus, setRegisterStatus] = useState(false);

  const onChangeRegister = () => {
    setLoginStatus(true);
    setRegisterStatus(false);
  };

  const onChangeLogin = () => {
    setLoginStatus(false);
    setRegisterStatus(true);
  };

  return (
    <div>
      <div className={classes.loginWrapper}>
        <RegisterComponent
          status={registerStatus}
          onChangeLogin={onChangeLogin}
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
