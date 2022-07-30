import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useModal } from "../hooks/useModal";
import { TodoListView } from "./todo-list-view";
import { AddButtonView } from "./add-button-view";
import { ModalToAddItem } from "./modal-to-add-item";
import { TodoListProvider, TodoListContext } from "../hooks/useTodoList";
import { TodoService } from "../services/todo-service";
import { Todo } from "../models/todo-model";

export const CategoryContainer = () => {
  const {
    todos,
    setTodos,
    todoContent,
    setTodoContent,
    categoryId,
    setCategoryId,
  } = useContext(TodoListContext);
  const location = useLocation();
  const navigate = useNavigate();
  const { isVisible, setIsVisible } = useModal();

  const addTodo = () => {
    if (!todoContent) return;
    if (!categoryId) throw new Error("CategoryId is not known");
    const created = TodoService.add({
      content: todoContent,
      isCompleted: false,
      categoryId,
    });
    setTodos((old: Todo[]) => [...old, created]);
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    setCategoryId(searchParams.get("categoryId") || "");
    if (!categoryId) return;
    const todoItems = TodoService.findByCategoryId(categoryId);
    setTodos(todoItems);
  }, [categoryId]);

  return (
    <TodoListProvider>
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
    </TodoListProvider>
  );
};
