import React from "react";
import { CategoryListView } from "./category-list-view";
import { useCategoryList } from "../hooks/useCategoryList";
import { AddButtonView } from "./add-button-view";

export function CategoryListContainer() {
  const { categories } = useCategoryList();

  const openToAdd = () => {
    // handle opening a modal to add category
    console.log("open");
  };

  return (
    <div>
      <AddButtonView text={"+ New Category"} startFunc={openToAdd} />
      <CategoryListView categories={categories} />
    </div>
  );
}
