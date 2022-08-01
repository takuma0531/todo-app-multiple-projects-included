import { Category } from "../models/category-model";
import { localStorageUtil } from "../utils/local-storage";

let categoryList: Category[] = [];
const CATEGORY_LIST = "CATEGORY_LIST";

const getAll = () => {
  const categories = localStorageUtil.get(CATEGORY_LIST);
  categoryList = categories.map(
    (category: any) => new Category(category._props, category._id)
  );
  return [...categoryList].reverse();
};

const findById = (id: string) => {
  const categories = localStorageUtil.get(CATEGORY_LIST);
  const found = categories.find((category: any) => category._id === id);
  const category = new Category(found._props, found.id);
  return category;
};

const add = (categoryItem: any) => {
  const category = new Category(categoryItem);
  categoryList.push(category);
  localStorageUtil.set(CATEGORY_LIST, categoryList);
  return category;
};

const update = (categoryItem: any) => {
  const indexOfCategoryToEdit = categoryList.findIndex(
    (category: any) => category.id === categoryItem.id
  );
  categoryList[indexOfCategoryToEdit] = categoryItem;
  localStorageUtil.set(CATEGORY_LIST, categoryList);
  return categoryList[indexOfCategoryToEdit];
};

const remove = (categoryItem: any) => {
  if (categoryItem.isDefault)
    throw new Error("Default Category cannot be removed");
  categoryList = categoryList.filter(
    (category: any) => category.id !== categoryItem.id
  );
  localStorageUtil.set(CATEGORY_LIST, categoryList);
};

export const CategoryService = Object.freeze({
  getAll,
  findById,
  add,
  update,
  remove,
});
