import { Document } from 'mongoose';

interface IRepository<TDocument extends Document> {
  addOne(document: TDocument): Promise<TDocument>;

  getAll(): Promise<Array<TDocument>>;

  getOneById(id: string): Promise<TDocument | null>;

  removeOneById(id: string): Promise<void>;

  updateOneById(id: string, data: any): Promise<any>;
}

export { IRepository };
