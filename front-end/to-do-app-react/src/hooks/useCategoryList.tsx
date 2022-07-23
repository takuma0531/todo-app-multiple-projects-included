import { useState, useEffect } from "react";
import { Category } from "../models/category-model";
import { CategoryService } from "../services/category-service";

export const useCategoryList = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [categoryName, setCategoryName] = useState<string>("");

  const addCategory = () => {
    if (!categoryName) return;
    const categoryItem = CategoryService.add({
      categoryName,
      isSelected: false,
      isDefault: false,
    });
    setCategories((old: Category[]) => [...old, categoryItem]);
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

  useEffect(() => {
    const categoryItems = CategoryService.getAll();
    setCategories(categoryItems);
  }, []);

  return {
    categories,
    categoryName,
    setCategoryName,
    addCategory,
    toggleIsSelected,
    toggleIsDefault,
    updateName,
    remove,
  };
};
