import React from "react";
import styled from "styled-components";
import { Todo } from "../models/todo-model";
import { Props } from "./todo-container";

interface ViewProps extends Props {
  todo: Todo;
  index: number;
  toggleIsItemOptionVisible: any;
  isEditing: boolean;
  toggleIsCompleted: any;
  editContent: any;
  reference: any;
  children: any;
}

export const TodoView = ({
  todo,
  index,
  toggleIsItemOptionVisible,
  isEditing,
  toggleIsCompleted,
  editContent,
  children,
  reference,
}: ViewProps) => {
  return (
    <TodoViewElement key={index}>
      <IsCompletedElement
        onClick={() => toggleIsCompleted()}
        isCompleted={todo.isCompleted}
      />
      <input
        className="content"
        value={todo.content}
        onChange={(e) => editContent(e.target.value)}
        disabled={!isEditing}
      />
      <span className={"updated-time"}>
        {todo.updatedAt?.toString().split("T")[0].replace(/-/g, "/")}
      </span>
      <div className="item-option-wrapper">
        <div
          className={"dots"}
          ref={reference}
          onClick={() => toggleIsItemOptionVisible()}
        >
          <span className={"dot"} />
          <span className={"dot"} />
          <span className={"dot"} />
        </div>
        {children}
      </div>
    </TodoViewElement>
  );
};

const TodoViewElement = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  gap: 10px;
  font-size: 18px;
  width: 100%;

  span.updated-time {
    font-size: 16px;
    color: #767676;
  }

  .item-option-wrapper {
    position: relative;
  }

  .dots {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3px;

    :hover {
      cursor: pointer;
      opacity: 80%;
    }

    .dot {
      margin-left: 2px;
      height: 5px;
      width: 5px;
      background-color: #bbb;
      border-radius: 50%;
      display: inline-block;
    }
  }
`;

const IsCompletedElement = styled.div<{ isCompleted: boolean }>`
  height: 20px;
  width: 20px;
  background-color: ${({ isCompleted }) => (isCompleted ? "#FF5A5F" : "none")};
  border-radius: 50%;
  display: inline-block;
  border: 1px solid #bbb;

  :hover {
    cursor: pointer;
  }
`;
