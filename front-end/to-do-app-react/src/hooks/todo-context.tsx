import React, { useState } from "react";
import { Todo } from "../models/todo-model";
import { TodoService } from "../services/todo-service";

export interface TodoListContextInterface {
  todos: Todo[];
  todoContent: string;
  categoryId: string;
  setTodos: any;
  setTodoContent: any;
  setCategoryId: any;
  addTodo: any;
  toggleIsCompleted: any;
  updateContent: any;
  remove: any;
}

interface Props {
  children: any;
}

export const TodoListContext =
  React.createContext<TodoListContextInterface | null>(null);

export const TodoListProvider = ({ children }: Props) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todoContent, setTodoContent] = useState<string>("");
  const [categoryId, setCategoryId] = useState<string>("");

  const addTodo = () => {
    if (!todoContent) return;
    if (!categoryId) throw new Error("CategoryId is not known");
    const created = TodoService.add({
      content: todoContent,
      isCompleted: false,
      categoryId,
    });
    setTodos((old: Todo[]) => [created, ...old]);
  };

  const toggleIsCompleted = (todoItem: Todo) => {
    todoItem.toggleIsCompleted();
    TodoService.update(todoItem);
    setTodos((old: Todo[]) => [...old]);
  };

  const updateContent = (newName: string, todoItem: Todo) => {
    todoItem.updateContent(newName);
    TodoService.update(todoItem);
    setTodos((old: Todo[]) => [...old]);
  };

  const remove = (todoItem: Todo) => {
    const list = TodoService.remove(todoItem);
    setTodos(list);
  };

  return (
    <TodoListContext.Provider
      value={{
        todos,
        todoContent,
        categoryId,
        setTodos,
        setTodoContent,
        setCategoryId,
        addTodo,
        toggleIsCompleted,
        updateContent,
        remove,
      }}
    >
      {children}
    </TodoListContext.Provider>
  );
};

export const useTodoList = () =>
  React.useContext(TodoListContext) as TodoListContextInterface;
