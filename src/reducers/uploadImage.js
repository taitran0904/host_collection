import * as uploadConstants from '../constants/events/uploadImage';
import * as shopConstants from '../constants/events/shop';
import * as titleConstants from '../constants/ui/myPage';
import { errorToast } from '../commons/AlertHelper';

const initialState = {
  userInfo: {},
  avatarUserTemp: {},
  avatarUser: {},
  fileUploads: [],
  galleryHostTemp: [],
  galleryHost: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case uploadConstants.UPLOAD_IMAGE: {
      return { ...state };
    }
    case uploadConstants.UPLOAD_IMAGE_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        fileUploads: [data].concat(state.fileUploads),
      };
    }
    case uploadConstants.UPLOAD_IMAGE_FAILED: {
      const { error } = action.payload;
      if (error.message === "Network Error") {
        errorToast("Network disconnected", "top-center");
      } else {
        errorToast(titleConstants.UPLOAD_FAILED, "top-center");
      }
      return { ...state };
    }
    case uploadConstants.UPLOAD_AVATAR: {
      return { ...state };
    }
    case uploadConstants.UPLOAD_AVATAR_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        avatarUserTemp: data,
      };
    }
    case uploadConstants.UPLOAD_AVATAR_FAILED: {
      const { error } = action.payload;
      if (error.message === "Network Error") {
        errorToast("Network disconnected", "top-center");
      } else {
        errorToast(titleConstants.UPLOAD_FAILED, "top-center");
      }
      return { ...state };
    }
    case uploadConstants.UPLOAD_AVATAR_USER_SUCCESS: {
      const { file } = action.payload;
      return {
        ...state,
        avatarUser: file
      };
    }
    case uploadConstants.DELETE_TEMP_IMAGE: {
      const { id } = action.payload;
      const newState = state.fileUploads.filter((item, index) => index !== id);
      const newTemp = state.galleryHostTemp.filter((item, index) => index !== id);
      return {
        ...state,
        fileUploads: newState,
        galleryHostTemp: newTemp
      };
    }
    case uploadConstants.UPLOAD_GALLERY_HOST_TEMP_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        galleryHostTemp: [data].concat(state.galleryHostTemp),
      };
    }
    case shopConstants.UPLOAD_AVATAR_SHOP_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        avatarUser: data
      };
    }
    case uploadConstants.UPLOAD_GALLERY_HOST: {
      return { ...state };
    }
    case uploadConstants.UPLOAD_GALLERY_HOST_SUCCESS: {
      return {
        ...state,
        fileUploads: [],
        galleryHostTemp: []
      };
    }
    case uploadConstants.UPLOAD_GALLERY_HOST_FAILED: {
      const { error } = action.payload;
      if (error.message === "Network Error") {
        errorToast("Network disconnected", "top-center");
      } else {
        errorToast(titleConstants.UPLOAD_GALLERY_FAILED, "top-center");
      }
      return { ...state };
    }
    default: return state;
  }
};

export default reducer;
