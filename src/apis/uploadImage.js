import axiosService from "../commons/axiosService";
import { API_ENDPOINT } from "../constants";

const URL_UPLOAD = 'api/image-host-temp';
const URL_GALLERY_HOST = "api/galleryhost";

export const uploadImageAPI = (data, token) => {
  return axiosService.post(
    `${API_ENDPOINT}/${URL_UPLOAD}`, data, {
      headers: {
        'content-type': 'multipart/form-data',
        Authorization: `Bearer ${token}`
      },
    }
  );
};

export const uploadGalleryHostAPI = (data, token) => {
  return axiosService.post(
    `${API_ENDPOINT}/${URL_GALLERY_HOST}`, data, {
      headers: {
        'content-type': 'multipart/form-data',
        Authorization: `Bearer ${token}`
      },
    }
  );
};
