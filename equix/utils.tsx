/* global RequestInit */
import {
  APRIL_INDEX,
  FEBRUARY_INDEX,
  FEBRUARY_LENGTH,
  HTTP_UNAUTHORIZED_CODE,
  JUNE_INDEX,
  LEAP_YEAR_DIVIDER,
  LEAP_YEAR_FEBRUARY_LENGTH,
  MONTH_LENGTH,
  OCTOBER_INDEX,
  SEPTEMBER_INDEX,
  SHORT_MONTH_LENGTH,
  WEEK_LENGTH,
  YEARS_IN_CENTURY,
} from "./consts";
import { InputOption } from "./types";

const convertObjectEntriesToStrings = (object: Object) => {
  const newObject: Record<string, string> = {};

  Object.entries(object).forEach(([key, value]) => {
    newObject[key.toString()] = value.toString();
  });

  return newObject;
};

const initialOptions: RequestInit = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Basic ${btoa(process.env["NEXT_PUBLIC_AUTH"] as string)}`,
  },
  redirect: "error",
};

export const areEntitiesEqual = (entity1: any, entity2: any): boolean => {
  const type1 = typeof entity1;
  const type2 = typeof entity2;

  return entity1 && entity2 && type1 === "object" && type1 === type2
    ? Object.keys(entity1).length === Object.keys(entity2).length &&
        Object.keys(entity1).every((key) =>
          areEntitiesEqual(entity1[key], entity2[key])
        )
    : entity1 === entity2;
};

export const getMonthLength = (month: number, year: number) => {
  if (
    month === FEBRUARY_INDEX &&
    year % LEAP_YEAR_DIVIDER === 0 &&
    year % YEARS_IN_CENTURY !== 0
  )
    return LEAP_YEAR_FEBRUARY_LENGTH;

  switch (month) {
    case FEBRUARY_INDEX: {
      return FEBRUARY_LENGTH;
    }
    case APRIL_INDEX:
    case JUNE_INDEX:
    case SEPTEMBER_INDEX:
    case OCTOBER_INDEX: {
      return SHORT_MONTH_LENGTH;
    }

    default: {
      return MONTH_LENGTH;
    }
  }
};

export const capitalize = (word: string) =>
  word.charAt && Boolean(word.charAt(0)?.toUpperCase()) + word.slice(1);

export const toOptions = (array: readonly string[]): InputOption[] =>
  array.map((name, index) => ({
    name,
    id: index.toString(),
  }));

export const getInputDate = (date: Date) =>
  date ? date.toLocaleDateString("ru").split(".").reverse().join("-") : "";

export const convertInputDateToIso = (string: string) => {
  const [day, month, year] = string.split("-").reverse();
  const date = new Date();

  if (day) date.setDate(parseInt(day));

  if (month) date.setMonth(parseInt(month) - 1);

  if (year) date.setFullYear(parseInt(year));

  return date.toISOString();
};

export const getUrlWithParameters = (url: string, parameters: object) =>
  `${url}?${new URLSearchParams(
    convertObjectEntriesToStrings(parameters)
  ).toString()}`;

export const getMonthAgo = () => {
  const date = new Date(Date.now());

  date.setMonth(new Date(Date.now()).getMonth() - 1);

  return date;
};

export const getWeekAgo = () => {
  const date = new Date(Date.now());

  date.setDate(new Date(Date.now()).getDay() - WEEK_LENGTH);

  return date;
};

export const fetchApi = async (endpoint: string, options?: RequestInit) => {
  const res = await fetch(`${process.env["NEXT_PUBLIC_API"]}/${endpoint}`, {
    ...options,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      ...options?.headers,
    },
  });

  if (res.status === HTTP_UNAUTHORIZED_CODE) {
    localStorage.clear();
    // router.push("/auth");
  }

  return res;
};

export const submitEntity = (
  entitiesName: string,
  entity: Object,
  id?: string
) =>
  fetchApi(
    `${entitiesName.toLowerCase()}${id && id !== "new" ? `/${id}` : ""}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      method: id && id !== "new" ? "PATCH" : "POST",
      body: JSON.stringify(entity),
    }
  );

export const deleteEntity = (entitiesName: string, id: string) =>
  fetchApi(`${entitiesName.toLowerCase()}/${id}`, {
    method: "DELETE",
  });

export const postOctetStream = async (url: string, filename: string) => {
  const res = await fetch(url, {
    ...initialOptions,
    headers: {
      ...initialOptions.headers,
      "Content-Type": "application/octet-stream",
    },
    method: "POST",
  });

  const dataObjectToWrite = await res.json();

  const blob = new Blob([JSON.stringify(dataObjectToWrite)], {
    type: "text/json",
  });
  const link = document.createElement("a");

  link.download = filename;
  link.href = window.URL.createObjectURL(blob);
  link.dataset["downloadurl"] = ["text/json", link.download, link.href].join(
    ":"
  );

  const event = new MouseEvent("click", {
    view: window,
    bubbles: true,
    cancelable: true,
  });

  link.dispatchEvent(event);
  link.remove();
};

// REORDER LIST UP/DOWN
// const [sortedClips, setSortedClips] = useState<Clip[]>([]);
// const onMoveUp = (key: number) => {
//   if (key === 0) return;
//   const items = [...sortedClips];
//   const index = key - 1;
//   const itemAbove = items[index];
//   items[key - 1] = items[key];
//   items[key] = itemAbove;
//   setSortedClips(items);
// };

// const onMoveDown = (key: number) => {
//   const items = [...sortedClips];
//   if (key === items.length - 1) return;
//   const index = key + 1;
//   const itemBelow = items[index];
//   items[key + 1] = items[key];
//   items[key] = itemBelow;
//   setSortedClips(items);
// };
