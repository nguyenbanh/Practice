import { PaginationResponse } from "./common";

export type ReceptionInfo = {
  cleanRegistrationId: number;
  receiptDate: string;
  providerName: string;
  recipientName: string;
  status: string;
};

export type ReceptionResponse = {
  cleanRegistrations: ReceptionInfo[];
  paginationSpec: PaginationResponse;
};
