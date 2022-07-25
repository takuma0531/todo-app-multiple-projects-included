import React from "react";
import styled from "styled-components";
import { Todo } from "../models/todo-model";

interface Props {
  todos: Todo[];
}

export const TodoListView = ({ todos }: Props) => {
  const renderTodos = (todos: Todo[]) =>
    todos.map((todo: Todo, index: number) => {
      // console.log(todo.createdAt);

      return (
        <li key={index}>
          {todo.content}
          <span>{/* createdAt */}</span>
        </li>
      );
    });

  return (
    <TodoListViewElement>
      <ul>{renderTodos(todos)}</ul>
    </TodoListViewElement>
  );
};

const TodoListViewElement = styled.div``;
