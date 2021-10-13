import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { withStyles } from "@mui/styles";
import PropTypes from "prop-types";
import { Upload, message, Popconfirm } from "antd";
import { FiPlus, FiX } from "react-icons/fi";

import _ from "lodash/lang";
import styles from "./styles";
import "./styles.css";
import { IMAGE_BASE_URL } from "../../../constants";
import { removeImageAvatarUser, fetchUserInfo } from "../../../actions/user";
import * as titleConstants from "../../../constants/ui/myPage";

function beforeUpload(file) {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
}

function AvatarUpload(props) {
  const { classes, onUploadOneImage, label, userInfo } = props;
  const [imageUrl, setImageUrl] = useState("");

  const dispatch = useDispatch();

  const uploadButton = (
    <div>
      <div className="ant-upload-text">
        <FiPlus /> {label}
      </div>
    </div>
  );

  function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  const renderImg = () => {
    let result = "";

    const { userInfo, shopItemEditing } = props;

    if (imageUrl) {
      result = <img src={imageUrl} alt={"avatar"} />;
    } else if (!_.isEmpty(userInfo.avatar)) {
      result = (
        <img
          src={`${IMAGE_BASE_URL}/avatar/small/${userInfo.avatar}`}
          alt={userInfo.avatar}
        />
      );
    } else if (!_.isEmpty(shopItemEditing)) {
      result = (
        <img
          src={`${IMAGE_BASE_URL}/avatar/small/${shopItemEditing.avatar_image}`}
          alt={shopItemEditing.avatar}
        />
      );
    } else {
      result = "";
    }
    return result;
  };

  const handleChange = (info) => {
    onUploadOneImage(info.file.originFileObj);
    if (info.file.originFileObj) {
      getBase64(info.file.originFileObj, (imageUrl) => setImageUrl(imageUrl));
    }
  };

  const onConfirm = () => {
    dispatch(removeImageAvatarUser(userInfo.id, userInfo.avatar));
    dispatch(fetchUserInfo());
  };

  return (
    <div className={classes.container}>
      <div className={classes.groupImage}>
        {userInfo.avatar !== null ? (
          <Popconfirm
            title={titleConstants.CONFIRM_DELETE}
            onConfirm={onConfirm}
            // onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <a href="#">
              <FiX />
            </a>
          </Popconfirm>
        ) : (
          ""
        )}

        {renderImg()}
      </div>
      <Upload
        name="avatar"
        listType="picture-card"
        className={classes.avatarUpload}
        showUploadList={false}
        action=""
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {uploadButton}
      </Upload>
    </div>
  );
}

AvatarUpload.propTypes = {
  classes: PropTypes.object,
  onUploadOneImage: PropTypes.func,
  avatarUserTemp: PropTypes.object,
  label: PropTypes.string,
  userInfo: PropTypes.object,
  shopItemEditing: PropTypes.object,
};

export default withStyles(styles)(AvatarUpload);
