import React, { useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useModal } from "../hooks/modal-context";
import { TodoListView } from "./todo-list-view";
import { AddButtonView } from "./add-button-view";
import { ModalContentToAddItem } from "./modal-content-to-add-item";
import { useTodoList } from "../hooks/todo-context";
import { TodoService } from "../services/todo-service";
import { ModalContainer } from "./modal-container";

export const CategoryContainer = () => {
  const {
    todos,
    todoContent,
    categoryId,
    setTodos,
    setTodoContent,
    setCategoryId,
    addTodo,
  } = useTodoList();
  const location = useLocation();
  const navigate = useNavigate();
  const { isVisible, setIsVisible } = useModal();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    setCategoryId(searchParams.get("categoryId") || "");
    if (!categoryId) return;
    const todoItems = TodoService.findByCategoryId(categoryId);
    setTodos(todoItems);
  }, [categoryId]);

  return (
    <div>
      <ModalContainer>
        <ModalContentToAddItem
          label={"Todo Content"}
          value={todoContent}
          handleChange={(e: any) => setTodoContent(e.target.value)}
          handleSubmit={() => addTodo()}
          isVisible={isVisible}
        />
      </ModalContainer>
      <button onClick={() => navigate(-1)}>Go back</button>
      <AddButtonView
        text={"+ New Todo"}
        startFunc={() => setIsVisible(!isVisible)}
      />
      <TodoListView todos={todos} />
    </div>
  );
};
