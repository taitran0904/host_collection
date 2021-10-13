import React, { useState } from "react";
import styles from "./styles";
import { withStyles } from "@mui/styles";
import { compose, bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as userAction from "../../actions/user";

import { Input, Button } from "antd";

const ResendCode = (props) => {
  const { classes, userActionCreators, history } = props;

  const [email, setEmail] = useState("");

  const onClickResendActive = () => {
    const data = {
      email,
    };

    userActionCreators.resendActiveUser({
      data,
      history,
    });
  };

  const onChange = (e) => {
    const { name, value } = e.target;

    setEmail(value);
  };

  return (
    <div className={classes.wrap__active}>
      <div className={classes.titleResend}>Please input email</div>
      <div className={classes.inputResend}>
        <Input
          placeholder="Email"
          style={{ width: "300px" }}
          name="email"
          onChange={onChange}
        />
      </div>
      <div className={classes.group_btn}>
        <Button
          type="primary"
          className={classes.btn__resend}
          size="default"
          style={{
            width: "100px",
            textTransform: "uppercase",
          }}
          onClick={onClickResendActive}
        >
          Resend
        </Button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    resendCode: state.user.resendCode,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userActionCreators: bindActionCreators(userAction, dispatch),
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withStyles(styles), withConnect)(ResendCode);
