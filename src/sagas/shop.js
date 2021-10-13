import { call, put, takeEvery, select, takeLatest } from "redux-saga/effects";
import { showLoading, hideLoading } from "../actions/loading";
import * as shopConstants from "../constants/events/shop";
import getToken from "../commons/getToken";
import {
  fetchShopListAPI,
  getOneShopListAPI,
  updateShopItemAPI,
  createShopItemAPI,
  deleteShopItemAPI,
  activeStatusAPI
} from "../apis/shop";
import {
  fetchShopListSuccess,
  fetchShopListFailed,
  getOneShopListSuccess,
  getOneShopListFailed,
  updateShopItemSuccess,
  updateShopItemFailed,
  createShopItemSuccess,
  createShopItemFailed,
  deleteShopItemSuccess,
  deleteShopItemFailed,
  activeStatusSuccess,
  activeStatusFailed
} from "../actions/shop";

function* fetchShopListSaga() {
  yield put(showLoading());
  const token = getToken();
  try {
    const res = yield call(fetchShopListAPI, token);
    yield put(fetchShopListSuccess(res.data));
    yield put(hideLoading());
  } catch (error) {
    yield put(hideLoading());
    yield put(fetchShopListFailed(error));
  }
}

function* getOneShopListSaga({ payload }) {
  const { id } = payload;
  const token = getToken();
  yield put(showLoading());
  if (id) {
    try {
      const res = yield call(getOneShopListAPI, id, token);
      yield put(getOneShopListSuccess(res.data));
      yield put(hideLoading());
    } catch (error) {
      yield put(hideLoading());
      yield put(getOneShopListFailed(error));
    }
  }
}

function* updateShopItemSaga({ payload }) {
  const { history, params } = payload;
  const id = yield select(state => state.shop.shopItemEditing.id);
  const token = getToken();
  yield put(showLoading());
  if (id) {
    try {
      yield call(updateShopItemAPI, id, params, token);
      yield put(hideLoading());
      history.push("/my-page/shop-management");
      yield put(updateShopItemSuccess());
    } catch (error) {
      yield put(hideLoading());
      yield put(updateShopItemFailed(error));
    }
  }
}

function* createShopItemSaga({ payload }) {
  const { params, history } = payload;
  const token = getToken();
  yield put(showLoading());
  try {
    yield call(createShopItemAPI, params, token);
    yield put(hideLoading());
    history.push("/my-page/shop-management");
    yield put(createShopItemSuccess());
  } catch (error) {
    yield put(hideLoading());
    yield put(createShopItemFailed(error));
  }
}

function* deleteShopItemSaga({ payload }) {
  const { id } = payload;
  const token = getToken();
  yield put(showLoading());
  try {
    const res = yield call(deleteShopItemAPI, id, token);
    yield put(hideLoading());
    yield put(deleteShopItemSuccess(res.data));
  } catch (error) {
    yield put(hideLoading());
    yield put(deleteShopItemFailed(error));
  }
}
function* activeStatusSaga({ payload }) {
  const { data } = payload;
  yield put(showLoading());
  try {
    const res = yield call(activeStatusAPI, data);
    yield put(hideLoading());
    yield put(activeStatusSuccess(res.data));
  } catch (error) {
    yield put(hideLoading());
    yield put(activeStatusFailed(error));
  }
}

export default function* shopWatcher() {
  yield takeLatest(shopConstants.FETCH_SHOP_LIST, fetchShopListSaga);
  yield takeEvery(shopConstants.GET_ONE_SHOP_LIST, getOneShopListSaga);
  yield takeLatest(shopConstants.UPDATE_SHOP_ITEM, updateShopItemSaga);
  yield takeEvery(shopConstants.CREATE_SHOP_ITEM, createShopItemSaga);
  yield takeEvery(shopConstants.ACTIVE_STATUS, activeStatusSaga);
  yield takeLatest(shopConstants.DELETE_SHOP_ITEM, deleteShopItemSaga);
}
