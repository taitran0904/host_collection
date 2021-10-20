import React from "react";
import { withStyles } from "@mui/styles";
import PropTypes from "prop-types";
import { Field } from "redux-form";
import renderTextFieldOutlined from "../../../commons/FormHelper/TextFieldOutlined";
import renderAvatarUpload from "../../../commons/FormHelper/AvatarUpload";
import TitleChild from "../../TitleChild";
import styles from "./styles";
import * as titleConstants from "../../../constants/ui/myPage";

function MemberSettingsInfo(props) {
  const { classes, userInfo, onUploadOneImage, avatarUserTemp } = props;

  return (
    <>
      <div className={classes.formGroup}>
        {/* <TitleChild titleChild={titleConstants.INFO_USER} /> */}
        {/* <text>{titleConstants.INFO_USER}</text> */}
        <div className={classes.textField}>
          <text>{titleConstants.NAME}</text>
          <Field
            name="name"
            component={renderTextFieldOutlined}
            fullWidth
            variant="outlined"
          />
        </div>

        <div className={classes.textField}>
          <text>{titleConstants.EMAIL}</text>
          <Field
            name="email"
            component={renderTextFieldOutlined}
            fullWidth
            variant="outlined"
          />
        </div>
        <div className={classes.textField}>
          <text>{titleConstants.PHONE}</text>
          <Field
            name="phone"
            component={renderTextFieldOutlined}
            fullWidth
            variant="outlined"
          />
          <div className={classes.bulkhead}></div>
        </div>
      </div>

      <div className={classes.formGroup}>
        <text className={classes.titleAvatar}>
          {titleConstants.UPLOAD_AVATAR}
        </text>
        <Field
          name="avatar"
          label={titleConstants.UPLOAD}
          component={renderAvatarUpload}
          onUploadOneImage={onUploadOneImage}
          avatarUserTemp={avatarUserTemp}
          userInfo={userInfo}
          className={classes.avatar}
        />
      </div>
    </>
  );
}

MemberSettingsInfo.propTypes = {
  classes: PropTypes.object,
  userInfo: PropTypes.object,
  onUploadOneImage: PropTypes.func,
  avatarUserTemp: PropTypes.object,
};

export default withStyles(styles)(MemberSettingsInfo);
