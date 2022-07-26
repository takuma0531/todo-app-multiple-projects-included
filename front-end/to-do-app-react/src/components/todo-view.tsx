import React from "react";
import { Todo } from "../models/todo-model";
import { Props } from "./todo-container";

interface ViewProps extends Props {
  todo: Todo;
  index: number;
  toggleIsItemOptionVisible: any;
  isEditing: boolean;
  toggleIsCompleted: any;
  editContent: any;
}

export const TodoView = ({
  todo,
  index,
  toggleIsItemOptionVisible,
  isEditing,
  toggleIsCompleted,
  editContent,
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
