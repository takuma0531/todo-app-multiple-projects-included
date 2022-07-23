import React from "react";
import { useNavigate } from "react-router-dom";
import { useTodoList } from "../hooks/useTodoList";
import { useModal } from "../hooks/useModal";
import { TodoListView } from "./todo-list-view";
import { AddButtonView } from "./add-button-view";
import { ModalToAddItem } from "./modal-to-add-item";

export const CategoryContainer = () => {
  const { todos, todoContent, setTodoContent, addTodo } = useTodoList();
  const navigate = useNavigate();
  const { isVisible, setIsVisible } = useModal();

  return (
    <div>
      <ModalToAddItem
        label={"Todo Content"}
        value={todoContent}
        handleChange={(e: any) => setTodoContent(e.target.value)}
        handleSubmit={() => addTodo()}
        isVisible={isVisible}
      />
      <button onClick={() => navigate(-1)}>Go back</button>
      <AddButtonView
        text={"+ New Todo"}
        startFunc={() => setIsVisible(!isVisible)}
      />
      <TodoListView todos={todos} />
    </div>
  );
};
