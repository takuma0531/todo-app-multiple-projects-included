import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Todo } from "../models/todo-model";
import { TodoService } from "../services/todo-service";

export const useTodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const categoryId = searchParams.get("categoryId");
    console.log(categoryId);
    if (!categoryId) return;
    const todoItems = TodoService.findByCategoryId(categoryId);
    setTodos(todoItems);
  }, []);

  return {
    todos,
  };
};
