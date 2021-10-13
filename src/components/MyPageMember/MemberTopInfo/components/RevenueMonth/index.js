import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles";
import { makeStyles } from "@mui/styles";
import * as myPageConstants from "../../../../../constants/ui/myPage";
import * as generalConstants from "../../../../../constants/ui";
import { formatMoney } from "../../../../../commons/functionHelpers";
import { fetchRanking, fetchRevenue } from "../../../../../actions/pos";
import Cookies from "js-cookie";

const useStyles = makeStyles(styles);

const RevenueMonth = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const shopId_ck = Cookies.get("shopId_hc");

  const revenue = useSelector((state) => state.pos.revenue);
  const shopList = useSelector((state) => state.shop.shopList);

  const [revenueData, setRevenueData] = useState({});
  const [shopDataList, setShopDataList] = useState([]);
  const [selectedOption, setSelectedOption] = useState();

  useEffect(() => {
    if (shopList.length > 0) {
      setShopDataList(shopList);
      const indexCheck = shopList.findIndex(
        (i) => i.id === parseInt(shopId_ck)
      );
      if (indexCheck === -1) {
        setSelectedOption(shopList[0].id);
        Cookies.set("shopId_hc", shopList[0].id, { expires: 1 });
      } else {
        setSelectedOption(parseInt(shopId_ck));
      }
    }
  }, [shopList]);

  useEffect(() => {
    dispatch(fetchRevenue({ shop_id: shopId_ck }));
    dispatch(fetchRanking({ shop_id: shopId_ck }));
  }, [selectedOption]);

  useEffect(() => {
    if (revenue?.id) {
      setRevenueData(revenue);
    } else {
      setRevenueData({
        total_sales: 0,
        total_receivables: 0,
        rank: 0,
      });
    }
  }, [revenue]);

  const onChangeSelect = (e) => {
    const { name, value } = e.target;
    Cookies.set("shopId_hc", value, { expires: 1 });
    setSelectedOption(parseInt(value));
    // window.location.reload();
  };

  const renderShopList = () => {
    return (
      <select
        className={classes.selectShop}
        onChange={onChangeSelect}
        value={selectedOption}
      >
        {shopDataList.map((item) => {
          return (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          );
        })}
      </select>
    );
  };

  return (
    <div className={classes.wrapRevenue}>
      <div className={classes.titleRevenue}>
        <p>{myPageConstants.REVENUE_OF_THIS_MONTH}</p>
        {renderShopList()}
      </div>
      <div className={classes.groupRevenue}>
        <p>
          {generalConstants.SALES}:{" "}
          <span>¥{formatMoney(parseInt(revenueData?.total_sales))}</span>
        </p>
        <p>
          {generalConstants.RECEIVABLES}:{" "}
          <span>¥{formatMoney(parseInt(revenueData?.total_receivables))}</span>
        </p>
        <p>
          {generalConstants.RANKING}: <span>{revenueData?.rank}</span>
        </p>
      </div>
    </div>
  );
};

export default RevenueMonth;
