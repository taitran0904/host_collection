import axiosService from "../commons/axiosService";
import { API_ENDPOINT, CONFIG_GET_GENERAL_DATA } from "../constants";

const URL_FETCH_BIRTHDAY_BY_GIFT_COUNT = "api/host-gift-count";
const URL_FETCH_BIRTHDAY_BY_RECENT = "api/host-birthday-nearest";
const URL_FETCH_BIRTHDAY_BY_MONTH = "api/host-birthday-month";
const URL_DONATE_LIST = "api/card-birthday-sended";

const URL_FETCH_BIRTHDAY_CARD = "api/card-birthday";
const URL_FETCH_BIRTHDAY_GIFT_CATEGORY = "api/card-category";

const URL_GET_HOST = "api/users";

export const fetchBirthdayByGiftCountAPI = (location, limit, page) => {
  return axiosService.get(
    `${API_ENDPOINT}/${URL_FETCH_BIRTHDAY_BY_GIFT_COUNT}?cid_location=${location}&limit=${limit}&page=${page}`,
    CONFIG_GET_GENERAL_DATA
  );
};

export const fetchBirthdayByRecentAPI = (location, limit, page) => {
  return axiosService.get(
    `${API_ENDPOINT}/${URL_FETCH_BIRTHDAY_BY_RECENT}?cid_location=${location}&limit=${limit}&page=${page}`,
    CONFIG_GET_GENERAL_DATA
  );
};

export const fetchBirthdayByMonthAPI = (month, location, limit, page) => {
  return axiosService.get(
    `${API_ENDPOINT}/${URL_FETCH_BIRTHDAY_BY_MONTH}?month=${month}&cid_location=${location}&limit=${limit}&page=${page}`,
    CONFIG_GET_GENERAL_DATA
  );
};

export const fetchDonateListAPI = (userId, limit, page) => {
  return axiosService.get(
    `${API_ENDPOINT}/${URL_DONATE_LIST}?user_id=${userId}&limit=${limit}&page=${page}`,
    CONFIG_GET_GENERAL_DATA
  );
};

export const donateGiftAPI = (token, data) => {
  return axiosService.post(`${API_ENDPOINT}/${URL_DONATE_LIST}`, data, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

export const fetchBirthdayCardAPI = (token, type, category) => {
  return axiosService.get(
    `${API_ENDPOINT}/${URL_FETCH_BIRTHDAY_CARD}?type=${type}&category=${category}`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
};

export const fetchBirthdayGiftCategoryAPI = token => {
  return axiosService.get(`${API_ENDPOINT}/${URL_FETCH_BIRTHDAY_GIFT_CATEGORY}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

export const getHostAPI = id => {
  return axiosService.get(`${API_ENDPOINT}/${URL_GET_HOST}/${id}`, CONFIG_GET_GENERAL_DATA);
};
