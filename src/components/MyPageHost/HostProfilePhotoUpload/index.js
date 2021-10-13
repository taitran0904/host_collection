import React from "react";
import { withStyles, makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import { Field } from "redux-form";
import { FiTrash } from "react-icons/fi";
import { Popconfirm } from "antd";
import TitleChild from "../../TitleChild";
import * as titleConstants from "../../../constants/ui/myPage";
import { IMAGE_BASE_URL } from "../../../constants";
import renderPhotoUpload from "../../../commons/FormHelper/PhotoUpload";
import styles from "./styles";
import "./styles.css";

function HostProfilePhotoUpload(props) {
  const {
    classes,
    onUploadPhoto,
    fileUploads,
    onDeletePhoto,
    onDeletePhotoTemp,
    galleryHost,
  } = props;
  const roundedLength = galleryHost && 2 * Math.round(galleryHost.length / 2);
  const useStyles = makeStyles((theme) => ({
    [theme.breakpoints.down("xs")]: {
      photoGallery: {
        columnCount:
          galleryHost && (galleryHost.length > 4 ? roundedLength / 2 : 2),
        width:
          galleryHost &&
          (galleryHost.length > 4 ? `${roundedLength * 20}vw` : "100%"),
      },
      shopList: {
        width:
          galleryHost &&
          (galleryHost.length > 4
            ? `calc(((35vw + 7px) * ${roundedLength}) + 40px);`
            : "initial"),
      },
      item: {
        width: galleryHost && (galleryHost.length > 4 ? "70vw" : "100%"),
      },
    },
  }));
  const classMDB = useStyles();

  const renderPhotoGallery = (galleryHost) => {
    let result = null;
    if (galleryHost && galleryHost.length > 0) {
      result = galleryHost.map((photo) => {
        return (
          <div key={photo.id} className={classes.photoItem}>
            <img
              src={`${IMAGE_BASE_URL}/gallery_host/${photo.image}`}
              alt={photo.name}
            />
            <div className={classes.photoOptions}>
              <Popconfirm
                className={classes.confirmBtn}
                title={titleConstants.ARE_YOU_SURE_DELETE_PHOTO}
                onConfirm={() => onDeletePhoto(photo.id)}
                okText={titleConstants.YES_DELETE}
                cancelText={titleConstants.NO}
              >
                <button title={titleConstants.REMOVE_THIS_PHOTO} type="button">
                  <FiTrash />
                </button>
              </Popconfirm>
            </div>
          </div>
        );
      });
    }
    return result;
  };

  return (
    <div className={classes.photoUpload}>
      {galleryHost && (
        <>
          <TitleChild titleChild={titleConstants.PHOTO_GALLERY} />
          <div className={classes.photoGalleryZone}>
            <div className={`${classes.photoGallery} ${classMDB.photoGallery}`}>
              {renderPhotoGallery(galleryHost)}
            </div>
          </div>
        </>
      )}
      <div>
        <TitleChild titleChild={titleConstants.UPLOAD_PHOTO} />
        <Field
          name="photoGallery"
          component={renderPhotoUpload}
          onUploadPhoto={onUploadPhoto}
          fileUploads={fileUploads}
          onDeletePhotoTemp={onDeletePhotoTemp}
        />
      </div>
    </div>
  );
}

HostProfilePhotoUpload.propTypes = {
  onUploadPhoto: PropTypes.func,
  onDeletePhoto: PropTypes.func,
  onDeletePhotoTemp: PropTypes.func,
  classes: PropTypes.object,
  fileUploads: PropTypes.array,
  galleryHost: PropTypes.array,
};

export default withStyles(styles)(HostProfilePhotoUpload);
