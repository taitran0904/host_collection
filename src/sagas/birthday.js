import { call, put, select, takeLatest } from "redux-saga/effects";
import { showLoading, hideLoading } from "../actions/loading";
import * as apis from "../apis/birthday";
import * as cts from "../constants/events/birthday";
import * as act from "../actions/birthday";
import * as errConst from "../constants/ui/error";
import { failedToast } from "../commons/AlertHelper";
import getToken from "../commons/getToken";

function* fetchBirthdayByGiftCountSaga({ payload }) {
  const { location, limit, page } = payload.params;

  yield put(showLoading());

  try {
    const res = yield call(apis.fetchBirthdayByGiftCountAPI, location, limit, page);

    yield put(act.fetchBirthdayByGiftCountSuccess(res.data));
    yield put(hideLoading());
  } catch (error) {
    yield put(hideLoading());
    failedToast(error, errConst.FETCH_BIRTHDAY_ERROR);
  }
}

function* fetchBirthdayByRecentSaga({ payload }) {
  const { location, limit, page } = payload.params;

  yield put(showLoading());

  try {
    const res = yield call(apis.fetchBirthdayByRecentAPI, location, limit, page);

    yield put(act.fetchBirthdayByRecentSuccess(res.data));

    yield put(hideLoading());
  } catch (error) {
    yield put(hideLoading());
    failedToast(error, errConst.FETCH_BIRTHDAY_ERROR);
  }
}

function* fetchBirthdayByMonthSaga({ payload }) {
  const { month, location, limit, page } = payload.params;
  const byMonth = yield select(state => state.birthday.byMonth);

  const found = byMonth.find(i => i.month === month);

  if (!found) {
    yield put(showLoading());

    try {
      const res = yield call(apis.fetchBirthdayByMonthAPI, month, location, limit, page);

      yield put(act.fetchBirthdayByMonthSuccess({ data: res.data, month }));
      yield put(hideLoading());
    } catch (error) {
      yield put(hideLoading());
      failedToast(error, errConst.FETCH_BIRTHDAY_ERROR);
    }
  }
}

function* fetchDonateListSaga({ payload }) {
  const { userId, limit, page, isMyPage } = payload.params;

  yield put(showLoading());

  try {
    const res = yield call(apis.fetchDonateListAPI, userId, limit, page);

    yield put(
      act.fetchDonateListSuccess({
        userId,
        data: res.data.data,
        totalMoney: res.data.sumPrices,
        isMyPage
      })
    );

    yield put(hideLoading());
  } catch (error) {
    yield put(hideLoading());
    failedToast(error, errConst.FETCH_DONATE_LIST_ERROR);
  }
}

function* fetchBirthdayCardSaga({ payload }) {
  const token = getToken();
  const { type, category } = payload.params;

  if (token !== "") {
    yield put(showLoading());

    try {
      const res = yield call(apis.fetchBirthdayCardAPI, token, type, category);

      yield put(act.fetchBirthdayCardSuccess({ data: res.data.data, category }));
      yield put(hideLoading());
    } catch (error) {
      yield put(hideLoading());
      failedToast(error, errConst.FETCH_BIRTHDAY_CARD_ERROR);
    }
  }
}

function* fetchBirthdayGiftCategorySaga() {
  const token = getToken();

  if (token !== "") {
    yield put(showLoading());

    try {
      const res = yield call(apis.fetchBirthdayGiftCategoryAPI, token);

      yield put(act.fetchBirthdayGiftCategorySuccess(res.data));
      yield put(hideLoading());
    } catch (error) {
      yield put(hideLoading());
      failedToast(error, errConst.FETCH_BIRTHDAY_CARD_ERROR);
    }
  }
}

function* donateGiftSaga({ payload }) {
  const { params, history, itemSended } = payload;

  const token = getToken();
  const userInfo = yield select(state => state.user.userInfo);

  yield put(showLoading());

  try {
    const res = yield call(apis.donateGiftAPI, token, params);

    const { data } = res.data;

    const newData = {
      ...data,
      sender: userInfo,
      cid_card: itemSended.cid_card,
      cid_gift: itemSended.cid_gift
    };

    yield put(act.donateGiftSuccess(newData));

    yield put(hideLoading());
    history.goBack();
  } catch (error) {
    yield put(hideLoading());
    failedToast(error, errConst.DONATE_GIFT_ERROR);
  }
}

function* getHostSaga({ payload }) {
  const { id } = payload;

  yield put(showLoading());

  try {
    const res = yield call(apis.getHostAPI, id);

    yield put(act.getHostSuccess(res.data));

    yield put(hideLoading());
  } catch (error) {
    yield put(hideLoading());
    failedToast(error, errConst.GET_HOST_ERROR);
  }
}

export default function* birthdayWatcher() {
  yield takeLatest(cts.FETCH_BIRTHDAY_BY_GIFT_COUNT, fetchBirthdayByGiftCountSaga);
  yield takeLatest(cts.FETCH_BIRTHDAY_BY_RECENT, fetchBirthdayByRecentSaga);
  yield takeLatest(cts.FETCH_BIRTHDAY_BY_MONTH, fetchBirthdayByMonthSaga);
  yield takeLatest(cts.FETCH_DONATE_LIST, fetchDonateListSaga);
  yield takeLatest(cts.FETCH_BIRTHDAY_CARD, fetchBirthdayCardSaga);
  yield takeLatest(cts.FETCH_BIRTHDAY_GIFT_CATEGORY, fetchBirthdayGiftCategorySaga);
  yield takeLatest(cts.DONATE_GIFT, donateGiftSaga);
  yield takeLatest(cts.GET_HOST, getHostSaga);
}
