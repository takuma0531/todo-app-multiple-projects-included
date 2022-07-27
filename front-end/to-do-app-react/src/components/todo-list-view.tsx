import React from "react";
import styled from "styled-components";
import { Todo } from "../models/todo-model";
import { TodoContainer } from "./todo-container";

interface Props {
  todos: Todo[];
}

export const TodoListView = ({ todos }: Props) => {
  const renderTodos = (todos: Todo[]) =>
    todos.map((todo: Todo, index: number) => {
      return <TodoContainer todo={todo} index={index} key={index} />;
    });

  return (
    <TodoListViewElement>
      <ul>{renderTodos(todos)}</ul>
    </TodoListViewElement>
  );
};

const TodoListViewElement = styled.div``;
