import { useMutation } from "@tanstack/react-query";
import { ReportParams } from "../types/common";
import {
  ReportDetail,
  ReportListResponse,
  ReportUpdateRequest
} from "../types/reportType";
import axiosInstance from "./axiosConfig";

const ADMIN_PATH = "/api/admin";
const USER_PATH = "/api/users";

const REPORT_LIST_QUERY = "REPORT_LIST_QUERY";
const GET_REPORT_BY_ID = "GET_REPORT_BY_ID";

export const reportListFactory = (params: ReportParams) => {
  return {
    queryKey: [REPORT_LIST_QUERY, params],
    queryFn: () =>
      axiosInstance
        .post<ReportListResponse>(`/api/users/reports/filter`, params)
        .then((r) => r.data),
  };
};

export const getReportByIdFactory = (reportId: string) => {
  return {
    queryKey: [GET_REPORT_BY_ID, reportId],
    queryFn: () =>
      axiosInstance
        .get<ReportDetail>(`${USER_PATH}/report/${reportId}`)
        .then((r) => r.data),
  };
};

export const useUpdateReportMutation = () => {
  return useMutation({
    mutationFn: (data: ReportUpdateRequest) => {
      return axiosInstance
        .post<any>(
          `${ADMIN_PATH}/confirm/report/${data.reportId}`,
          data.request,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((r) => r.data);
    },
  });
};
