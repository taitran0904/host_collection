import axiosService from "../commons/axiosService";
import { API_ENDPOINT } from "../constants";

const URL_SHOP = "api/shop";
const URL_ACTIVE_STATUS = "api/active-status";

export const fetchShopListAPI = (token) => {
  return axiosService.get(`${API_ENDPOINT}/${URL_SHOP}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const getOneShopListAPI = (id, token) => {
  return axiosService.get(`${API_ENDPOINT}/${URL_SHOP}/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const updateShopItemAPI = (id, data, token) => {
  return axiosService.post(`${API_ENDPOINT}/${URL_SHOP}/${id}`, data, {
    "Content-Type": "multipart/form-data",
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const createShopItemAPI = (data, token) => {
  return axiosService.post(`${API_ENDPOINT}/${URL_SHOP}`, data, {
    "Content-Type": "multipart/form-data",
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const deleteShopItemAPI = (id, token) => {
  return axiosService.delete(`${API_ENDPOINT}/${URL_SHOP}/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
export const activeStatusAPI = (data) => {
  const { id, email, status, token } = data;
  const str = `id=${id}&email=${email}&status=${status}&token=${token}`;
  return axiosService.get(`${API_ENDPOINT}/${URL_ACTIVE_STATUS}?${str}`);
};
