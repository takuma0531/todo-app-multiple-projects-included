import React, { useContext, useEffect } from "react";
import { CategoryListView } from "./category-list-view";
import { useModal } from "../hooks/modal-context";
import { useCategory } from "../hooks/category-context";
import { AddButtonView } from "./add-button-view";
import { ModalContentToAddItem } from "./modal-content-to-add-item";
import { ModalContainer } from "./modal-container";
import { CategoryService } from "../services/category-service";

export function CategoryListContainer() {
  const {
    categories,
    categoryName,
    setCategories,
    setCategoryName,
    addCategory,
  } = useCategory();
  const { isVisible, setIsVisible } = useModal();

  useEffect(() => {
    const categoryItems = CategoryService.getAll();
    setCategories(categoryItems);
  }, []);

  return (
    <div>
      <ModalContainer>
        <ModalContentToAddItem
          label={"Category Name"}
          value={categoryName}
          handleChange={(e: any) => setCategoryName(e.target.value)}
          handleSubmit={() => addCategory()}
          toggleIsVisible={() => setIsVisible(!isVisible)}
        />
      </ModalContainer>
      <CategoryListView categories={categories}>
        <AddButtonView
          text={"+ New Category"}
          startFunc={() => setIsVisible(!isVisible)}
        />
      </CategoryListView>
    </div>
  );
}
