import React from "react";
import { useNavigate } from "react-router-dom";
import { useTodoList } from "../hooks/useTodoList";
import { TodoListView } from "./todo-list-view";
import { AddButtonView } from "./add-button-view";

export const CategoryContainer = () => {
  const { todos, openToAdd } = useTodoList();
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate(-1)}>Go back</button>
      <AddButtonView text={"+ New Todo"} startFunc={openToAdd} />
      <TodoListView todos={todos} />
    </div>
  );
};
