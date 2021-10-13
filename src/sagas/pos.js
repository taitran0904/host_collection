import { put, call, takeLatest } from "redux-saga/effects";
import * as posConstants from "../constants/events/pos";
import { showLoading, hideLoading } from "../actions/loading";
import getToken from "../commons/getToken";
import { fetchRevenueApi, fetchRankingApi } from "../apis/pos";

import {
  fetchRevenueSuccess,
  fetchRevenueFailed,
  fetchRankingSuccess,
  fetchRankingFailed,
} from "../actions/pos";

function* fetchRevenueSaga({ payload }) {
  yield put(showLoading());
  const token = getToken();
  const { params } = payload;

  try {
    const res = yield call(fetchRevenueApi, token, params.shop_id);
    yield put(fetchRevenueSuccess(res.data));
    yield put(hideLoading());
  } catch (errors) {
    yield put(fetchRevenueFailed(errors));
    yield put(hideLoading());
  }
}

function* fetchRankingSaga({ payload }) {
  yield put(showLoading());
  const token = getToken();
  const { params } = payload;

  try {
    const res = yield call(fetchRankingApi, token, params.shop_id);
    yield put(fetchRankingSuccess(res.data));
    yield put(hideLoading());
  } catch (errors) {
    yield put(fetchRankingFailed(errors));
    yield put(hideLoading());
  }
}

export default function* posWatcher() {
  yield takeLatest(posConstants.FETCH_REVENUE, fetchRevenueSaga);
  yield takeLatest(posConstants.FETCH_RANKING, fetchRankingSaga);
}
