import * as uploadConstants from '../constants/events/uploadImage';

export const uploadAction = file => ({
  type: uploadConstants.UPLOAD_IMAGE,
  payload: { file }
});

export const uploadActionSuccess = data => ({
  type: uploadConstants.UPLOAD_IMAGE_SUCCESS,
  payload: { data }
});

export const uploadActionFailed = error => ({
  type: uploadConstants.UPLOAD_IMAGE_FAILED,
  payload: { error }
});

export const uploadAvatarAction = file => ({
  type: uploadConstants.UPLOAD_AVATAR,
  payload: { file }
});

export const uploadAvatarActionSuccess = data => ({
  type: uploadConstants.UPLOAD_AVATAR_SUCCESS,
  payload: { data }
});

export const uploadAvatarActionFailed = error => ({
  type: uploadConstants.UPLOAD_AVATAR_FAILED,
  payload: { error }
});

export const uploadAvatarUserSuccess = file => ({
  type: uploadConstants.UPLOAD_AVATAR_USER_SUCCESS,
  payload: { file }
});

export const uploadGalleryHostTempSuccess = data => ({
  type: uploadConstants.UPLOAD_GALLERY_HOST_TEMP_SUCCESS,
  payload: { data }
});

export const deleteTempImage = id => ({
  type: uploadConstants.DELETE_TEMP_IMAGE,
  payload: { id }
});

export const deleteTempImageSuccess = data => ({
  type: uploadConstants.DELETE_TEMP_IMAGE_SUCCESS,
  payload: { data }
});

export const uploadGalleryHost = params => ({
  type: uploadConstants.UPLOAD_GALLERY_HOST,
  payload: { params }
});

export const uploadGalleryHostSuccess = data => ({
  type: uploadConstants.UPLOAD_GALLERY_HOST_SUCCESS,
  payload: { data }
});

export const uploadGalleryHostFailed = error => ({
  type: uploadConstants.UPLOAD_GALLERY_HOST_FAILED,
  payload: { error }
});
