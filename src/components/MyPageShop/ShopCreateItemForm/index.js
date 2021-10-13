import React from "react";
import { withStyles } from "@mui/styles";
import PropTypes from "prop-types";
import { Field } from "redux-form";
import TitleChild from "../../TitleChild";
import * as titleConstants from "../../../constants/ui/myPage";
import renderTextField from "../../../commons/FormHelper/TextField";
import renderSelectField from "../../../commons/FormHelper/SelectField";
import renderPhotoUpload from "../../../commons/FormHelper/PhotoUpload";
import renderAvatarUpload from "../../../commons/FormHelper/AvatarUpload";
import styles from "./styles";

function ShopCreateItemForm(props) {
  const {
    classes,
    onDeletePhotoTemp,
    renderBloodOptions,
    fileUploads,
    onUploadOneImage,
    avatarUserTemp,
    onUploadPhoto,
    shopItemEditing,
  } = props;

  return (
    <div className={classes.container}>
      <div className={classes.textField}>
        <Field
          label={titleConstants.SHOP_NAME}
          name="shopName"
          component={renderTextField}
          margin="normal"
          fullWidth
        />
      </div>
      <div className={classes.avatarUploader}>
        <Field
          name="avatarShop"
          label={titleConstants.UPLOAD_AVATAR}
          component={renderAvatarUpload}
          onUploadOneImage={onUploadOneImage}
          avatarUserTemp={avatarUserTemp}
          shopItemEditing={shopItemEditing}
        />
      </div>
      <div className={classes.textField}>
        <Field
          label={titleConstants.PARENT_AREA}
          name="parentArea"
          component={renderSelectField}
          option={renderBloodOptions}
          fullWidth
        />
      </div>
      <div className={classes.textField}>
        <Field
          label={titleConstants.CHILD_AREA}
          name="childArea"
          component={renderSelectField}
          option={renderBloodOptions}
          fullWidth
        />
      </div>
      <div>
        <TitleChild titleChild={titleConstants.UPLOAD_LICENSE} />
        <h5 className={classes.note}>
          {titleConstants.UPLOAD_LICENCE_MESSAGE}
        </h5>
        <Field
          name="uploadLicense"
          component={renderPhotoUpload}
          fileUploads={fileUploads}
          onDeletePhotoTemp={onDeletePhotoTemp}
          onUploadPhoto={onUploadPhoto}
        />
      </div>
    </div>
  );
}

ShopCreateItemForm.propTypes = {
  classes: PropTypes.object,
  onDeletePhotoTemp: PropTypes.func,
  renderBloodOptions: PropTypes.array,
  fileUploads: PropTypes.any,
  onUploadOneImage: PropTypes.func,
  avatarUserTemp: PropTypes.object,
};

export default withStyles(styles)(ShopCreateItemForm);
