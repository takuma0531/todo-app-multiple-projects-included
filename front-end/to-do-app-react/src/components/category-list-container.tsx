import React, { useContext } from "react";
import { CategoryListView } from "./category-list-view";
import { useCategoryList } from "../hooks/useCategoryList";
import { ModalContext, ModalContextInterface } from "../hooks/modalContext";
import { AddButtonView } from "./add-button-view";
import { ModalContentToAddItem } from "./modal-content-to-add-item";
import { ModalContainer } from "./modal-container";

export function CategoryListContainer() {
  const { categories, categoryName, setCategoryName, addCategory } =
    useCategoryList();
  const { isVisible, setIsVisible } = useContext(
    ModalContext
  ) as ModalContextInterface;

  return (
    <div>
      <ModalContainer>
        <ModalContentToAddItem
          label={"Category Name"}
          value={categoryName}
          handleChange={(e: any) => setCategoryName(e.target.value)}
          handleSubmit={() => addCategory()}
          isVisible={isVisible}
        />
      </ModalContainer>
      <AddButtonView
        text={"+ New Category"}
        startFunc={() => setIsVisible(!isVisible)}
      />
      <CategoryListView categories={categories} />
    </div>
  );
}
