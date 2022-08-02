import React, { useState, useEffect } from "react";
import { Category } from "../models/category-model";
import { CategoryService } from "../services/category-service";

export interface CategoryContextInterface {
  categories: Category[];
  categoryName: string;
  setCategories: any;
  setCategoryName: any;
  addCategory: any;
  toggleIsSelected: any;
  toggleIsDefault: any;
  updateName: any;
  remove: any;
}

interface Props {
  children: any;
}

export const CategoryContext =
  React.createContext<CategoryContextInterface | null>(null);

export const CategoryProvider = ({ children }: Props) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [categoryName, setCategoryName] = useState<string>("");

  const addCategory = () => {
    if (!categoryName) return;
    const categoryItem = CategoryService.add({
      name: categoryName,
      isSelected: false,
      isDefault: false,
    });
    setCategories((old: Category[]) => [categoryItem, ...old]);
    setCategoryName("");
  };

  const toggleIsSelected = (categoryItem: Category) => {
    categoryItem.toggleIsSelected();
    CategoryService.update(categoryItem);
  };

  const toggleIsDefault = (categoryItem: Category) => {
    categoryItem.toggleIsDefault();
    CategoryService.update(categoryItem);
  };

  const updateName = (newName: string, categoryItem: Category) => {
    categoryItem.updateName(newName);
    CategoryService.update(categoryItem);
  };

  const remove = (categoryItem: Category) => {
    CategoryService.remove(categoryItem);
  };

  return (
    <CategoryContext.Provider
      value={{
        categories,
        categoryName,
        setCategories,
        setCategoryName,
        addCategory,
        toggleIsSelected,
        toggleIsDefault,
        updateName,
        remove,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = () =>
  React.useContext(CategoryContext) as CategoryContextInterface;
