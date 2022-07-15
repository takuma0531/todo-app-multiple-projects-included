import { useState, useEffect } from "react";
import { Category } from "../models/category-model";
import { CategoryService } from "../services/category-service";

export const useCategoryList = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const categoryItems = CategoryService.getAll();
    setCategories(categoryItems);
  }, []);

  return {
    categories,
  };
};
