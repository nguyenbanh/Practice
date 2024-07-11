import { PaginationResponse } from "./common";

export type AdminInfo = {
  accountId: number;
  email: string;
  isInitPassword: boolean;
  password: string;
  phoneNumber: string;
  status: string;
  username: string;
  wrongPasswordCount: string;
  wrongOtpCount: number;
  fullName: string;
  secretCode: string;
  createAt: string;
  updateAt: string;
  adminLoginHistories: any[];
  adminResponseReports: any[];
  reportQuestions: string;
  roles: string[];
};

export type AdminResponse = {
  users: AdminInfo[];
  paginationSpec: PaginationResponse;
};
