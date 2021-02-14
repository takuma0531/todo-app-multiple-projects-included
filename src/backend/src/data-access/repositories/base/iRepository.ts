import { Document } from "mongoose";

interface IRepository<TDocument extends Document> {
  addOne(document: TDocument): Promise<TDocument>;

  getAll(): Promise<Array<TDocument>>;

  getOneById(id: string): Promise<TDocument>;

  removeOne(id: string): Promise<void>;
}

export { IRepository };
