import React from "react";
import { withStyles } from "@mui/styles";
import PropTypes from "prop-types";
import { Field } from "redux-form";
import renderTextFieldOutlined from "../../../commons/FormHelper/TextFieldOutlined";
import renderDatePicker from "../../../commons/FormHelper/DatePicker";
import renderSelectField from "../../../commons/FormHelper/SelectField";
import renderAvatarUpload from "../../../commons/FormHelper/AvatarUpload";
import styles from "./styles";
import * as titleConstants from "../../../constants/ui/myPage";

const bloodOptions = [
  { id: "", name: "" },
  { id: "a", name: "A" },
  { id: "b", name: "B" },
  { id: "ab", name: "AB" },
  { id: "o", name: "O" },
];

const zodiacOptions = [
  { id: "", name: "" },
  { id: "aquarius", name: titleConstants.AQUARIUS },
  { id: "pisces", name: titleConstants.PISCES },
  { id: "aries", name: titleConstants.ARIES },
  { id: "taurus", name: titleConstants.TAURUS },
  { id: "gemini", name: titleConstants.GEMINI },
  { id: "cancer", name: titleConstants.CANCER },
  { id: "leo", name: titleConstants.LEO },
  { id: "virgo", name: titleConstants.VIRGO },
  { id: "libra", name: titleConstants.LIBRA },
  { id: "scorpio", name: titleConstants.SCORPIO },
  { id: "sagittarius", name: titleConstants.SAGITTARIUS },
  { id: "capricorn", name: titleConstants.CAPRICORN },
];

const renderBloodOptions = (bloodOptions) => {
  let result;
  if (bloodOptions.length > 0) {
    result = bloodOptions.map((option) => {
      return (
        <option value={option.id} key={option.id}>
          {option.name}
        </option>
      );
    });
  }
  return result;
};

const renderZodiacOptions = (zodiacOptions) => {
  let result;
  if (zodiacOptions.length > 0) {
    result = zodiacOptions.map((option) => {
      return (
        <option value={option.id} key={option.id}>
          {option.name}
        </option>
      );
    });
  }
  return result;
};

function HostProfileEdit(props) {
  const { classes, onUploadOneImage, avatarUserTemp, userInfo } = props;

  return (
    <div className={classes.editProfile}>
      <text className={classes.titleEdit}>{titleConstants.EDIT_PROFILE}</text>
      <div className={classes.avatarUploader}>
        <Field
          name="avatar"
          label={titleConstants.UPLOAD}
          component={renderAvatarUpload}
          onUploadOneImage={onUploadOneImage}
          avatarUserTemp={avatarUserTemp}
          userInfo={userInfo}
        />
      </div>
      <div className={classes.fieldGroup}>
        <div className={classes.textFieldTop}>
          <text>{titleConstants.FULL_NAME}</text>
          <Field
            style={{ marginTop: 0 }}
            name="nickName"
            component={renderTextFieldOutlined}
            margin="normal"
          />
        </div>
        <div className={classes.textFieldTop}>
          <text>{titleConstants.DATE_OF_BIRTH}</text>
          <Field
            style={{ marginTop: 0 }}
            name="dateOfBirth"
            component={renderDatePicker}
            margin="normal"
          />
        </div>
        <div className={classes.heightField}>
          <text>{titleConstants.HEIGHT}</text>
          <Field
            style={{ marginTop: 0 }}
            name="height"
            component={renderTextFieldOutlined}
            margin="normal"
            type="number"
          />
        </div>
        <div className={classes.selectField}>
          <text>{titleConstants.BLOOD_GROUP}</text>
          <Field
            style={{ marginTop: 0 }}
            name="bloodGroup"
            component={renderSelectField}
            option={renderBloodOptions(bloodOptions)}
          />
        </div>
        <div className={classes.selectField}>
          <text>{titleConstants.ZODIAC}</text>
          <Field
            style={{ marginTop: 0 }}
            name="zodiac"
            component={renderSelectField}
            option={renderZodiacOptions(zodiacOptions)}
          />
        </div>
      </div>
      <div className={classes.textArea}>
        <text>{titleConstants.OTHER_INFORMATION}</text>
        <Field
          style={{ marginTop: 0 }}
          name="otherInformation"
          component={renderTextFieldOutlined}
          multiline
          fullWidth
          margin="normal"
        />
      </div>
      <div className={classes.contactForm}>
        <div className={classes.textFieldBottom}>
          <text>{titleConstants.ADDRESS}</text>
          <Field
            style={{ marginTop: 0 }}
            name="address"
            component={renderTextFieldOutlined}
            margin="normal"
          />
        </div>
        <div className={classes.textFieldBottom}>
          <text>{titleConstants.PHONE_NUMBER}</text>
          <Field
            style={{ marginTop: 0 }}
            name="phoneNumber"
            component={renderTextFieldOutlined}
            margin="normal"
          />
        </div>
        <div className={classes.textFieldBottom}>
          <text>{titleConstants.LINE}</text>
          <Field
            style={{ marginTop: 0 }}
            name="line"
            component={renderTextFieldOutlined}
            margin="normal"
          />
        </div>
        <div className={classes.textFieldBottom}>
          <text>{titleConstants.EMAIL}</text>
          <Field
            style={{ marginTop: 0 }}
            disabled
            name="email"
            component={renderTextFieldOutlined}
            margin="normal"
          />
        </div>
      </div>

      <div className={classes.contactForm}>
        <div className={classes.textFieldBottom}>
          <text>{titleConstants.INSTAGRAM}</text>
          <Field
            style={{ marginTop: 0 }}
            name="instagram"
            component={renderTextFieldOutlined}
            fullWidth
            margin="normal"
          />
        </div>
        <div className={classes.textFieldBottom}>
          <text>{titleConstants.YOUTUBE}</text>
          <Field
            style={{ marginTop: 0 }}
            name="youtube"
            component={renderTextFieldOutlined}
            fullWidth
            margin="normal"
          />
        </div>
        <div className={classes.textFieldBottom}>
          <text>{titleConstants.TWITTER}</text>
          <Field
            style={{ marginTop: 0 }}
            name="twitter"
            component={renderTextFieldOutlined}
            fullWidth
            margin="normal"
          />
        </div>
        <div className={classes.textFieldBottom}>
          <text>{titleConstants.FACEBOOK}</text>
          <Field
            style={{ marginTop: 0 }}
            name="lineBlog"
            component={renderTextFieldOutlined}
            fullWidth
            margin="normal"
          />
        </div>
      </div>
    </div>
  );
}

HostProfileEdit.propTypes = {
  classes: PropTypes.object,
  onUploadOneImage: PropTypes.func,
  onChangeTags: PropTypes.func,
  avatarUserTemp: PropTypes.object,
  userInfo: PropTypes.object,
};

export default withStyles(styles)(HostProfileEdit);
