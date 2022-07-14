const get = (key: string) => {
  return JSON.parse(localStorage.getItem(key) || "");
};

const set = (key: string, value: any) => {
  localStorage.setItem(key, value);
};

const remove = (key: string) => {
  localStorage.removeItem(key);
};

export const localStorageUtil = Object.freeze({ get, set, remove });
