import React from "react";
import { withStyles } from "@mui/styles";
import PropTypes from "prop-types";
import { Upload } from "antd";
import { FiPlus } from "react-icons/fi";
import { FiTrash, FiEye, FiX } from "react-icons/fi";

import styles from "./styles";
import "./styles.css";
import * as titleConstants from "../../../constants/ui/myPage";
import { IMAGE_BASE_URL } from "../../../constants/index";

function PhotoUpload(props) {
  const { classes, onUploadPhoto, fileUploads } = props;
  const [previewImage, setPreviewImage] = React.useState("");

  const uploadButton = (
    <div>
      <FiPlus />
      <div className="ant-upload-text">{titleConstants.UPLOAD_PHOTO}</div>
    </div>
  );

  const onPreview = (photo) => {
    setPreviewImage(photo.image);
  };

  const renderPhoto = (fileUploads) => {
    const { onDeletePhotoTemp, classes } = props;
    let result = null;
    if (fileUploads && fileUploads.length > 0) {
      result = fileUploads.map((photo, index) => {
        return (
          <div key={photo.id} className={classes.box}>
            <img src={`${IMAGE_BASE_URL}/host_temp/${photo.image}`} alt="1" />
            <div className={classes.option}>
              <button type="button" onClick={() => onPreview(photo)}>
                <FiEye />
              </button>
              <button type="button" onClick={() => onDeletePhotoTemp(index)}>
                <FiTrash />
              </button>
            </div>
          </div>
        );
      });
    }
    return result;
  };

  const renderPreview = () => {
    let result = null;
    if (previewImage !== "") {
      result = (
        <div className={classes.preview} onClick={() => setPreviewImage("")}>
          <button type="button" onClick={() => setPreviewImage("")}>
            <FiX />
          </button>
          <img src={`${IMAGE_BASE_URL}/host_temp/${previewImage}`} alt="1" />
        </div>
      );
    }
    return result;
  };

  return (
    <>
      {renderPreview()}
      <div className={classes.wrapper}>{renderPhoto(fileUploads)}</div>
      <Upload
        action={onUploadPhoto}
        showUploadList={false}
        listType="picture-card"
        className={classes.avatarUpload}
      >
        {uploadButton}
      </Upload>
    </>
  );
}

PhotoUpload.propTypes = {
  classes: PropTypes.object,
  onUploadPhoto: PropTypes.func,
  fileUploads: PropTypes.array,
  onDeletePhotoTemp: PropTypes.func,
};

export default withStyles(styles)(PhotoUpload);
