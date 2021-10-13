import axiosService from "../commons/axiosService";
import { API_ENDPOINT } from "../constants";

const URL_CHECK_USER = "api/login";
const URL_LOGOUT = "api/logout";
const URL_REGISTER = "api/register";

export const loginAPI = (params = {}) => {
  return axiosService.post(
    `${API_ENDPOINT}/${URL_CHECK_USER}`,
    { email: params.email, password: params.password },
    null
  );
};

export const logoutAPI = token => {
  return axiosService.get(`${API_ENDPOINT}/${URL_LOGOUT}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

export const registerAPI = (params = {}) => {
  return axiosService.post(`${API_ENDPOINT}/${URL_REGISTER}`, params, null);
};
