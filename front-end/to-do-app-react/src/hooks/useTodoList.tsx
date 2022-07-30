import React, { useState } from "react";
import { Todo } from "../models/todo-model";

interface todoListContextInterface {
  todos: Todo[];
  setTodos: any;
  todoContent: string;
  setTodoContent: any;
  categoryId: string;
  setCategoryId: any;
}

interface Props {
  children: any;
}

export const TodoListContext = React.createContext(
  {} as todoListContextInterface
);

export const TodoListProvider = ({ children }: Props) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todoContent, setTodoContent] = useState<string>("");
  const [categoryId, setCategoryId] = useState<string>("");

  return (
    <TodoListContext.Provider
      value={{
        todos,
        setTodos,
        todoContent,
        setTodoContent,
        categoryId,
        setCategoryId,
      }}
    >
      {children}
    </TodoListContext.Provider>
  );
};

export const useTodoList = () => React.useContext(TodoListContext);
