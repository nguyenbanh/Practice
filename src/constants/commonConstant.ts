import { TagType } from "../types/common";

export const PAGING = {
  PAGE_SIZE_OPTION_DEFAULT: [10, 20, 30],
  PAGE_SIZE_DEFAULT: 10,
};

type TagColorType = {
  color: { c: string; bg: string };
  type: TagType;
};

export const TAG_COLOR: TagColorType[] = [
  {
    type: "default",
    color: { c: "white", bg: "#14121F" },
  },
  {
    type: "orange",
    color: { c: "#FF9551", bg: "#FFF4E8" },
  },
  {
    type: "green",
    color: { c: "#52C41A", bg: "#F5F5F5" },
  },
  {
    type: "blue",
    color: { c: "white", bg: "#5FD068" },
  },
  {
    type: "red",
    color: { c: "#F92431", bg: "#FFEBEB" },
  },
];
