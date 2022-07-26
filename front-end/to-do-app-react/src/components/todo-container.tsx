import React from "react";
import { useItemOption } from "../hooks/useItemOption";
import { useTodoList } from "../hooks/useTodoList";
import { Todo } from "../models/todo-model";
import { TodoView } from "./todo-view";

export interface Props {
  todo: Todo;
  index: number;
}

export function TodoContainer({ todo, index }: Props) {
  const { isVisible, setIsVisible, isEditing, setIsEditing } = useItemOption();
  const { updateContent, toggleIsCompleted, remove } = useTodoList();

  return (
    <TodoView
      todo={todo}
      index={index}
      isItemOptionVisible={isVisible}
      toggleIsItemOptionVisible={() => setIsVisible(!isVisible)}
      isEditing={isEditing}
      toggleIsEditing={() => setIsEditing(!isEditing)}
    />
  );
}
