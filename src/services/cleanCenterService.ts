import { SearchRequest } from "../types/common";
import { ReceptionResponse } from "../types/receptionType";
import axiosInstance from "./axiosConfig";

const ADMIN_PATH = "/api/admin";

const RECEPTION_LIST_QUERY = "RECEPTION_LIST_QUERY";

export const receptionListFactory = (params: SearchRequest) => {
  return {
    queryKey: [RECEPTION_LIST_QUERY, params],
    queryFn: () =>
      axiosInstance
        .get<ReceptionResponse>(`${ADMIN_PATH}/receptions`, { params })
        .then((r) => r.data),
  };
};
