import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";

import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
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
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const { userInfo, window } = props;

  const classes = useStyles();
  const dispatch = useDispatch();

  const shopList = useSelector((state) => state.shop.shopList);
  const [shopDataList, setShopDataList] = useState([]);
  const [userData, setUserData] = useState({});
  const [selectedOption, setSelectedOption] = useState();
  const [open, setOpen] = useState(false);

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
    window.location.reload();
  };

  const renderShopList = () => {
    return (
      <List onChangeSelect={onChangeSelect} value={selectedOption}>
        {shopDataList.map((item) => {
          return (
            <>
              <ListItem key={item.id} value={item.id} disablePadding>
                <ListItemButton component="a" href="#simple-list">
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
              <Divider />
            </>
          );
        })}
      </List>
    );
  };

  return (
    <div className={classes.avatarBox}>
      <div className={classes.avatarBoxLeft}>
        {renderAvatar()}
        <h4>{renderNickName()}</h4>
      </div>
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            height: `calc(50% - ${drawerBleeding}px)`,
            overflow: "visible",
          },
        }}
      />
      <Box sx={{ textAlign: "center", pt: 1 }}>
        <Button sx={{ backgroundColor: "#000" }} onClick={toggleDrawer(true)}>
          Open
        </Button>
      </Box>
      <SwipeableDrawer
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
          sx={{
            position: "absolute",
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: "visible",
            right: 0,
            left: 0,
          }}
        >
          {open ? <Puller /> : <div></div>}
          <Typography sx={{ p: 4, color: "text.secondary" }}></Typography>
        </StyledBox>
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            height: "100%",
            overflow: "auto",
          }}
        >
          {renderShopList()}
        </StyledBox>
      </SwipeableDrawer>
    </div>
  );
}

HostTopInfo.propTypes = {
  classes: PropTypes.object,
  userInfo: PropTypes.object,
  window: PropTypes.object,
};

export default HostTopInfo;
