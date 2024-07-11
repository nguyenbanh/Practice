import { useMutation } from "@tanstack/react-query";
import { DeletedResponse, SearchRequest } from "../types/common";
import {
  CreateReportQuestionRes,
  ReportQuestionRes,
  UpdateQuestionReq,
  CreateQuestionReq,
  UpdateReportQuestionRes,
} from "../types/reportQuestionType";
import axiosInstance from "./axiosConfig";

const REPORT_QUESTION_PATH = "/api/admin/report";

const QUESTION_LIST_QUERY = "QUESTION_LIST_QUERY";

export const questionListFactory = (params: SearchRequest) => {
  return {
    queryKey: [QUESTION_LIST_QUERY],
    queryFn: () =>
      axiosInstance
        .get<ReportQuestionRes>(`${REPORT_QUESTION_PATH}/questions`, {
          params,
        })
        .then((r) => r.data),
  };
};

export const useCreateQuestionMutation = () => {
  return useMutation({
    mutationFn: (request: CreateQuestionReq) =>
      axiosInstance
        .post<CreateReportQuestionRes>(
          `${REPORT_QUESTION_PATH}/question`,
          request,
        )
        .then((r) => r.data),
  });
};

export const useUpdateQuestionMutation = () => {
  return useMutation({
    mutationFn: (request: UpdateQuestionReq) =>
      axiosInstance
        .put<UpdateReportQuestionRes>(
          `${REPORT_QUESTION_PATH}/question/${request.questionId}`,
          request.data,
        )
        .then((r) => r.data),
  });
};

export const useDeleteQuestionMutation = () => {
  return useMutation({
    mutationFn: (questionId: string) =>
      axiosInstance
        .delete<DeletedResponse>(
          `${REPORT_QUESTION_PATH}/question/${questionId}`,
        )
        .then((r) => r.data),
  });
};
