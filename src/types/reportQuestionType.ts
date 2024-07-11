import { PaginationResponse } from "./common";
import { ReportAnswer } from "./reportAnswerType";

type ReportQuestion = {
  questionId: string;
  content: string;
  reportAnswers: ReportAnswer[];
  confirmedDate: string;
  language: string;
};

type QuestionCreateBy = {
  adminUserId: string;
  email: string;
  username: string;
  fullName: string;
};

type CreateReportQuestion = {
  questionId: string;
  content: string;
  createAt: string;
  createBy: QuestionCreateBy;
  language: string;
};

// Requests
export type CreateQuestionReq = {
  content: string;
};

export type UpdateQuestionReq = {
  questionId: string;
  data: {
    content: string;
  };
};

// Responses
export type ReportQuestionRes = {
  questions: ReportQuestion[];
  paginationSpec: PaginationResponse[];
};

export type CreateReportQuestionRes = {
  question: CreateReportQuestion;
};

export type UpdateReportQuestionRes = {
  question: ReportQuestion;
};
