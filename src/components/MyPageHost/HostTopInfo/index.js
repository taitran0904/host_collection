import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";

import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import {
  Typography,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";

import _ from "lodash/lang";
import * as titleConstants from "../../../constants/ui/myPage";
import styles from "./styles";
import { IMAGE_BASE_URL } from "../../../constants";
import noAvatar from "../../../assets/images/no-avatar.png";
import { fetchShopList } from "../../../actions/shop";
import { fetchRevenue } from "../../../actions/pos";
import Cookies from "js-cookie";
import { FiChevronDown, FiChevronRight, FiChevronsDown } from "react-icons/fi";

const useStyles = makeStyles(styles);

const drawerBleeding = 56;

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 15px)",
}));

function HostTopInfo(props) {
  const { userInfo, window } = props;

  const classes = useStyles();
  const dispatch = useDispatch();

  const shopList = useSelector((state) => state.shop.shopList);
  const [shopDataList, setShopDataList] = useState([]);
  const [userData, setUserData] = useState({});
  const [selectedOption, setSelectedOption] = useState();

  const shopId_ck = Cookies.get("shopId_hc");

  useEffect(() => {
    dispatch(fetchShopList());
    dispatch(fetchRevenue({ shop_id: shopId_ck }));
  }, [dispatch]);

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
    setUserData(userInfo);
  }, [userInfo]);

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
    if (!_.isEmpty(userData)) {
      result =
        userData.avatar !== null ? (
          <div className={classes.groupAvatar}>
            <img
              src={`${IMAGE_BASE_URL}/avatar/small/${userData.avatar}`}
              alt="avatar"
            />
          </div>
        ) : (
          <img src={noAvatar} alt="avatar" />
        );
    }
    return result;
  };

  const onChangeSelect = (e) => {
    const { name, value } = e.target;
    Cookies.set("shopId_hc", value, { expires: 1 });
    setSelectedOption(parseInt(value));
    window?.location.reload();
  };

  const renderShopList = () => {
    return (
      <Box sx={{ maxWidth: 170, minWidth: 170 }}>
        <FormControl fullWidth>
          <InputLabel sx={{ marginTop: -1 }}>ストアリスト</InputLabel>
          <Select
            value={selectedOption}
            label="ストアリスト"
            onChange={onChangeSelect}
            size="small"
          >
            {shopDataList.map((item) => {
              return (
                <MenuItem key={item.id} value={item.id}>
                  {item.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>
    );
  };

  return (
    <div className={classes.avatarBox}>
      <div className={classes.avatarBoxLeft}>
        {renderAvatar()}
        <h4>{renderNickName()}</h4>
      </div>
      {renderShopList()}
    </div>
  );
}

HostTopInfo.propTypes = {
  classes: PropTypes.object,
  userInfo: PropTypes.object,
  window: PropTypes.object,
};

export default HostTopInfo;
