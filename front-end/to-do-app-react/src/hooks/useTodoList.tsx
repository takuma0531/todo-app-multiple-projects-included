import { useState, useEffect } from "react";
import { Todo } from "../models/todo-model";
import { TodoService } from "../services/todo-service";

export const useTodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    // get id from query;
    // const todoItems = TodoService.findByCategoryId(categoryId);
  });

  return {
    todos,
  };
};
