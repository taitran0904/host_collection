import { fork, call, put, take } from "redux-saga/effects";
import { showLoading, hideLoading } from "../actions/loading";
import { fetchLocationAPI, fetchBannerAsideAPI, fetchGeneralAPI } from "../apis/general";
import * as generalConstants from "../constants/events/general";
import {
  fetchLocationSuccess,
  fetchLocationFailed,
  fetchBannerAsideSuccess,
  fetchBannerAsideFailed,
  fetchGeneralInfoSuccess,
  fetchGeneralInfoFailed
} from "../actions/general";

function* fetchLocationSaga() {
  while (true) {
    try {
      yield take(generalConstants.FETCH_LOCATION);
      yield put(showLoading());
      const res = yield call(fetchLocationAPI);
      yield put(fetchLocationSuccess(res.data));
      yield put(hideLoading());
    } catch (error) {
      yield put(hideLoading());
      yield put(fetchLocationFailed(error));
    }
  }
}

function* fetchBannerAsideSaga() {
  while (true) {
    try {
      yield take(generalConstants.FETCH_BANNER_ASIDE);
      yield put(showLoading());
      const res = yield call(fetchBannerAsideAPI);
      yield put(fetchBannerAsideSuccess(res.data));
      yield put(hideLoading());
    } catch (error) {
      yield put(hideLoading());
      yield put(fetchBannerAsideFailed(error));
    }
  }
}

function* fetchGeneralInfoSaga() {
  while (true) {
    try {
      yield take(generalConstants.FETCH_GENERAL_INFORMATION);
      yield put(showLoading());
      const res = yield call(fetchGeneralAPI);
      yield put(fetchGeneralInfoSuccess(res.data));
      yield put(hideLoading());
    } catch (error) {
      yield put(hideLoading());
      yield put(fetchGeneralInfoFailed(error));
    }
  }
}

export default function* asideWatcher() {
  yield fork(fetchLocationSaga);
  yield fork(fetchBannerAsideSaga);
  yield fork(fetchGeneralInfoSaga);
}
