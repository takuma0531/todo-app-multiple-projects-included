const isString = (value: any) => typeof value === "string";

const isObject = (value: any) => typeof value === "object";

const isEmpty = (value: any) => isString(value) && value.trim().length === 0;

export const validationUtil = Object.freeze({ isString, isObject, isEmpty });
