/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from "react";
import { withStyles } from "@mui/styles";
import PropTypes from "prop-types";
import { compose, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { reduxForm } from "redux-form";
import TitleChild from "../../../components/TitleChild";
import * as titleConstants from "../../../constants/ui/myPage";
import * as uploadImageActions from "../../../actions/uploadImage";
import * as shopActions from "../../../actions/shop";
import styles from "./styles";
import validate from "./validate";
import { decodeId } from "../../../commons/generateId";
import { ShopCreateItemForm } from "../../../components/MyPageShop";

const bloodOptions = [
  { id: "", name: "" },
  { id: "tokyo", name: "Tokyo" },
  { id: "osaka", name: "Osaka" },
  { id: "kyoto", name: "Kyoto" },
  { id: "nagasaki", name: "Nagasaki" },
];

function ShopCreateManager(props) {
  const {
    classes,
    handleSubmit,
    fileUploads,
    avatarUserTemp,
    shopItemEditing,
  } = props;

  useEffect(() => {
    const { getOneShopList } = props.shopActionCreators;
    if (props.match) {
      const id = decodeId(props.match.params.id);
      getOneShopList(id);
    }
  }, [props.shopActionCreators, props.match]);

  const onSubmitProfile = (data) => {
    const { shopActionCreators, history, shopItemEditing, avatarUser } = props;
    const { updateShopItem, createShopItem } = shopActionCreators;
    const { shopName, childArea } = data;

    const dataForm = new FormData();
    dataForm.append("avatar_image", avatarUser);
    dataForm.append("name", shopName);
    dataForm.append("cid_location", childArea);

    if (shopItemEditing.id) {
      dataForm.append("_method", "PUT");
      updateShopItem(history, dataForm);
    } else {
      createShopItem(history, dataForm);
    }
  };

  const onUploadPhoto = (file) => {
    const { uploadImageActionCreators } = props;
    const { uploadAction } = uploadImageActionCreators;
    uploadAction(file);
  };

  const onUploadOneImage = (file) => {
    const { uploadImageActionCreators } = props;
    const { uploadAvatarUserSuccess, uploadAvatarAction } =
      uploadImageActionCreators;
    uploadAvatarUserSuccess(file);
    uploadAvatarAction(file);
  };

  const onDeletePhotoTemp = (index) => {
    const { uploadImageActionCreators } = props;
    const { deleteTempImage } = uploadImageActionCreators;
    deleteTempImage(index);
  };

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

  const renderTitle = () => {
    const { match } = props;
    let result = "";
    if (match) {
      result = <TitleChild titleChild={titleConstants.UPDATE_SHOP} />;
    } else {
      result = <TitleChild titleChild={titleConstants.CREATE_NEW_SHOP} />;
    }
    return result;
  };

  return (
    <div className={classes.container}>
      {renderTitle()}
      <form onSubmit={handleSubmit(onSubmitProfile)}>
        <ShopCreateItemForm
          renderBloodOptions={renderBloodOptions(bloodOptions)}
          onDeletePhotoTemp={onDeletePhotoTemp}
          fileUploads={fileUploads}
          avatarUserTemp={avatarUserTemp}
          onUploadOneImage={onUploadOneImage}
          onUploadPhoto={onUploadPhoto}
          shopItemEditing={shopItemEditing}
        />
        <div className={classes.buttonGroup}>
          <button type="submit">{titleConstants.SAVE}</button>
          <NavLink to="/my-page/shop-management">{titleConstants.BACK}</NavLink>
        </div>
      </form>
    </div>
  );
}

const withReduxForm = reduxForm({
  form: titleConstants.CREATE_NEW_SHOP_FORM_NAME,
  enableReinitialize: true,
  validate,
});

ShopCreateManager.propTypes = {
  classes: PropTypes.object,
  handleSubmit: PropTypes.func,
  fileUploads: PropTypes.array,
  match: PropTypes.object,
  history: PropTypes.object,
  avatarUser: PropTypes.object,
  avatarUserTemp: PropTypes.object,
  shopItemEditing: PropTypes.object,
  uploadImageActionCreators: PropTypes.shape({
    uploadAction: PropTypes.func,
    deleteTempImage: PropTypes.func,
    uploadAvatarUserSuccess: PropTypes.func,
    uploadAvatarAction: PropTypes.func,
  }),
  shopActionCreators: PropTypes.shape({
    updateShopItem: PropTypes.func,
    createShopItem: PropTypes.func,
  }),
};

const mapStateToProps = (state) => {
  const { shopItemEditing } = state.shop;
  const { fileUploads, avatarUserTemp, avatarUser } = state.uploadImage;
  return {
    fileUploads,
    avatarUserTemp,
    avatarUser,
    shopItemEditing,
    initialValues: {
      shopName: shopItemEditing.name ? shopItemEditing.name : null,
      childArea: shopItemEditing ? shopItemEditing.cid_location : "",
    },
  };
};

const mapDispatchToProps = (dispatch) => ({
  uploadImageActionCreators: bindActionCreators(uploadImageActions, dispatch),
  shopActionCreators: bindActionCreators(shopActions, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withStyles(styles),
  withConnect,
  withReduxForm
)(ShopCreateManager);
