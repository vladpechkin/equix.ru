/* global RequestInit */
import config from "./Admin/config.json";
import { Entity, InputOption } from "./types";

const HTTP_UNAUTHORIZED_CODE = 401;

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
  const FEBRUARY_INDEX = 2;
  const APRIL_INDEX = 4;
  const JUNE_INDEX = 6;
  const SEPTEMBER_INDEX = 9;
  const OCTOBER_INDEX = 10;
  const LEAP_YEAR_DIVIDER = 4;
  const YEARS_IN_CENTURY = 100;
  const SHORT_MONTH_LENGTH = 30;
  const MONTH_LENGTH = 31;
  const FEBRUARY_LENGTH = 28;
  const LEAP_YEAR_FEBRUARY_LENGTH = 29;

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

export const getKeyType = (entitiesName: string, key: string) => {
  type EntityName = keyof typeof config.entities;

  const name = capitalize(entitiesName.slice(0, -1)) as EntityName;

  return (config.entities[name] as any)[key];
};

export const getInputDate = (date: Date) =>
  date ? date.toLocaleDateString("ru").split(".").reverse().join("-") : "";

export const convertInputDateToIso = (string: string) => {
  const [day, month, year] = string.split("-").reverse();
  const date = new Date();

  if (day) date.setDate(parseInt(day));

  if (month) date.setMonth(parseInt(month));

  if (year) date.setFullYear(parseInt(year));

  return date.toISOString();
};

export const getNonHiddenEntityEntries = (
  initialEntity: Object,
  entitiesName: string
) => {
  type HiddenField = keyof typeof config.hidden_fields;

  return Object.entries(initialEntity).filter(
    ([key]) =>
      !(
        config.hidden_fields.ALL.includes(key) ||
        config.hidden_fields[entitiesName as HiddenField]?.includes(key)
      )
  );
};

export const getInputType = (entitiesName: string, key: string, value: any) => {
  const keyType = getKeyType(entitiesName, key);

  if (value?.toString().match(/\.(?:bmp|gif|jpe?g|png|tiff?|webp)$/u)) {
    return "image";
  }

  switch (keyType) {
    case "string":
    case "string[]":
    case "any":
    case "number": {
      return "text";
    }
    case "Date": {
      return "date";
    }

    default: {
      return "radio";
    }
  }
};

export const getOptions = (entitiesName: string, key: string) => {
  type KeyEnum = keyof typeof config.enums;

  const keyEnum =
    config.enums[capitalize(key) as KeyEnum] ||
    config.enums[
      (capitalize(entitiesName.slice(0, -1)) + capitalize(key)) as KeyEnum
    ];

  return keyEnum ? toOptions(Object.keys(keyEnum)) : toOptions(["true"]);
};

export const getEntityTemplate = (entitiesName: string) => {
  type EntityName = keyof typeof config.entities;

  const entity =
    config?.entities[capitalize(entitiesName?.slice(0, -1)) as EntityName];

  return (
    entity
      ? Object.fromEntries(Object.entries(entity)?.map(([key]) => [key, ""]))
      : {}
  ) as Entity;
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
  const WEEK_LENGTH = 7;

  date.setDate(new Date(Date.now()).getDay() - WEEK_LENGTH);

  return date;
};

export const getAdditionalEntitiesEndpoints = (entitiesName: string) => {
  type EntityName = keyof typeof config.additional_entities_endpoints;

  return config.additional_entities_endpoints[
    capitalize(entitiesName as string) as EntityName
  ];
};

export const renderValue = (key: string, value: any) => {
  const EXCHANGE_UNITS_IN_CURRENCY = 100;
  const UNITS_IN_RATING_STAR = 10;

  switch (true) {
    case value === null: {
      return "";
    }
    case key.toLowerCase().includes("fee"): {
      return `${value * EXCHANGE_UNITS_IN_CURRENCY}%`;
    }
    case key === "cashLimit" ||
      key === "amount" ||
      key.toLowerCase().includes("balance") ||
      key.toLowerCase().includes("price"): {
      return value / EXCHANGE_UNITS_IN_CURRENCY;
    }
    case Boolean(parseInt(value)):
    case key.toLowerCase().includes("rating"): {
      return String(
        Math.round(value * UNITS_IN_RATING_STAR) / UNITS_IN_RATING_STAR
      );
    }
    case /^-?(?:[1-9]\d*)?\d{4}-(?:0[1-9]|1[0-2])-(?:3[01]|0[1-9]|[12]\d)T(?:2[0-3]|[01]\d)(?::[0-5]\d){2}(?:.\d+)?Z?$/u.test(
      value
    ): {
      return new Date(value).toLocaleDateString("ru");
    }
    case typeof value === "string" && (value as string).includes(".jpeg"): {
      return <img src={value} className="rounded-lg h-10 w-10" alt="" />;
    }

    default: {
      return value;
    }
  }
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

export const postOctetStream = (url: string, filename: string) =>
  fetch(url, {
    ...initialOptions,
    headers: {
      ...initialOptions.headers,
      "Content-Type": "application/octet-stream",
    },
    method: "POST",
  })
    .then((res) => res.json())
    .then((dataObjToWrite) => {
      const blob = new Blob([JSON.stringify(dataObjToWrite)], {
        type: "text/json",
      });
      const link = document.createElement("a");

      link.download = filename;
      link.href = window.URL.createObjectURL(blob);
      link.dataset["downloadurl"] = [
        "text/json",
        link.download,
        link.href,
      ].join(":");

      const evt = new MouseEvent("click", {
        view: window,
        bubbles: true,
        cancelable: true,
      });

      link.dispatchEvent(evt);
      link.remove();
    });

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
