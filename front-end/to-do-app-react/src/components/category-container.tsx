import React from "react";
import { useTodoList } from "../hooks/useTodoList";
import { TodoListView } from "./todo-list-view";
import { AddButtonView } from "./add-button-view";

export const CategoryContainer = () => {
  const { todos, openToAdd } = useTodoList();

  return (
    <div>
      <AddButtonView text={"+ New Todo"} startFunc={openToAdd} />
      <TodoListView todos={todos} />
    </div>
  );
};
