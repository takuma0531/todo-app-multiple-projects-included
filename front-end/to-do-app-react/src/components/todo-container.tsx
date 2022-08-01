import React, { useContext } from "react";
import { useItemOption } from "../hooks/useItemOption";
import { Todo } from "../models/todo-model";
import { ItemOptionView } from "./item-option-view";
import { TodoView } from "./todo-view";
import {
  TodoListContext,
  TodoListContextInterface,
} from "../hooks/todoContext";

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
    <div>
      <TodoView
        todo={todo}
        index={index}
        toggleIsItemOptionVisible={() => setIsVisible(!isVisible)}
        isEditing={isEditing}
        toggleIsCompleted={() => toggleIsCompleted(todo)}
        editContent={updateContent}
      />
      <ItemOptionView
        isVisible={isVisible}
        toggleIsEditing={() => setIsEditing(!isEditing)}
        remove={() => remove(todo)}
      />
    </div>
  );
}
