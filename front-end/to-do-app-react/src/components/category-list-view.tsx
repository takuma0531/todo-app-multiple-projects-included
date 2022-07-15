import React from "react";
import styled from "styled-components";
import { Category } from "../models/category-model";

interface Props {
  categories: Category[];
}

export function CategoryListView({ categories }: Props) {
  const renderCategories = (categories: Category[]) =>
    categories.map((category: Category, index: number) => (
      <li key={index}>{category.name}</li>
    ));

  return (
    <CategoryListViewElement>
      <ul>{renderCategories(categories)}</ul>
    </CategoryListViewElement>
  );
}

const CategoryListViewElement = styled.div``;
