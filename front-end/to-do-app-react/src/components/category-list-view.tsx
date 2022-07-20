import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Category } from "../models/category-model";
import { RoutePath } from "../enums/route-path";

interface Props {
  categories: Category[];
}

export function CategoryListView({ categories }: Props) {
  const renderCategories = (categories: Category[]) =>
    categories.map((category: Category, index: number) => (
      <li key={index}>
        <Link to={`${RoutePath.CATEGORY}?categoryId=${category.id}`}>
          {category.name}
        </Link>
      </li>
    ));

  return (
    <CategoryListViewElement>
      <ul>{renderCategories(categories)}</ul>
    </CategoryListViewElement>
  );
}

const CategoryListViewElement = styled.div``;
