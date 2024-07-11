import axios from "axios";
import Cookies from "universal-cookie";
import { ROUTER } from "../routers/router";
import { LANGUAGE } from "../types/common";
import i18n from "../i18n";

const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
  },
});

//set Authorization when logged in
instance.interceptors.request.use(function (config) {
  const cookies = new Cookies(null);
  const token = cookies.get("user")?.jwt;

  if (token === undefined) {
    delete config.headers.Authorization;
  } else {
    config.headers.Authorization = `Bearer ${token}`;
  }

  config.headers["Accept-Language"] = Object.values(LANGUAGE).find(
    (item) => item.key === i18n.language
  )?.value;

  return config;
});

instance.interceptors.response.use(
  (response) => {
    return Promise.resolve(response);
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      const _token = error?.config?.headers?.Authorization;
      if (_token) {
        window.location.href = ROUTER.LOGIN;
      }
    }
    return Promise.reject(error);
  }
);

export default instance;
