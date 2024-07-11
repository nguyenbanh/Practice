import { TagType } from "../types/common";

export const REPORT_STATUS = {
  PENDING: "PENDING",
  INVESTIGATING: "INVESTIGATING",
  TRANSFERRED: "TRANSFERRED",
  DISCARDED: "DISCARDED",
  INVESTIGATION_COMPLETED: "INVESTIGATION_COMPLETED",
};

type ReportTagColorType = {
  status: string;
  type: TagType;
};

export const REPORT_TAG_COLOR: ReportTagColorType[] = [
  {
    status: REPORT_STATUS.PENDING,
    type: "default",
  },
  {
    status: REPORT_STATUS.INVESTIGATING,
    type: "orange",
  },
  {
    status: REPORT_STATUS.INVESTIGATION_COMPLETED,
    type: "green",
  },
  {
    status: REPORT_STATUS.TRANSFERRED,
    type: "blue",
  },
  {
    status: REPORT_STATUS.DISCARDED,
    type: "red",
  },
];
