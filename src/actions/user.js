import * as userConstants from '../constants/events/user';

export const fetchUserInfo = () => ({
  type: userConstants.FETCH_USER_INFO,
});

export const fetchUserInfoSuccess = data => ({
  type: userConstants.FETCH_USER_INFO_SUCCESS,
  payload: { data }
});

export const fetchUserInfoFailed = error => ({
  type: userConstants.FETCH_USER_INFO_FAILED,
  payload: { error }
});

export const updateUserInfo = (params = {}) => ({
  type: userConstants.UPDATE_USER_INFO,
  payload: { params }
});

export const updateUserInfoSuccess = data => ({
  type: userConstants.UPDATE_USER_INFO_SUCCESS,
  payload: { data }
});

export const updateUserInfoFailed = error => ({
  type: userConstants.UPDATE_USER_INFO_FAILED,
  payload: { error }
});

export const fetchGalleryHost = () => ({
  type: userConstants.FETCH_GALLERY_HOST,
});

export const fetchGalleryHostSuccess = data => ({
  type: userConstants.FETCH_GALLERY_HOST_SUCCESS,
  payload: { data }
});

export const fetchGalleryHostFailed = error => ({
  type: userConstants.FETCH_GALLERY_HOST_FAILED,
  payload: { error }
});

export const deleteGalleryItemHost = id => ({
  type: userConstants.DELETE_GALLERY_ITEM_HOST,
  payload: { id }
});

export const deleteGalleryItemHostSuccess = data => ({
  type: userConstants.DELETE_GALLERY_ITEM_HOST_SUCCESS,
  payload: { data }
});

export const deleteGalleryItemHostFailed = error => ({
  type: userConstants.DELETE_GALLERY_ITEM_HOST_FAILED,
  payload: { error }
});

// ------------Host sales-----------

export const fetchHostSales = ({ type, shop_id }) => ({
  type: userConstants.FETCH_HOST_SALES,
  payload: { type, shop_id }
})

export const fetchHostSalesSuccess = data => ({
  type: userConstants.FETCH_HOST_SALES_SUCCESS,
  payload: { data }
})

export const fetchHostSalesFailed = error => ({
  type: userConstants.FETCH_HOST_SALES_FAILED,
  payload: { error }
})

// ------------ACTIVE USER REGISTER-----------

export const activeUserRegister = (data, history) => ({
  type: userConstants.ACTIVE_USER_REGISTER,
  payload: { data, history }
})

export const activeUserRegisterSuccess = data => ({
  type: userConstants.ACTIVE_USER_REGISTER_SUCCESS,
  payload: { data }
})

export const activeUserRegisterFailed = error => ({
  type: userConstants.ACTIVE_USER_REGISTER_FAILED,
  payload: { error }
})

// ------------RESEND ACTIVE USER-----------

export const resendActiveUser = ({ data, history }) => ({
  type: userConstants.RESEND_ACTIVE_USER,
  payload: { data, history }
})

export const resendActiveUserSuccess = data => ({
  type: userConstants.RESEND_ACTIVE_USER_SUCCESS,
  payload: { data }
})

export const resendActiveUserFailed = error => ({
  type: userConstants.RESEND_ACTIVE_USER_FAILED,
  payload: { error }
})

// Remove image avatar user

export const removeImageAvatarUser = (id, data) => ({
  type: userConstants.REMOVE_IMAGE_AVATAR_USER,
  payload: { id, data }
})

export const removeImageAvatarUserSuccess = data => ({
  type: userConstants.REMOVE_IMAGE_AVATAR_USER_SUCCESS,
  payload: { data }
})
export const removeImageAvatarUserFailed = error => ({
  type: userConstants.REMOVE_IMAGE_AVATAR_USER_FAILED,
  payload: { error }
})

