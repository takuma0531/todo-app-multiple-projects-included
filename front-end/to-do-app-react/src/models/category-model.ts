import { BaseModel, BaseModelProps } from "./base-model";
import { validationUtil } from "../utils/validation";

interface Props extends BaseModelProps {
  name: string;
  isSelected: boolean;
  isDefault: boolean;
}

export class Category extends BaseModel<Props> {
  public constructor(props: Props, id?: string) {
    super({ ...props }, id);

    this.validateName(props.name);
  }

  get name() {
    return this._props.name;
  }

  get isSelected() {
    return this._props.isSelected;
  }

  get isDefault() {
    return this._props.isDefault;
  }

  private validateName(name: string) {
    if (validationUtil.isEmpty(name)) throw new Error("Invalid name");
  }

  public updateName(name: string) {
    this.validateName(name);
    this._props.name = name;
    this.handleUpdate();
  }

  public toggleIsSelected() {
    this._props.isSelected = !this._props.isSelected;
  }

  public toggleIsDefault() {
    this._props.isDefault = !this._props.isDefault;
  }
}
