import React from "react";
import styled from "styled-components";
import { Todo } from "../models/todo-model";
import { TodoContainer } from "./todo-container";

interface Props {
  todos: Todo[];
  children: any;
}

export const TodoListView = ({ todos, children }: Props) => {
  const renderTodos = (todos: Todo[]) =>
    todos.map((todo: Todo, index: number) => {
      return <TodoContainer todo={todo} index={index} key={index} />;
    });

  return (
    <TodoListViewElement>
      {children}
      <ul>{renderTodos(todos)}</ul>
    </TodoListViewElement>
  );
};

const TodoListViewElement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;

  button.go-back-button {
    margin: 5px auto 5px 5px;
    border: none;
    background: none;
    font-size: 15px;
    color: #767676;

    :hover {
      cursor: pointer;
      opacity: 80%;
    }
  }

  button:nth-child(2) {
    display: inline-block;
    margin: 0 auto;

    :hover {
      opacity: 80%;
    }
  }

  ul {
    width: 100%;
    padding: 0;
  }
`;
