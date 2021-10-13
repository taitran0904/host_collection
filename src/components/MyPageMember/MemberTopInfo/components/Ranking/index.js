import React, { useState, useEffect } from "react";
import styles from "./styles";
import { makeStyles } from "@mui/styles";
import * as generalConstants from "../../../../../constants/ui";
import { useSelector } from "react-redux";
import { formatMoney } from "../../../../../commons/functionHelpers";

const useStyles = makeStyles(styles);

const RevenueMonth = (props) => {
  const classes = useStyles();
  const ranking = useSelector((state) => state.pos.ranking);
  const userInfo = useSelector((state) => state.user.userInfo);
  const [rankData, setRankData] = useState([]);

  useEffect(() => {
    setRankData(ranking);
  }, [ranking]);

  return (
    <div className={classes.wrapRanking}>
      <div className={classes.titleRanking}>
        <p>{generalConstants.RANKING}</p>
      </div>
      <div className={classes.groupRanking}>
        {rankData.map((item) => {
          return (
            <p
              key={item.id}
              style={userInfo.id === item.id ? { fontWeight: "bold" } : {}}
            >
              #{item.rank} {item.nick_name} (¥
              {formatMoney(parseInt(item.sales))})
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default RevenueMonth;
