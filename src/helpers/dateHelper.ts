import dayjs from "dayjs";

export const getDateRangeFromArray = (
  dateRange: any[],
  format = "YYYY-MM-DD"
) => {
  let startDate = "";
  let endDate = "";

  const getDateFromIndex = (index: number) =>
    dateRange[index] ? dayjs(dateRange[index]).format(format) : "";

  if (dateRange?.length > 0) startDate = getDateFromIndex(0);
  if (dateRange?.length > 1) endDate = getDateFromIndex(1);
  return { startDate, endDate };
};

export const formatDate = (date: string, formatType = "YYYY-MM-DD") => {
  return dayjs(date).format(formatType);
};
