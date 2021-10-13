import React, { useState, useEffect } from "react";
import { withStyles } from "@mui/styles";
import { compose, bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as shopAction from "../../actions/shop";
import styles from "./styles";

const ActiveStatus = (props) => {
  const { classes, shopActionCreators, activeStatus } = props;

  const [data, setData] = useState({});

  const queryParams = new URLSearchParams(window.location.search);

  const id = queryParams.get("id");
  const email = queryParams.get("email");
  const status = queryParams.get("status");
  const token = queryParams.get("token");

  useEffect(() => {
    shopActionCreators.activeStatus({
      id,
      email,
      status,
      token,
    });
  }, []);

  useEffect(() => {
    setData(activeStatus);
  }, [activeStatus]);

  const renderNotification = () => {
    let view = "";
    if (data.message === "success" && data.data.status === 1) {
      view = (
        <p className={classes.success}>
          Active added to the shop <span>{data?.data?.shop?.name}</span>{" "}
          successfully.
        </p>
      );
    } else if (data.message === "success" && data.data.status === 2) {
      view = (
        <p className={classes.reject}>
          Reject add to the shop <span>{data?.data?.shop?.name}</span>{" "}
          successfully.
        </p>
      );
    } else {
      view = (
        <p className={classes.error}>
          Error add to the shop <span>{data?.data?.shop?.name}</span>, please
          contact admin.
        </p>
      );
    }
    return view;
  };

  return (
    <div className={classes.root}>
      <div className={classes.wrapActiveStatus}>
        <div className={classes.notification}>{renderNotification()}</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    activeStatus: state.shop.activeStatus,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    shopActionCreators: bindActionCreators(shopAction, dispatch),
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withStyles(styles), withConnect)(ActiveStatus);
