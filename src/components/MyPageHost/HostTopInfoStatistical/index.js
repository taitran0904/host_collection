import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { compose, bindActionCreators } from "redux";

import { withStyles } from "@mui/styles";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import * as titleConstants from "../../../constants/ui/myPage";
import * as constantsGeneral from "../../../constants/ui";
import styles from "./styles";
import * as userAction from "../../../actions/user";
import { formatMoney } from "../../../commons/functionHelpers";
import Cookies from "js-cookie";

function TabPanel(props) {
  const { children, value, index, classes, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      <Box>{children}</Box>
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
  classes: PropTypes.object,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}

function HostTopInfoStatistical(props) {
  const { classes, hostSales, revenueData } = props;

  const { fetchHostSales } = props.hostSalesCreators;

  const [value, setValue] = React.useState(0);

  const [revenue, setRevenue] = useState({
    total_sales: 0,
    total_receivables: 0,
    rank: 0,
  });
  const shopId_ck = Cookies.get("shopId_hc");

  useEffect(() => {
    if (revenueData?.id) {
      setRevenue(revenueData);
    }
  }, [revenueData]);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  useEffect(() => {
    fetchHostSales({ type: "month", shop_id: shopId_ck });
  }, [props.hostSalesCreators]);

  const onClickDate = () => {
    fetchHostSales({ type: "day" });
  };

  const onClickWeek = () => {
    fetchHostSales({ type: "week" });
  };

  const onClickMonth = () => {
    fetchHostSales({ type: "month" });
  };

  return (
    <div className={classes.statistical}>
      <text className={classes.title}>
        {titleConstants.REVENUE_OF_THIS_MONTH}
      </text>
      <div className={classes.groupRevenue}>
        <p>
          {constantsGeneral.SALES}:{" "}
          <span>¥{formatMoney(parseInt(revenue.total_sales))}</span>
        </p>
        <p>
          {constantsGeneral.RECEIVABLES}:{" "}
          <span>¥{formatMoney(parseInt(revenue.total_receivables))}</span>
        </p>
        <p>
          {constantsGeneral.RANKING}: <span>{revenue.rank}</span>
        </p>
      </div>
    </div>
  );
}

HostTopInfoStatistical.propTypes = {
  classes: PropTypes.object,
};

const mapStateToProps = (state) => ({
  hostSales: state.user.hostSales,
  revenueData: state.pos.revenue,
});

const mapDispatchToProps = (dispatch) => ({
  hostSalesCreators: bindActionCreators(userAction, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withStyles(styles), withConnect)(HostTopInfoStatistical);
