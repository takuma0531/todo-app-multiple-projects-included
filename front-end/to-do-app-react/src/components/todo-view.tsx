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
      <span onClick={() => toggleIsCompleted()}>
        {todo.isCompleted ? "Completed" : "Ongoing"}
      </span>
      <input
        className="content"
        value={todo.content}
        onChange={(e) => editContent(e.target.value, todo)}
        disabled={!isEditing}
      />
      <span>{/* createdAt */}</span>
      {/* Temporary TODO: */}
      <span onClick={() => toggleIsItemOptionVisible()}>...</span>
    </li>
  );
};
