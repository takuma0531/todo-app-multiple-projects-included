import { Todo } from "../models/todo-model";
import { localStorageUtil } from "../utils/local-storage";

let todoList: Todo[] = [];
const TODO_LIST = "TODO_LIST";

const getAll = () => {
  const todos = localStorageUtil.get(TODO_LIST);
  todoList = todos.map((todo: any) => new Todo(todo._props, todo._id));
  return todoList;
};

const findById = (id: string) => {
  const todos = localStorageUtil.get(TODO_LIST);
  const found = todos.find((todo: any) => todo._id === id);
  const todo = new Todo(found._props, found.id);
  return todo;
};

const findByCategoryId = (categoryId: string) => {
  const todos = localStorageUtil.get(TODO_LIST);
  const founds = todos.filter(
    (todo: any) => todo._props.categoryId === categoryId
  );
  todoList = founds.map((todo: any) => new Todo(todo._props, todo._id));
  return [...todoList].reverse();
};

const add = (todoItem: any) => {
  const todo = new Todo(todoItem);
  todoList.push(todo);
  localStorageUtil.set(TODO_LIST, todoList);
  return todo;
};

const update = (todoItem: Todo) => {
  const indexOfTodoToEdit = todoList.findIndex(
    (todo: Todo) => todo.id === todoItem.id
  );
  todoList[indexOfTodoToEdit] = todoItem;
  localStorageUtil.set(TODO_LIST, todoList);
  return todoList;
};

const remove = (todoItem: Todo) => {
  todoList = todoList.filter((todo: Todo) => todo.id !== todoItem.id);
  localStorageUtil.set(TODO_LIST, todoList);
  return todoList;
};

export const TodoService = Object.freeze({
  getAll,
  findById,
  findByCategoryId,
  add,
  update,
  remove,
});
