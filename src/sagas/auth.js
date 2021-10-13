import { call, put, takeEvery, takeLatest, delay } from "redux-saga/effects";
import Cookies from "js-cookie";
import CryptoJS from "crypto-js";

import { showLoading, hideLoading } from "../actions/loading";
import { loginAPI, logoutAPI, registerAPI } from "../apis/auth";
import * as authConstants from "../constants/events/auth";
import * as titleConstants from "../constants/ui/login";
import { successToast } from "../commons/AlertHelper";
import { ENCODE_SECRET_KEY } from "../constants";
import getToken from "../commons/getToken";

import {
  loginFlowSuccess,
  loginFlowFailed,
  setAuth,
  registerFailed,
} from "../actions/auth";

function* loginFlowSaga({ payload }) {
  try {
    const { email, password, history, checked } = payload;
    yield put(showLoading());
    const res = yield call(loginAPI, { email, password });
    const { data } = res;

    if (data.token) {
      yield put(loginFlowSuccess(data));
      yield put(setAuth("2"));

      Cookies.set(
        "token",
        CryptoJS.AES.encrypt(data.token, ENCODE_SECRET_KEY).toString(),
        {
          expires: checked ? 7 : 1 / 24,
        }
      );

      if (history.goBack()) {
        history.goBack();
      } else {
        history.push("/my-page");
      }
      window.location.reload();
    } else if (data.error) {
      yield put(loginFlowFailed(data.error));
    }
  } catch (error) {
    yield put(loginFlowFailed(error));
  }
  yield put(hideLoading());
}

function* logoutFlowSaga({ payload }) {
  const { history } = payload;
  yield put(showLoading());
  yield call(logoutAPI, getToken());
  yield put(setAuth("3"));
  Cookies.remove("token");
  yield put(hideLoading());
  window.location.reload();
  if (history) {
    history.push("/my-page");
  }
}

function* registerSaga({ payload }) {
  const {
    nameRegister,
    emailRegister,
    passwordRegister,
    rePasswordRegister,
    history,
  } = payload.params;
  yield put(showLoading());

  try {
    const res = yield call(registerAPI, {
      // firstName,
      // familyName,
      name: nameRegister,
      email: emailRegister,
      password: passwordRegister,
      c_password: rePasswordRegister,
    });

    if (res.data.message === "success") {
      yield put(hideLoading());
      successToast(titleConstants.REGISTER_SUCCESS, "top-right");
      yield delay(1000);
      history.push("/login");
    } else if (res.data.message === "error") {
      yield put(hideLoading());
      yield put(registerFailed(res.data));
    }

    // if (res.data.data.token) {
    //   yield put(registerSuccess(res.data.data.token));

    //   Cookies.set(
    //     "token",
    //     CryptoJS.AES.encrypt(res.data.data.token, ENCODE_SECRET_KEY).toString(),
    //     {
    //       expires: 7
    //     }
    //   );

    //   yield put(hideLoading());
    //   successToast(titleConstants.REGISTER_SUCCESS, "center");
    //   yield delay(3000);
    //   yield put(setAuth("2"));
    //   if (history.goBack()) {
    //     history.goBack();
    //   }
    //   else {
    //     history.push("/my-page");
    //   }
    //   window.location.reload();
    // } else if (res.data.data.email) {
    //   yield put(hideLoading());
    //   yield put(registerFailed("Email already"));
    // }
  } catch (error) {
    yield put(registerFailed(error));
  }
}

export default function* authWatcher() {
  yield takeEvery(authConstants.LOGIN_FLOW, loginFlowSaga);
  yield takeLatest(authConstants.LOGOUT, logoutFlowSaga);
  yield takeLatest(authConstants.REGISTER, registerSaga);
}
