import axiosService from "../commons/axiosService";
import { API_ENDPOINT, CONFIG_GET_GENERAL_DATA } from "../constants";

const URL_FETCH_LOCATION = "api/location";
const URL_FETCH_BANNER = "api/banner";
const URL_GENERAL_INFO = "api/index";

export const fetchLocationAPI = () => {
  return axiosService.get(`${API_ENDPOINT}/${URL_FETCH_LOCATION}`, CONFIG_GET_GENERAL_DATA);
};

export const fetchBannerAsideAPI = () => {
  return axiosService.get(`${API_ENDPOINT}/${URL_FETCH_BANNER}`, CONFIG_GET_GENERAL_DATA);
};

export const fetchGeneralAPI = () => {
  return axiosService.get(`${API_ENDPOINT}/${URL_GENERAL_INFO}`, CONFIG_GET_GENERAL_DATA);
};
