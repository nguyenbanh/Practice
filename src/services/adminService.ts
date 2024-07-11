import { useMutation } from "@tanstack/react-query";
import { AdminResponse } from "../types/adminType";
import { UpdateAccountRequest } from "../types/authType";
import { AccountParams } from "../types/common";
import axiosInstance from "./axiosConfig";

const ADMIN_PATH = "/api";

const ADMIN_LIST_QUERY = "AMIN_LIST_QUERY";
caches;
export const accountListFactory = (params: AccountParams) => {
  return {
    queryKey: [ADMIN_LIST_QUERY, params],
    queryFn: () =>
      axiosInstance
        .post<AdminResponse>(`${ADMIN_PATH}/users/accounts/filter`, params)
        .then((r) => r.data),
  };
};

export const useUpdateAccountMutation = () => {
  return useMutation({
    mutationFn: (request: { accountId: number; data: UpdateAccountRequest }) =>
      axiosInstance
        .put<AdminResponse>(
          `${ADMIN_PATH}/management/account/${request.accountId}`,
          request.data
        )
        .then((r) => r.data),
  });
};

export const useApproveAccountMutation = () => {
  return useMutation({
    mutationFn: (request: { id: number; status: string }) =>
      axiosInstance
        .put<AdminResponse>(
          `${ADMIN_PATH}/management/account/approval`,
          request
        )
        .then((r) => r.data),
  });
};
