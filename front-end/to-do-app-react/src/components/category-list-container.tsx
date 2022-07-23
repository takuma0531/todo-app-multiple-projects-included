import React from "react";
import { CategoryListView } from "./category-list-view";
import { useCategoryList } from "../hooks/useCategoryList";
import { AddButtonView } from "./add-button-view";

export function CategoryListContainer() {
  const { categories, openToAdd } = useCategoryList();

  return (
    <div>
      <AddButtonView text={"+ New Category"} startFunc={openToAdd} />
      <CategoryListView categories={categories} />
    </div>
  );
}
