import React, { useContext } from "react";
import styled from "styled-components";
import { useItemOption } from "../hooks/useItemOption";
import { Todo } from "../models/todo-model";
import { ItemOptionView } from "./item-option-view";
import { TodoView } from "./todo-view";
import {
  TodoListContext,
  TodoListContextInterface,
} from "../hooks/todo-context";

export interface Props {
  todo: Todo;
  index: number;
}

export function TodoContainer({ todo, index }: Props) {
  const { isVisible, setIsVisible, isEditing, setIsEditing } = useItemOption();
  const { updateContent, toggleIsCompleted, remove } = useContext(
    TodoListContext
  ) as TodoListContextInterface;

  return (
    <TodoContainerElement>
      <TodoView
        todo={todo}
        index={index}
        toggleIsItemOptionVisible={() => setIsVisible(!isVisible)}
        isEditing={isEditing}
        toggleIsCompleted={() => toggleIsCompleted(todo)}
        editContent={updateContent}
      >
        <ItemOptionView
          isVisible={isVisible}
          toggleIsEditing={() => setIsEditing(!isEditing)}
          remove={() => remove(todo)}
        />
      </TodoView>
    </TodoContainerElement>
  );
}

const TodoContainerElement = styled.div`
  position: relative;
`;
