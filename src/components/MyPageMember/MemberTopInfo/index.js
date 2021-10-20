import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withStyles } from "@mui/styles";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import _ from "lodash/lang";
import { FiChevronRight } from "react-icons/fi";
import { BiText } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

import styles from "./styles";
import * as titleConstants from "../../../constants/ui/myPage";
import { IMAGE_BASE_URL } from "../../../constants";
import noAvatar from "../../../assets/images/no-avatar.png";
import RevenueMonth from "./components/RevenueMonth";
import { fetchRevenue, fetchRanking } from "../../../actions/pos";
import { fetchShopList } from "../../../actions/shop";
import Cookies from "js-cookie";

function MemberTopInfo(props) {
  const { classes, userInfo } = props;

  const revenueState = useSelector((state) => state.pos.revenue);
  const rankingState = useSelector((state) => state.pos.ranking);
  const shopList = useSelector((state) => state.shop.shopList);

  const shopId_ck = Cookies.get("shopId_hc");
  const dispatch = useDispatch();

  const [revenue, setRevenue] = useState({
    total_sales: 0,
    total_receivables: 0,
    rank: 0,
  });

  useEffect(() => {
    if (revenueState?.id) {
      setRevenue(revenueState);
    }
  }, [revenueState]);

  useEffect(() => {
    dispatch(fetchRevenue({ shop_id: shopId_ck }));
    dispatch(fetchRanking({ shop_id: shopId_ck }));
    dispatch(fetchShopList());
  }, [dispatch]);

  const renderNickName = () => {
    let result = "";
    if (!_.isEmpty(userInfo) && !_.isEmpty(userInfo.name)) {
      result = userInfo.name;
    } else {
      result = titleConstants.HAVE_NOT_NAME;
    }
    return result;
  };

  const renderAvatar = () => {
    let result = "";
    if (!_.isEmpty(userInfo) && !_.isEmpty(userInfo.avatar)) {
      result = (
        <img src={`${IMAGE_BASE_URL}/avatar/${userInfo.avatar}`} alt="avatar" />
      );
    } else {
      result = <img src={noAvatar} alt="avatar" />;
    }
    return result;
  };

  return (
    <div className={classes.container}>
      <div className={classes.avatarLink}>
        <NavLink
          style={{ textDecoration: "none" }}
          to="/my-page/member/settings"
        >
          <div className={classes.avatarBox}>
            <div className={classes.avatarBoxLeft}>
              {renderAvatar()}
              <text className={classes.name}>{renderNickName()}</text>
            </div>
            <FiChevronRight size={30} />
          </div>
        </NavLink>
      </div>
      <div className={classes.bulkhead}></div>
      <div className={classes.infoUser}>
        <div className={classes.lineInfo}>
          <BiText />
          <div className={classes.titleLine}>
            {titleConstants.NAME}
            <span>{userInfo.name}</span>
          </div>
        </div>
        <div className={classes.lineInfo}>
          <FaPhoneAlt />
          <div className={classes.titleLine}>
            {titleConstants.PHONE}
            <span>{userInfo.phone}</span>
          </div>
        </div>
        <div className={classes.lineInfo}>
          <AiOutlineMail />
          <div className={classes.titleLine}>
            {titleConstants.EMAIL}
            <span>{userInfo.email}</span>
          </div>
        </div>
      </div>
      <div className={classes.bulkhead}></div>
      <RevenueMonth revenue={revenue} shopList={shopList} />
    </div>
  );
}

MemberTopInfo.propTypes = {
  classes: PropTypes.object,
  userInfo: PropTypes.object,
};

export default withStyles(styles)(MemberTopInfo);
