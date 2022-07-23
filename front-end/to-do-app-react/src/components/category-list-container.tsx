import React from "react";
import { CategoryListView } from "./category-list-view";
import { useCategoryList } from "../hooks/useCategoryList";
import { useModal } from "../hooks/useModal";
import { AddButtonView } from "./add-button-view";
import { ModalToAddItem } from "./modal-to-add-item";

export function CategoryListContainer() {
  const { categories, categoryName, setCategoryName, addCategory } =
    useCategoryList();
  const { isVisible, setIsVisible } = useModal();

  return (
    <div>
      <ModalToAddItem
        label={"Category Name"}
        value={categoryName}
        handleChange={(e: any) => setCategoryName(e.target.value)}
        handleSubmit={() => addCategory()}
        isVisible={isVisible}
      />
      <AddButtonView
        text={"+ New Category"}
        startFunc={() => setIsVisible(!isVisible)}
      />
      <CategoryListView categories={categories} />
    </div>
  );
}
