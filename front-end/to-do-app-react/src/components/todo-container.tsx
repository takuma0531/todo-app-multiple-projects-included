import React from "react";
import styled from "styled-components";
import { useItemOption } from "../hooks/useItemOption";
import { Todo } from "../models/todo-model";
import { ItemOptionView } from "./item-option-view";
import { TodoView } from "./todo-view";
import { useTodoList } from "../hooks/todo-context";
import { useOutsideClick } from "../hooks/useOutsideClick";

export interface Props {
  todo: Todo;
  index: number;
}

export function TodoContainer({ todo, index }: Props) {
  const { isVisible, setIsVisible, isEditing, setIsEditing } = useItemOption();
  const { updateContent, toggleIsCompleted, remove } = useTodoList();
  const ref = useOutsideClick(() => setIsVisible(false));

  return (
    <TodoContainerElement>
      <TodoView
        todo={todo}
        index={index}
        toggleIsItemOptionVisible={() => setIsVisible(!isVisible)}
        isEditing={isEditing}
        toggleIsCompleted={() => toggleIsCompleted(todo)}
        editContent={updateContent}
        reference={ref}
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
