import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Category } from "../models/category-model";
import { RoutePath } from "../enums/route-path";

interface Props {
  categories: Category[];
  children: any;
}

export function CategoryListView({ categories, children }: Props) {
  const renderCategories = (categories: Category[]) =>
    categories.map((category: Category, index: number) => (
      <Link to={`${RoutePath.CATEGORY}?categoryId=${category.id}`} key={index}>
        <div className={"item"}>{category.name}</div>
      </Link>
    ));

  return (
    <CategoryListViewElement>
      <div className={"container"}>
        <div className="item">{children}</div>
        {renderCategories(categories)}
      </div>
    </CategoryListViewElement>
  );
}

const CategoryListViewElement = styled.div`
  margin-top: 20px;

  .container {
    height: 100%;
    width: 95%;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin: 0 auto;
    justify-content: center;
  }

  .item {
    font-size: 18px;
    width: 150px;
    height: 120px;
    background: #00a699;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    color: #ffffffd6;
    font-weight: semi-bold;

    :hover {
      cursor: pointer;
      background: #00a699f2;
    }
  }
`;
