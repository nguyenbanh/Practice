import axiosInstance from "./axiosConfig";

const STATISTICAL_PATH = "/api/users/statistical";
const STATICS_COUNT_QUERY = "STATICS_COUNT_QUERY";
const STATICS_REPORTS_QUERY = "STATICS_REPORTS_QUERY";
const STATICS_CLEAN_CENTER_QUERY = "STATICS_CLEAN_CENTER_QUERY";

export const statisticalCountFactory = () => {
  return {
    queryKey: [STATICS_COUNT_QUERY],
    queryFn: () =>
      axiosInstance.get<any>(`${STATISTICAL_PATH}/counts`).then((r) => r.data),
  };
};

export const statisticalReportFactory = (params: {
  reportStatus: string;
  dateRange: string;
}) => {
  return {
    queryKey: [STATICS_REPORTS_QUERY, params],
    queryFn: () =>
      axiosInstance
        .get<any>(`${STATISTICAL_PATH}/reports`, {
          params,
        })
        .then((r) => r.data),
  };
};

export const statisticalCleanCenterFactory = (params: {
  dateRange: string;
}) => {
  return {
    queryKey: [STATICS_CLEAN_CENTER_QUERY, params],
    queryFn: () =>
      axiosInstance
        .get<any>(`${STATISTICAL_PATH}/clean-center`, { params })
        .then((r) => r.data),
  };
};
