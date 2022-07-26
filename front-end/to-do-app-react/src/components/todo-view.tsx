import React from "react";
import { Todo } from "../models/todo-model";
import { Props } from "./todo-container";

interface ViewProps extends Props {
  todo: Todo;
  index: number;
  isItemOptionVisible: boolean;
  toggleIsItemOptionVisible: any;
  isEditing: boolean;
  toggleIsEditing: any;
}

export const TodoView = ({
  todo,
  index,
  isItemOptionVisible,
  toggleIsItemOptionVisible,
  isEditing,
  toggleIsEditing,
}: ViewProps) => {
  return (
    <li key={index}>
      {todo.content}
      <span>{/* createdAt */}</span>
      {/* Temporary TODO: */}
      <span onClick={() => toggleIsItemOptionVisible()}>...</span>
    </li>
  );
};
