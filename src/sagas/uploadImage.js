import { call, put, takeEvery } from "redux-saga/effects";
import { showLoading, hideLoading } from "../actions/loading";
import * as uploadConstants from "../constants/events/uploadImage";
import { uploadAvatarShopSuccess } from "../actions/shop";
import getToken from "../commons/getToken";
import {
  uploadActionSuccess,
  uploadActionFailed,
  uploadGalleryHostSuccess,
  uploadGalleryHostFailed,
  uploadGalleryHostTempSuccess,
  uploadAvatarUserSuccess,
  uploadAvatarActionSuccess,
  uploadAvatarActionFailed
} from "../actions/uploadImage";
import { uploadImageAPI, uploadGalleryHostAPI } from "../apis/uploadImage";

function* uploadImageSaga({ payload }) {
  const { file } = payload;
  const token = getToken();
  const formDataFile = new FormData();
  formDataFile.append("image", file);

  yield put(showLoading());
  try {
    const res = yield call(uploadImageAPI, formDataFile, token);
    yield put(uploadActionSuccess(res.data.data));
    yield put(uploadGalleryHostTempSuccess(file));
    yield put(uploadAvatarUserSuccess(file));
    yield put(uploadAvatarShopSuccess(file));
    yield put(hideLoading());
  } catch (error) {
    yield put(hideLoading());
    yield put(uploadActionFailed(error));
  }
}

function* uploadAvatarSaga({ payload }) {
  const { file } = payload;
  const token = getToken();
  const formDataFile = new FormData();
  formDataFile.append("image", file);

  yield put(showLoading());
  try {
    const res = yield call(uploadImageAPI, formDataFile, token);

    yield put(uploadAvatarActionSuccess(res.data.data));
    yield put(uploadAvatarUserSuccess(file));
    yield put(hideLoading());
  } catch (error) {
    yield put(hideLoading());
    yield put(uploadAvatarActionFailed(error));
  }
}

function* uploadGalleryHostSaga({ payload }) {
  const { params } = payload;
  const dataUpload = new FormData();
  const token = getToken();
  params.map((photo, index) => {
    dataUpload.append(`multi_image[${index}]`, photo);
    return dataUpload;
  });
  yield put(showLoading());
  try {
    yield call(uploadGalleryHostAPI, dataUpload, token);
    yield put(uploadGalleryHostSuccess());
    yield put(hideLoading());
  } catch (error) {
    yield put(hideLoading());
    yield put(uploadGalleryHostFailed(error));
  }
}

export default function* uploadImageWatcher() {
  yield takeEvery(uploadConstants.UPLOAD_IMAGE, uploadImageSaga);
  yield takeEvery(uploadConstants.UPLOAD_AVATAR, uploadAvatarSaga);
  yield takeEvery(uploadConstants.UPLOAD_GALLERY_HOST, uploadGalleryHostSaga);
}
