import * as cts from "../constants/events/birthday";

export const fetchBirthdayByGiftCount = (params = {}) => ({
  type: cts.FETCH_BIRTHDAY_BY_GIFT_COUNT,
  payload: { params }
});

export const fetchBirthdayByGiftCountSuccess = data => ({
  type: cts.FETCH_BIRTHDAY_BY_GIFT_COUNT_SUCCESS,
  payload: { data }
});

export const fetchBirthdayByMonth = (params = {}) => ({
  type: cts.FETCH_BIRTHDAY_BY_MONTH,
  payload: { params }
});

export const fetchBirthdayByMonthSuccess = data => ({
  type: cts.FETCH_BIRTHDAY_BY_MONTH_SUCCESS,
  payload: { data }
});

export const fetchBirthdayByRecent = (params = {}) => ({
  type: cts.FETCH_BIRTHDAY_BY_RECENT,
  payload: { params }
});

export const fetchBirthdayByRecentSuccess = data => ({
  type: cts.FETCH_BIRTHDAY_BY_RECENT_SUCCESS,
  payload: { data }
});

export const fetchDonateList = (params = {}) => ({
  type: cts.FETCH_DONATE_LIST,
  payload: { params }
});

export const fetchDonateListSuccess = data => ({
  type: cts.FETCH_DONATE_LIST_SUCCESS,
  payload: { data }
});

export const fetchBirthdayCard = params => ({
  type: cts.FETCH_BIRTHDAY_CARD,
  payload: { params }
});

export const fetchBirthdayCardSuccess = data => ({
  type: cts.FETCH_BIRTHDAY_CARD_SUCCESS,
  payload: { data }
});

export const fetchBirthdayGiftCategory = () => ({
  type: cts.FETCH_BIRTHDAY_GIFT_CATEGORY
});

export const fetchBirthdayGiftCategorySuccess = data => ({
  type: cts.FETCH_BIRTHDAY_GIFT_CATEGORY_SUCCESS,
  payload: { data }
});

export const donateGift = (history, host, params = {}, itemSended) => ({
  type: cts.DONATE_GIFT,
  payload: { history, host, params, itemSended }
});

export const donateGiftSuccess = data => ({
  type: cts.DONATE_GIFT_SUCCESS,
  payload: { data }
});

export const setBirthdayPage = type => ({
  type: cts.SET_BIRTHDAY_PAGE,
  payload: { type }
});

export const setIsLoadMore = type => ({
  type: cts.SET_IS_LOAD_MORE,
  payload: { type }
});

export const getHost = id => ({
  type: cts.GET_HOST,
  payload: { id }
});

export const getHostSuccess = data => ({
  type: cts.GET_HOST_SUCCESS,
  payload: { data }
});
