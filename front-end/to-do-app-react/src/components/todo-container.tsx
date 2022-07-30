import React, { useContext } from "react";
import { useItemOption } from "../hooks/useItemOption";
import { Todo } from "../models/todo-model";
import { ItemOptionView } from "./item-option-view";
import { TodoView } from "./todo-view";
import { TodoService } from "../services/todo-service";
import { TodoListContext } from "../hooks/useTodoList";

export interface Props {
  todo: Todo;
  index: number;
}

export function TodoContainer({ todo, index }: Props) {
  const { isVisible, setIsVisible, isEditing, setIsEditing } = useItemOption();
  const { setTodos } = useContext(TodoListContext);

  const toggleIsCompleted = () => {
    todo.toggleIsCompleted();
    const updatedList = TodoService.update(todo);
    setTodos(() => updatedList);
  };

  const updateContent = (newName: string) => {
    todo.updateContent(newName);
    const updatedList = TodoService.update(todo);
    setTodos(() => updatedList);
  };

  const remove = () => {
    const list = TodoService.remove(todo);
    setTodos(() => list);
  };

  return (
    <div>
      <TodoView
        todo={todo}
        index={index}
        toggleIsItemOptionVisible={() => setIsVisible(!isVisible)}
        isEditing={isEditing}
        toggleIsCompleted={() => toggleIsCompleted()}
        editContent={updateContent}
      />
      <ItemOptionView
        isVisible={isVisible}
        toggleIsEditing={() => setIsEditing(!isEditing)}
        remove={() => remove()}
      />
    </div>
  );
}
