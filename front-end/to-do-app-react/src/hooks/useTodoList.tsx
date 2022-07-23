import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Todo } from "../models/todo-model";
import { TodoService } from "../services/todo-service";

export const useTodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const location = useLocation();
  const [todoContent, setTodoContent] = useState<string>("");
  const [categoryId, setCategoryId] = useState<string>("");

  const addTodo = () => {
    if (!todoContent) return;
    if (!categoryId) throw new Error("CategoryId is not known");
    const todoItem = TodoService.add({
      todoContent,
      isCompleted: false,
      categoryId,
    });
    setTodos((old: Todo[]) => [...old, todoItem]);
  };

  const toggleIsCompleted = (todoItem: Todo) => {
    todoItem.toggleIsCompleted();
    TodoService.update(todoItem);
  };

  const updateContent = (newName: string, todoItem: Todo) => {
    todoItem.updateContent(newName);
    TodoService.update(todoItem);
  };

  const remove = (todoItem: Todo) => {
    TodoService.remove(todoItem);
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    setCategoryId(searchParams.get("categoryId") || "");
    if (!categoryId) return;
    const todoItems = TodoService.findByCategoryId(categoryId);
    setTodos(todoItems);
  }, []);

  return {
    todos,
    todoContent,
    setTodoContent,
    addTodo,
    toggleIsCompleted,
    updateContent,
    remove,
  };
};
