export interface BaseModelProps {
  createdAt?: Date;
  updatedAt?: Date;
}

export abstract class BaseModel<TProps extends BaseModelProps> {
  readonly _id: string;
  protected _props: TProps;

  constructor(props: TProps, id?: string) {
    const isNew = id === undefined;
    this._id = isNew ? window.crypto.randomUUID() : id;
    this._props = {
      ...props,
      createdAt: isNew ? new Date() : props.createdAt,
      updatedAt: isNew ? new Date() : props.updatedAt,
    };
  }

  get id() {
    return this._id;
  }

  get createdAt() {
    return this._props.createdAt;
  }

  get updatedAt() {
    return this._props.updatedAt;
  }

  protected handleUpdate() {
    this._props.updatedAt = new Date();
  }
}
