import React from "react";
import { withStyles } from "@mui/styles";
import { Fab } from "@mui/material";
import PropTypes from "prop-types";
import {
  MdCake,
  MdHeight,
  MdBloodtype,
  MdWifiTethering,
  MdLocationPin,
  MdDescription,
  MdCall,
  MdEmail,
} from "react-icons/md";
import { Route } from "react-router-dom";
import _ from "lodash/lang";
import { useHistory } from "react-router-dom";
import { FiEdit, FiInstagram, FiTwitter, FiYoutube } from "react-icons/fi";
import styles from "./styles";
import * as titleContant from "../../../constants/ui/aside";
import * as titleConstants from "../../../constants/ui/myPage";
import { IMAGE_BASE_URL } from "../../../constants";

import noAvatar from "../../../assets/images/no-avatar.png";

function HostProfileView(props) {
  const { classes, onUploadOneImage, userInfo } = props;
  const history = useHistory();
  const renderAvatar = () => {
    let result = "";
    if (!_.isEmpty(userInfo) && !_.isEmpty(userInfo.avatar)) {
      result = (
        <img src={`${IMAGE_BASE_URL}/avatar/${userInfo.avatar}`} alt="avatar" />
      );
    }
    // else {
    //   result = <img src={noAvatar} alt="avatar" />;
    // }
    return result;
  };

  const renderUserName = () => {
    let result = "";
    const { userInfo } = props;

    if (_.isEmpty(userInfo) || userInfo.name === null) {
      result = `${titleContant.WELCOME_TO_PORTAL}`;
    } else {
      result = `${userInfo.name}`;
    }
    return result;
  };

  return (
    <div style={{ position: "relative" }}>
      <div className={classes.inforHeader}>
        <div className={classes.coverImage}></div>
        <div className={classes.avatarInfo}>
          <div className={classes.avatar}>{renderAvatar()}</div>
          <text className={classes.userName}>{renderUserName()}</text>
        </div>
      </div>
      <hr />
      <div>
        <div className={classes.item}>
          <MdCake size={20} color="#555" />
          <text className={classes.itemName}>
            {titleConstants.DATE_OF_BIRTH}
          </text>
          <text className={classes.itemInfor}>{userInfo.birthday}</text>
        </div>
        <div className={classes.item}>
          <MdHeight size={20} />
          <text className={classes.itemName}>{titleConstants.HEIGHT}</text>
          <text className={classes.itemInfor}>{userInfo.height}</text>
        </div>
        <div className={classes.item}>
          <MdBloodtype size={20} />
          <text className={classes.itemName}>{titleConstants.BLOOD_GROUP}</text>
          <text className={classes.itemInfor}>{userInfo.blood_group}</text>
        </div>
        <div className={classes.item}>
          <MdWifiTethering size={20} />
          <text className={classes.itemName}>{titleConstants.ZODIAC}</text>
          <text className={classes.itemInfor}>{userInfo.zodiac}</text>
        </div>
        <div className={classes.item}>
          <MdDescription size={20} />
          <text className={classes.itemName}>
            {titleConstants.OTHER_INFORMATION}
          </text>
          <text className={classes.itemInfor}>{userInfo.description}</text>
        </div>
        <hr />
        <div className={classes.item}>
          <MdLocationPin size={20} />
          <text className={classes.itemName}>{titleConstants.ADDRESS}</text>
          <text className={classes.itemInfor}>{userInfo.address}</text>
        </div>
        <div className={classes.item}>
          <MdCall size={20} />
          <text className={classes.itemName}>
            {titleConstants.PHONE_NUMBER}
          </text>
          <text className={classes.itemInfor}>{userInfo.phone}</text>
        </div>
        <div className={classes.item}>
          <MdCall size={20} />
          <text className={classes.itemName}>{titleConstants.LINE}</text>
          <text className={classes.itemInfor}>{userInfo.line}</text>
        </div>
        <div className={classes.item}>
          <MdEmail size={20} />
          <text className={classes.itemName}>{titleConstants.EMAIL}</text>
          <text className={classes.itemInfor}>{userInfo.email}</text>
        </div>
        <div className={classes.item}>
          <FiInstagram size={20} />
          <text style={{ marginLeft: 10 }} className={classes.itemInfor}>
            {userInfo.instagram}
          </text>
        </div>
        <div className={classes.item}>
          <FiYoutube size={20} />
          <text style={{ marginLeft: 10 }} className={classes.itemInfor}>
            {userInfo.youtube}
          </text>
        </div>
        <div className={classes.item}>
          <FiTwitter size={20} />
          <text style={{ marginLeft: 10 }} className={classes.itemInfor}>
            {userInfo.twitter}
          </text>
        </div>
      </div>
      <Fab
        sx={{
          position: "fixed",
          bottom: 0,
          right: 0,
          marginBottom: 2,
          marginRight: 2,
          backgroundColor: "#555",
          color: "#fff",
        }}
        onClick={() => {
          history.push("/edit-profile");
        }}
      >
        <FiEdit size={24} />
      </Fab>
    </div>
  );
}

HostProfileView.propTypes = {
  classes: PropTypes.object,
  onUploadOneImage: PropTypes.func,
  onChangeTags: PropTypes.func,
  avatarUserTemp: PropTypes.object,
  userInfo: PropTypes.object,
};

export default withStyles(styles)(HostProfileView);
