import { useMutation } from "@tanstack/react-query";
import {
  CreateAccountRequest,
  LoginRequest,
  OtpRequest,
  UpdatedPasswordRequest,
  UserProfile,
} from "../types/authType";
import axiosInstance from "./axiosConfig";
import axios from "axios";

const AUTH_PATH = `/api/public`;

export const logout = () => {
  return axiosInstance.get(`${AUTH_PATH}/logout`);
};

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: (data: LoginRequest) =>
      axiosInstance
        .post<UserProfile>(`${AUTH_PATH}/login`, data)
        .then((r) => r.data),
  });
};

export const useChangePasswordMutation = () => {
  return useMutation({
    mutationFn: (request: { data: UpdatedPasswordRequest; token: string }) =>
      axios
        .put<any>(
          `${
            import.meta.env.VITE_APP_API_BASE_URL
          }/api/users/account/update-password`,
          request.data,
          {
            headers: {
              Authorization: `Bearer ${request.token}`,
            },
          }
        )
        .then((r) => r.data),
  });
};

export const useGenerateQRCodeMutation = () => {
  return useMutation({
    mutationFn: (request: { data: { email: string }; token: string }) =>
      axios
        .post<{ qrCode: string; secretKey: string }>(
          `${import.meta.env.VITE_APP_API_BASE_URL}/api/users/generate-qr`,
          request.data,
          {
            headers: {
              Authorization: `Bearer ${request.token}`,
            },
          }
        )
        .then((r) => r.data),
  });
};

export const useVerifyOtpMutation = () => {
  return useMutation({
    mutationFn: (data: OtpRequest) =>
      axios
        .post<UserProfile>(
          `${import.meta.env.VITE_APP_API_BASE_URL}/api/public/verify-otp-code`,
          data,
          {
            withCredentials: true,
          }
        )
        .then((r) => r.data),
  });
};

export const useCreateAccountMutation = () => {
  return useMutation({
    mutationFn: (data: CreateAccountRequest) =>
      axiosInstance
        .post<{ message: string }>(`${AUTH_PATH}/request/create-account`, data)
        .then((r) => r.data),
  });
};

const LOGOUT = "LOGOUT";

export const logoutFactory = () => {
  return {
    queryKey: [LOGOUT],
    queryFn: () =>
      axiosInstance.get<void>(`${AUTH_PATH}/logout`).then((r) => r.data),
  };
};
