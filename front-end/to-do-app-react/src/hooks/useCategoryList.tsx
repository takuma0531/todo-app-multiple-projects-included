import { useState, useEffect } from "react";
import { Category } from "../models/category-model";
import { CategoryService } from "../services/category-service";

export const useCategoryList = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  const addCategory = (e: any) => {
    const name = e.target.value;
    if (!name) return;
    const categoryItem = CategoryService.add({
      name,
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

  const openToAdd = () => {
    // handle opening a modal to add category
    console.log("open");
  };

  useEffect(() => {
    const categoryItems = CategoryService.getAll();
    setCategories(categoryItems);
  }, []);

  return {
    categories,
    addCategory,
    toggleIsSelected,
    toggleIsDefault,
    updateName,
    remove,
    openToAdd,
  };
};
