import React, { useState, useEffect } from "react";
import { withStyles } from "@mui/styles";
import PropTypes from "prop-types";
import { compose, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { NavLink, Prompt } from "react-router-dom";

import styles from "./styles";
import * as titleConstants from "../../../constants/ui/myPage";
import * as userActions from "../../../actions/user";
import * as uploadImageActions from "../../../actions/uploadImage";
import {
  HostProfileEdit /*HostProfilePhotoUpload*/,
} from "../../../components/MyPageHost";
import validate from "./validate";
import _ from "lodash";

import Moment from "moment";

function EditPage(props) {
  const { classes, handleSubmit, userInfo, avatarUserTemp } = props;
  const [hashTags, setHashTags] = useState([]);
  const [isChange, setIsChange] = useState(false);

  useEffect(() => {
    const { userActionCreators } = props;
    const { fetchGalleryHost } = userActionCreators;
    fetchGalleryHost();
  }, [props]);

  const onSubmitProfile = (data) => {
    const { userActionCreators, uploadImageActionCreators, avatarUser } = props;
    const { updateUserInfo } = userActionCreators;

    const formData = new FormData();
    formData.append("_method", "PUT");

    if (!_.isEmpty(avatarUser)) {
      formData.append("avatar", avatarUser);
    }

    formData.append("nick_name", data.nickName);

    if (data.phoneNumber !== userInfo.phone) {
      formData.append("phone", data.phoneNumber);
    }

    formData.append("line", data.line);
    formData.append("address", data.address);
    formData.append("height", data.height);
    formData.append("blood_group", data.bloodGroup);
    formData.append("zodiac", data.zodiac);
    formData.append("birthday", Moment(data.dateOfBirth).format("YYYY-MM-DD"));
    formData.append("description", data.otherInformation);
    formData.append("instagram", data.instagram);
    formData.append("youtube", data.youtube);
    formData.append("twitter", data.twitter);
    formData.append("line_blog", data.lineBlog);
    formData.append("banner", userInfo.banner);

    updateUserInfo(formData);
    setIsChange(false);
  };

  const onUploadOneImage = (file) => {
    const { uploadImageActionCreators } = props;
    const { uploadAvatarAction, uploadAvatarUserSuccess } =
      uploadImageActionCreators;
    // uploadAvatarAction(file);
    uploadAvatarUserSuccess(file);
  };

  const onChangeReduxForm = () => {
    setIsChange(true);
  };

  return (
    <div className={classes.container}>
      <form
        onSubmit={handleSubmit(onSubmitProfile)}
        onChange={onChangeReduxForm}
      >
        <HostProfileEdit
          name="avatar"
          onUploadOneImage={onUploadOneImage}
          avatarUserTemp={avatarUserTemp}
          userInfo={userInfo}
        />
        <div className={classes.buttonGroup}>
          <button type="submit">{titleConstants.SAVE}</button>
          <NavLink to="/my-page">{titleConstants.BACK}</NavLink>
        </div>
      </form>
      <Prompt when={isChange} message={titleConstants.LEAVE_FORM_MESSAGE} />
    </div>
  );
}

EditPage.propTypes = {
  classes: PropTypes.object,
  handleSubmit: PropTypes.func,
  userInfo: PropTypes.object,
  fileUploads: PropTypes.array,
  avatarUserTemp: PropTypes.object,
  galleryHost: PropTypes.array,
  galleryHostTemp: PropTypes.array,
  avatarUser: PropTypes.object,
  userActionCreators: PropTypes.shape({
    updateUserInfo: PropTypes.func,
    deleteGalleryItemHost: PropTypes.func,
    fetchGalleryHost: PropTypes.func,
  }),
  uploadImageActionCreators: PropTypes.shape({
    uploadAction: PropTypes.func,
    uploadGalleryHost: PropTypes.func,
    uploadAvatarAction: PropTypes.func,
    uploadAvatarUserSuccess: PropTypes.func,
    deleteTempImage: PropTypes.func,
  }),
};

const withReduxForm = reduxForm({
  form: titleConstants.PROFILE_FORM_NAME,
  enableReinitialize: true,
  validate,
});

const mapStateToProps = (state) => {
  const { userInfo, galleryHost } = state.user;
  const { fileUploads, galleryHostTemp, avatarUserTemp, avatarUser } =
    state.uploadImage;
  return {
    userInfo,
    fileUploads,
    galleryHost,
    galleryHostTemp,
    avatarUserTemp,
    avatarUser,
    initialValues: {
      fullName: userInfo.name,
      nickName: userInfo.nick_name,
      dateOfBirth: userInfo.birthday,
      height: userInfo.height,
      bloodGroup: userInfo.blood_group,
      zodiac: userInfo.zodiac,
      otherInformation: userInfo.description,
      phoneNumber: userInfo.phone,
      email: userInfo.email,
      line: userInfo.line,
      address: userInfo.address,
      instagram: userInfo.instagram,
      youtube: userInfo.youtube,
      twitter: userInfo.twitter,
      lineBlog: userInfo.line_blog,
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
)(EditPage);
