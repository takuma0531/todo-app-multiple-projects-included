import { BaseModel, BaseModelProps } from "./base-model";
import { validationUtil } from "../utils/validation";

interface Props extends BaseModelProps {
  content: string;
  isCompleted: boolean;
  categoryId: string;
}

export class Todo extends BaseModel<Props> {
  constructor(props: Props, id?: string) {
    super(props, id);

    this.validateStringProperty(props.content);
    this.validateStringProperty(props.categoryId);
  }

  get content() {
    return this._props.content;
  }

  get isCompleted() {
    return this._props.isCompleted;
  }

  get categoryId() {
    return this._props.categoryId;
  }

  private validateStringProperty(property: string) {
    if (validationUtil.isEmpty(property)) throw new Error("Invalid Property");
  }

  public updateContent(content: string) {
    this.validateStringProperty(content);
    this._props.content = content;
    this.handleUpdate();
  }

  public toggleIsCompleted() {
    this._props.isCompleted = !this._props.isCompleted;
    this.handleUpdate();
  }
}
