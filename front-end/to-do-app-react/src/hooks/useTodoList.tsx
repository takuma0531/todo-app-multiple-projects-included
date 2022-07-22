import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Todo } from "../models/todo-model";
import { TodoService } from "../services/todo-service";

export const useTodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const location = useLocation();

  const addTodo = (e: any, categoryId: string) => {
    const content = e.target.value;
    if (!content) return;
    const todoItem = TodoService.add({
      content,
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
    const categoryId = searchParams.get("categoryId");
    console.log(categoryId);
    if (!categoryId) return;
    const todoItems = TodoService.findByCategoryId(categoryId);
    setTodos(todoItems);
  }, []);

  return {
    todos,
    addTodo,
    toggleIsCompleted,
    updateContent,
    remove,
  };
};
