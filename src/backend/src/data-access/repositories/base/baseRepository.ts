import { Model, Document } from 'mongoose';

class BaseRepository<TDocument extends Document> {
  protected readonly model: Model<TDocument>;

  constructor(model: Model<TDocument>) {
    this.model = model;
  }

  public createOne() {}

  public getAll() {}

  public getOneById() {}

  public deleteOne() {}

  public updateOne() {}
}

export default BaseRepository;
