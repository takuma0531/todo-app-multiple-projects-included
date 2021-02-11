import { UserDocument } from '../user/userSchema';

class Todo {
  public title: string;
  public description: string;
  public completed: boolean;
  public items: Array<item | string>;
  public owner: string | UserDocument;
  public contributors: Array<string | UserDocument>;

  constructor(newTodo: NewTodo) {
      this.title = newTodo.title;
      this.description = newTodo.description;
      this.items = newTodo.items;
      this.owner = newTodo.owner;
      this.contributors = newTodo.contributors;
  }
}

interface item {
  name: string;
  completed: boolean;
}

interface NewTodo {
    title: string;
    description: string;
    items: Array<item | string>;
    owner: string | UserDocument;
    contributors: Array<string | UserDocument>;
}

export default Todo;
