import { validationUtil } from "@/utils/validation";

const get = (key: string) => {
  if (validationUtil.isEmpty(key)) throw new Error("Invalid key");
  const item = localStorage.getItem(key);
  if (!item) throw new Error("Something wrong");
  return JSON.parse(item);
};

const set = (key: string, value: any) => {
  if (validationUtil.isEmpty(key)) throw new Error("Invalid key");

  if (validationUtil.isObject(value))
    localStorage.setItem(key, JSON.stringify(value));
  else localStorage.setItem(key, value);
};

const remove = (key: string) => {
  if (validationUtil.isEmpty(key)) throw new Error("Invalid key");
  localStorage.removeItem(key);
};

export const localStorageUtil = Object.freeze({ get, set, remove });
