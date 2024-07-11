import { PaginationResponse } from "./common";

export type ReportType = {
  reportId: number;
  receiptNumber: string;
  reportStatus: string;
  title: string;
  reportDate: string;
  reportType: string;
};

export type ReportListResponse = {
  reportResponses: ReportType[];
  paginationSpec: PaginationResponse;
};

export type ReportRequest = {
  responseContent?: string;
  reportResult?: string;
  reportProcessingResult?: string;
  answer?: string;
  progressResult?: "TRANSFERRED" | "DISCARDED";
  note?: string;
  relatedFiles?: any;
  language: "KOREAN" | "ENGLISH" | "INDONESIAN" | "VIETNAMESE";
};

export type UserInfo = {
  createAt: string;
  updateAt: string;
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  informantType: string;
};

type AdditionalInfo = {
  question: string;
  answer: string;
};

export type ReportDetail = {
  id: number;
  receiptNumber: string;
  title: string;
  content: string;
  reportedPersonName: string;
  reportedPersonAffiliation: string;
  reportType: string;
  reportStatus: string;
  userInfo: UserInfo;
  relatedFiles: any;
  reportAnswers: any;
  createAt: string;
  language: string;
  reportFileDtos: string;
  userConsent: string;
  additionalInfo: AdditionalInfo[];
  adminResponseReports: any[];
};

export type ReportUpdateRequest = {
  reportId: number;
  request: any;
};
