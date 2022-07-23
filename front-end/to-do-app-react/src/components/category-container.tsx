import React from "react";
import { useNavigate } from "react-router-dom";
import { useTodoList } from "../hooks/useTodoList";
import { useModal } from "../hooks/useModal";
import { TodoListView } from "./todo-list-view";
import { AddButtonView } from "./add-button-view";

export const CategoryContainer = () => {
  const { todos } = useTodoList();
  const navigate = useNavigate();
  const { isVisible, setIsVisible } = useModal();

  return (
    <div>
      <button onClick={() => navigate(-1)}>Go back</button>
      <AddButtonView text={"+ New Todo"} startFunc={setIsVisible(!isVisible)} />
      <TodoListView todos={todos} />
    </div>
  );
};
