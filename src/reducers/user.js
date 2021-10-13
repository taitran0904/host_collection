import Cookies from "js-cookie";
import * as userConstants from "../constants/events/user";
import * as titleConstants from "../constants/ui/myPage";
import * as errorConstants from "../constants/ui/error";
import * as constantGeneral from "../constants/ui";
import {
  expiredLoginToast,
  errorToast,
  successToast
} from "../commons/AlertHelper";

import { message } from 'antd';

const initialState = {
  userInfo: {},
  galleryHost: [],
  hostSales: {},
  activeRegister: {},
  resendCode: {},
  removeAvatarUser: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.FETCH_USER_INFO: {
      return {
        ...state,
        userInfo: {}
      };
    }
    case userConstants.FETCH_USER_INFO_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        userInfo: data
      };
    }
    case userConstants.FETCH_USER_INFO_FAILED: {
      const { error } = action.payload;
      if (error.message === "Network Error") {
        errorToast(errorConstants.NETWORK_DISCONNECTED, "top-center");
      } else {
        expiredLoginToast("Login session has expired", "top-center");
        Cookies.remove("token");
      }
      return {
        ...state,
        userInfo: {}
      };
    }

    case userConstants.UPDATE_USER_INFO: {
      return { ...state };
    }
    case userConstants.UPDATE_USER_INFO_SUCCESS: {
      const { data } = action.payload;
      successToast(titleConstants.UPDATE_SUCCESS, "top-center");
      return {
        ...state,
        userInfo: data
      };
    }
    case userConstants.UPDATE_USER_INFO_FAILED: {
      const { error } = action.payload;
      if (error.message === "Network Error") {
        errorToast("Network disconnected", "top-center");
      } else {
        errorToast(titleConstants.UPDATE_FAILED, "top-center");
      }
      return { ...state };
    }

    case userConstants.FETCH_GALLERY_HOST: {
      return { ...state };
    }
    case userConstants.FETCH_GALLERY_HOST_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        galleryHost: data
      };
    }
    case userConstants.FETCH_GALLERY_HOST_FAILED: {
      const { error } = action.payload;
      if (error.message === "Network Error") {
        errorToast("Network disconnected", "top-center");
      } else {
        errorToast(titleConstants.GET_GALLERY_FAILED, "top-center");
      }
      return { ...state };
    }

    case userConstants.DELETE_GALLERY_ITEM_HOST: {
      return { ...state };
    }

    case userConstants.DELETE_GALLERY_ITEM_HOST_SUCCESS: {
      const { data: dataId } = action.payload;
      const newState = state.galleryHost.filter(item => item.id !== dataId);
      return {
        ...state,
        galleryHost: newState
      };
    }

    // -------_Fetch host sales-----------------

    case userConstants.FETCH_HOST_SALES: {
      return { ...state };
    }
    case userConstants.FETCH_HOST_SALES_SUCCESS: {
      const { data } = action.payload;

      return {
        ...state,
        hostSales: data
      };
    }
    case userConstants.FETCH_HOST_SALES_FAILED: {
      const { error } = action.payload;
      if (error.message === "Network Error") {
        errorToast("Network disconnected", "top-right");
      } else {
        errorToast('Error host sales.', "top-right");
      }
      return { ...state };
    }

    // -------Active user register-----------------

    case userConstants.ACTIVE_USER_REGISTER: {
      return { ...state };
    }
    case userConstants.ACTIVE_USER_REGISTER_SUCCESS: {
      const { data } = action.payload;

      if(data.message === 'error'){
        errorToast('Active error, please send again code', "top-right");
      }else if(data.message === 'success'){
        successToast('Active success', 'top-right');
      }
      return {
        ...state,
        activeRegister: data
      };
    }
    case userConstants.ACTIVE_USER_REGISTER_FAILED: {
      const { error } = action.payload;
      if (error.message === "Network Error") {
        errorToast("Network disconnected", "top-center");
      } else {
        errorToast('Active error, please send again code', "top-center");
      }
      return { ...state };
    }

    // -------Resend active user register-----------------

    case userConstants.RESEND_ACTIVE_USER: {
      return { ...state };
    }
    case userConstants.RESEND_ACTIVE_USER_SUCCESS: {
      const { data } = action.payload;

      if(data.message === 'error'){
        errorToast('Resend code error, please check email', "top-right");
      }else if(data.message === 'User not found'){
        errorToast('User not found', "top-right");
      }else if(data.message === 'success'){
        successToast('Send code success', 'top-right');
      }

      return {
        ...state,
        resendCode: data
      };
    }
    case userConstants.RESEND_ACTIVE_USER_FAILED: {
      const { error } = action.payload;
      if (error.message === "Network Error") {
        errorToast("Network disconnected", "top-center");
      } else {
        errorToast('Active error, please send again code', "top-center");
      }
      return { ...state };
    }

    case userConstants.REMOVE_IMAGE_AVATAR_USER: {
      return {...state}
    }
    case userConstants.REMOVE_IMAGE_AVATAR_USER_SUCCESS: {
      const { data } = action.payload;

      if(data.avatar === null){
        message.success(constantGeneral.DELETE_SUCCESS);
      }

      const userData = {
        ...state.userInfo,
        avatar: data.avatar
      }

      return {
        ...state,
        removeAvatarUser: data,
        userInfo: userData
      }
    }
    case userConstants.REMOVE_IMAGE_AVATAR_USER_FAILED: {
      const { error } = action.payload;
      message.error(error.message);
      return {...state}
    }

    default:
      return state;
  }
};

export default reducer;
