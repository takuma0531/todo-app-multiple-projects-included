import React from "react";
import { CategoryListView } from "./category-list-view";
import { useCategoryList } from "../hooks/useCategoryList";

export function CategoryListContainer() {
  const { categories } = useCategoryList();
  return <CategoryListView categories={categories} />;
}
