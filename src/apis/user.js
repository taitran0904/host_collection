import axiosService from "../commons/axiosService";
import { API_ENDPOINT } from "../constants";
import request from '../commons/axiosServiceNew';

const URL_GET_USER_BY_TOKEN = "api/user";
const URL_UPDATE_USER_INFO = "api/users";
const URL_GALLERY_HOST = "api/galleryhost";
const URL_HOST_SALES = "api/host-sales";
const URL_ACTIVE_USER_REGISTER = "api/active-code";
const URL_RESEND_ACTIVE_USER = "api/resend-active";
const URL_REMOVE_AVATAR_USER = "api/remove-image";

export const fetchUserInfoAPI = token => {
  return axiosService.get(`${API_ENDPOINT}/${URL_GET_USER_BY_TOKEN}`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    }
  });
};

export const updateUserInfoAPI = (userId, data, token) => {
  return axiosService.post(
    `${API_ENDPOINT}/${URL_UPDATE_USER_INFO}/${userId}`, data, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  );
};

export const fetchGalleryHostAPI = token => {
  return axiosService.get(`${API_ENDPOINT}/${URL_GALLERY_HOST}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

export const deleteGalleryItemHostAPI = (id, token) => {
  return axiosService.delete(`${API_ENDPOINT}/${URL_GALLERY_HOST}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

export const fetchHostSalesAPI = (type, token, shop_id) => {
  return axiosService.get(`${API_ENDPOINT}/${URL_HOST_SALES}?type=${type}&shop_id=${shop_id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

export const activeUserRegisterAPI = (data) => {
  return axiosService.post(
    `${API_ENDPOINT}/${URL_ACTIVE_USER_REGISTER}`,
    data
  );
};

export const resendActiveUserAPI = (data) => {
  return axiosService.post(
    `${API_ENDPOINT}/${URL_RESEND_ACTIVE_USER}`,
    data
  );
};

export const removeImageAvatarUserAPI = (id, data, token) => {
  return request({
    url: `${URL_REMOVE_AVATAR_USER}/${id}`,
    method: 'put',
    data: {
      image_name: data
    },
    token
  });
}
