import { call, put, fork, take, select, takeLatest } from "redux-saga/effects";
import { showLoading, hideLoading } from "../actions/loading";
import * as userConstants from "../constants/events/user";
import getToken from "../commons/getToken";
import {
  fetchUserInfoSuccess,
  fetchUserInfoFailed,
  updateUserInfoSuccess,
  updateUserInfoFailed,
  fetchGalleryHostSuccess,
  fetchGalleryHostFailed,
  deleteGalleryItemHostSuccess,
  deleteGalleryItemHostFailed,
  fetchHostSalesSuccess,
  fetchHostSalesFailed,
  activeUserRegisterSuccess,
  activeUserRegisterFailed,
  resendActiveUserSuccess,
  resendActiveUserFailed,
  removeImageAvatarUserSuccess,
  removeImageAvatarUserFailed,
} from "../actions/user";
import {
  fetchUserInfoAPI,
  updateUserInfoAPI,
  fetchGalleryHostAPI,
  deleteGalleryItemHostAPI,
  fetchHostSalesAPI,
  activeUserRegisterAPI,
  resendActiveUserAPI,
  removeImageAvatarUserAPI,
} from "../apis/user";

function* fetchUserGeneralInfoSaga() {
  while (true) {
    yield take(userConstants.FETCH_USER_INFO);
    yield put(showLoading());
    const token = getToken();
    if (token) {
      try {
        const res = yield call(fetchUserInfoAPI, token);
        const { data } = res;
        yield put(fetchUserInfoSuccess(data));
        yield put(hideLoading());
      } catch (error) {
        yield put(hideLoading());
        yield put(fetchUserInfoFailed(error));
      }
    }
  }
}

function* updateUserInformationSaga({ payload }) {
  const userId = yield select((state) => state.user.userInfo.id);
  const { params } = payload;
  yield put(showLoading());

  try {
    const res = yield call(updateUserInfoAPI, userId, params, getToken());

    yield put(updateUserInfoSuccess(res.data));
    yield put(hideLoading());
  } catch (error) {
    yield put(hideLoading());
    yield put(updateUserInfoFailed(error));
  }
}

function* fetchGalleryHostSaga() {
  while (true) {
    yield take(userConstants.FETCH_GALLERY_HOST);
    const token = getToken();
    if (token) {
      try {
        const res = yield call(fetchGalleryHostAPI, token);
        yield put(fetchGalleryHostSuccess(res.data));
      } catch (error) {
        yield put(fetchGalleryHostFailed(error));
      }
    }
  }
}

function* deleteGalleryItemHostSaga({ payload }) {
  const { id } = payload;
  const token = getToken();
  yield put(showLoading());
  if (token) {
    try {
      const res = yield call(deleteGalleryItemHostAPI, id, token);

      if (res.data) {
        yield put(deleteGalleryItemHostSuccess(id));
      } else {
        yield put(deleteGalleryItemHostFailed());
      }
      yield put(hideLoading());
    } catch (error) {
      yield put(hideLoading());
      yield put(deleteGalleryItemHostFailed(error));
    }
  }
}

function* fetchHostSalesSaga({ payload }) {
  const { type, shop_id } = payload;
  const token = getToken();
  yield put(showLoading());
  if (token) {
    try {
      const res = yield call(fetchHostSalesAPI, type, token, shop_id);
      if (res.data) {
        yield put(fetchHostSalesSuccess(res.data));
      } else {
        yield put(fetchHostSalesFailed());
      }
      yield put(hideLoading());
    } catch (error) {
      yield put(hideLoading());
      yield put(fetchHostSalesFailed(error));
    }
  }
}

function* activeUserRegisterSaga({ payload }) {
  const { data, history } = payload.data;

  const { token_active, code } = data;

  yield put(showLoading());
  try {
    const res = yield call(activeUserRegisterAPI, {
      token_active: token_active,
      code: code,
    });

    yield put(activeUserRegisterSuccess(res.data));
    if (res.data.message === "success") {
      history.push("/login");
    }
    yield put(hideLoading());
  } catch (error) {
    yield put(hideLoading());
    yield put(activeUserRegisterFailed(error));
  }
}

function* resendActiveUserSaga({ payload }) {
  const { data, history } = payload;
  yield put(showLoading());

  try {
    const res = yield call(resendActiveUserAPI, data);

    yield put(resendActiveUserSuccess(res.data));

    if (res.data.message === "success") {
      history.push("/login");
    }
    yield put(hideLoading());
  } catch (error) {
    yield put(hideLoading());
    yield put(resendActiveUserFailed(error));
  }
}

function* removeAvatarUserSaga({ payload }) {
  const { id, data } = payload;
  const token = getToken();
  yield put(showLoading());
  try {
    const res = yield call(removeImageAvatarUserAPI, id, data, token);
    yield put(removeImageAvatarUserSuccess(res.data));
    yield put(hideLoading());
  } catch (error) {
    yield put(removeImageAvatarUserFailed(error));
    yield put(hideLoading());
  }
}

export default function* userWatcher() {
  yield fork(fetchUserGeneralInfoSaga);
  yield takeLatest(userConstants.UPDATE_USER_INFO, updateUserInformationSaga);
  yield takeLatest(userConstants.ACTIVE_USER_REGISTER, activeUserRegisterSaga);
  yield takeLatest(userConstants.RESEND_ACTIVE_USER, resendActiveUserSaga);
  yield takeLatest(
    userConstants.REMOVE_IMAGE_AVATAR_USER,
    removeAvatarUserSaga
  );
  yield fork(fetchGalleryHostSaga);
  yield takeLatest(
    userConstants.DELETE_GALLERY_ITEM_HOST,
    deleteGalleryItemHostSaga
  );
  yield takeLatest(userConstants.FETCH_HOST_SALES, fetchHostSalesSaga);
}
