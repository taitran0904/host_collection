import axios from "axios";
import { API_ENDPOINT } from "../constants";

const service = axios.create({
  baseURL: API_ENDPOINT,
  timeout: 30000,
});

service.interceptors.request.use(
  (config) => {
    config.data = config.data || [];

    config.params = config.params || {};

    config.headers["Content-Type"] = "application/json";

    if (!config.noNeedToken) {
      config.headers.Authorization = `Bearer ${config.token}`;
    }

    if (config.isFormData) {
      config.headers["Content-Type"] = "multipart/form-data";
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default service;
