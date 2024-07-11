export type PagingRequest = {
  page: number;
  size: number;
};

export type SearchRequest = PagingRequest & {
  sortColum?: string;
  sortType?: string;
  search?: string;
};

export type ReportParams = PagingRequest & {
  createdFrom: string | null;
  createdTo: string | null;
  receiptNumber: string | null;
  reportStatus: string | null;
  reportType: string | null;
  reportedPersonAffiliation: string | null;
  reportedPersonName: string | null;
  sortDir: string | null;
  sortField: string | null;
  title: string | null;
};

export type AccountParams = PagingRequest & {
  createdFrom: string | null;
  createdTo: string | null;
  email: string | null;
  fullName: string | null;
  phoneNumber: string | null;
  sortDir: string | null;
  sortField: string | null;
  status: string | null;
  username: string | null;
};

export type PaginationResponse = {
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
};
export type HeaderInfo = {
  title: string;
  isBack: boolean;
};

export type DeletedResponse = {
  status: string;
  message: string;
};

export const LANGUAGE = {
  kr: {
    key: "kr",
    label: "KOR",
    value: "KOREAN",
  },
  vi: {
    key: "vi",
    label: "VI",
    value: "VIETNAMESE",
  },
  en: {
    key: "en",
    label: "EN",
    value: "ENGLISH",
  },
  ido: {
    key: "ind",
    label: "IND",
    value: "INDONESIAN",
  },
};

export type TagType = "red" | "blue" | "orange" | "green" | "default";
