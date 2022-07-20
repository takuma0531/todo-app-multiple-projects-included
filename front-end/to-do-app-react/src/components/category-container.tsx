import React from "react";
import { useTodoList } from "../hooks/useTodoList";
import { TodoListView } from "./todo-list-view";

export const CategoryContainer = () => {
  const { todos } = useTodoList();

  return <TodoListView todos={todos} />;
};
