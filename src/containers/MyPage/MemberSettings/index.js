import React, { useState } from "react";
import { withStyles } from "@mui/styles";
import PropTypes from "prop-types";
import { compose, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { NavLink, Prompt } from "react-router-dom";

import styles from "./styles";
import validate from "./validate";
import {
  MemberSettingsInfo,
  MemberSettingsSwitch,
} from "../../../components/MyPageMember";
import * as titleConstants from "../../../constants/ui/myPage";
import * as userActions from "../../../actions/user";
import * as uploadImageActions from "../../../actions/uploadImage";
import _ from "lodash";

function MemberSettings(props) {
  const { classes, handleSubmit, userInfo, avatarUserTemp } = props;
  const [isChange, setIsChange] = useState(false);

  const [switchState, setSwitchState] = useState({
    snsUpdate: false,
    favoriteAnniversary: true,
    vibrate: true,
    sound: false,
    notificationLight: true,
  });

  const onUploadOneImage = (file) => {
    const { uploadImageActionCreators } = props;
    const { uploadAvatarAction, uploadAvatarUserSuccess } =
      uploadImageActionCreators;
    // uploadAvatarAction(file);
    uploadAvatarUserSuccess(file);
  };

  const onSubmitSettings = (data) => {
    const { userActionCreators, userInfo, avatarUser } = props;
    const { updateUserInfo } = userActionCreators;

    const formData = new FormData();
    formData.append("_method", "PUT");
    formData.append("name", data.name);
    formData.append("phone", data.phone);
    if (!_.isEmpty(avatarUser)) {
      formData.append("avatar", avatarUser);
    }
    // formData.append("banner", userInfo.banner);

    updateUserInfo(formData);
    setIsChange(false);
  };

  const onChangeReduxForm = () => {
    setIsChange(true);
  };

  const onHandleSwitch = (name) => (event) => {
    setSwitchState({
      ...switchState,
      [name]: event.target.checked,
    });
    setIsChange(true);
  };

  return (
    <div className={classes.container}>
      <form
        onSubmit={handleSubmit(onSubmitSettings)}
        onChange={onChangeReduxForm}
      >
        <div>
          <MemberSettingsInfo
            onUploadOneImage={onUploadOneImage}
            userInfo={userInfo}
            avatarUserTemp={avatarUserTemp}
          />
        </div>
        <div className={classes.formGroup}>
          <MemberSettingsSwitch
            onHandleSwitch={onHandleSwitch}
            switchState={switchState}
          />
        </div>
        <div className={classes.buttonGroup}>
          <button type="submit">{titleConstants.SAVE}</button>
          <NavLink to="/my-page">{titleConstants.BACK}</NavLink>
        </div>
      </form>
      <Prompt when={isChange} message={titleConstants.LEAVE_FORM_MESSAGE} />
    </div>
  );
}

MemberSettings.propTypes = {
  classes: PropTypes.object,
  handleSubmit: PropTypes.func,
  userInfo: PropTypes.object,
  avatarUserTemp: PropTypes.object,
  avatarUser: PropTypes.object,
  userActionCreators: PropTypes.shape({
    updateUserInfo: PropTypes.func,
  }),
  uploadImageActionCreators: PropTypes.shape({
    uploadAvatarAction: PropTypes.func,
    uploadAvatarUserSuccess: PropTypes.func,
  }),
};

const withReduxForm = reduxForm({
  form: titleConstants.MEMBER_SETTINGS_FORM_NAME,
  enableReinitialize: true,
  validate,
});

const mapStateToProps = (state) => {
  return {
    userInfo: state.user.userInfo,
    avatarUserTemp: state.uploadImage.avatarUserTemp,
    avatarUser: state.uploadImage.avatarUser,
    initialValues: {
      nickName: state.user.userInfo.nick_name,
      name: state.user.userInfo.name,
      avatar: state.user.userInfo.avatar,
      email: state.user.userInfo.email,
      phone: state.user.userInfo.phone,
    },
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userActionCreators: bindActionCreators(userActions, dispatch),
    uploadImageActionCreators: bindActionCreators(uploadImageActions, dispatch),
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withStyles(styles),
  withConnect,
  withReduxForm
)(MemberSettings);
