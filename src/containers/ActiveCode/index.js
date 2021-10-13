import React, { useState, useEffect } from "react";
import styles from "./styles";
import { withStyles } from "@mui/styles";
import { NavLink } from "react-router-dom";
import { compose, bindActionCreators } from "redux";
import * as userAction from "../../actions/user";
import { connect } from "react-redux";

import { Input, Button } from "antd";

const ActiveCode = (props) => {
  const { classes, userActionCreators, history, match } = props;

  const token_active = match.params.token_active;

  const [data, setData] = useState({});

  useEffect(() => {
    setData({
      ...data,
      token_active,
    });
  }, []);

  const onClickActive = () => {
    userActionCreators.activeUserRegister({
      data,
      history,
    });
  };

  const onChangeCode = (e) => {
    const { name, value } = e.target;

    setData({
      ...data,
      code: value,
    });
  };

  return (
    <div className={classes.wrap__active}>
      <div className={classes.title__active}>Please input code from email</div>
      <div className={classes.input__active}>
        <Input
          placeholder="Enter code"
          style={{ width: "25%" }}
          size="large"
          name="code"
          onChange={(e) => onChangeCode(e)}
        />
      </div>
      <div className={classes.group__btn__active}>
        <Button
          type="primary"
          className={classes.btn__active}
          size="large"
          style={{
            width: "100px",
            textTransform: "uppercase",
          }}
          onClick={onClickActive}
        >
          Active
        </Button>
        <NavLink
          to={`/member/resend-code`}
          className={classes.btn__active_link}
        >
          Resend
        </NavLink>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    activeRegister: state.user.activeRegister,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userActionCreators: bindActionCreators(userAction, dispatch),
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withStyles(styles),
  // withReduxForm,
  withConnect
)(ActiveCode);
