import React from "react";
import { withStyles } from "@mui/styles";
import PropTypes from "prop-types";
import { Field } from "redux-form";
import renderTextField from "../../../commons/FormHelper/TextField";
import renderAvatarUpload from "../../../commons/FormHelper/AvatarUpload";
import TitleChild from "../../TitleChild";
import styles from "./styles";
import * as titleConstants from "../../../constants/ui/myPage";

function MemberSettingsInfo(props) {
  const { classes, userInfo, onUploadOneImage, avatarUserTemp } = props;

  return (
    <>
      <div className={classes.formGroup}>
        <TitleChild titleChild={titleConstants.INFO_USER} />
        <Field
          label={titleConstants.NAME}
          name="name"
          component={renderTextField}
          className={classes.textField}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <Field
          label={titleConstants.EMAIL}
          name="email"
          component={renderTextField}
          className={classes.textField}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <Field
          label={titleConstants.PHONE}
          name="phone"
          component={renderTextField}
          className={classes.textField}
          fullWidth
          margin="normal"
          variant="outlined"
        />
      </div>
      <div className={classes.formGroup}>
        <TitleChild titleChild={titleConstants.UPLOAD_AVATAR} />
        <Field
          name="avatar"
          label={titleConstants.UPLOAD}
          component={renderAvatarUpload}
          onUploadOneImage={onUploadOneImage}
          avatarUserTemp={avatarUserTemp}
          userInfo={userInfo}
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
