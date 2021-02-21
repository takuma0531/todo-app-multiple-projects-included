import { Document, Model } from 'mongoose';
import { IRepository } from './iRepository';

class Repository<TDocument extends Document> implements IRepository<TDocument> {
  protected readonly _model: Model<TDocument>;

  constructor(model: Model<TDocument>) {
    this._model = model;
  }

  public async addOne(document: TDocument): Promise<TDocument> {
    try {
      const createdDocument = await this._model.create(document);
      return createdDocument;
    } catch (error) {
      throw error;
    }
  }

  public async getAll(): Promise<Array<TDocument>> {
    try {
      const documents = await this._model.find();
      return documents;
    } catch (error) {
      throw error;
    }
  }

  public async getOneById(id: string): Promise<TDocument | null> {
    try {
      const document = await this._model.findById(id);
      return document;
    } catch (error) {
      throw error;
    }
  }

  public async removeOneById(id: string): Promise<void> {
    try {
      const doc = await this._model.findById(id)
      await doc?.remove();
    } catch (error) {
      throw error;
    }
  }

  public async updateOneById(id: string, data: any): Promise<any> {
    try {
      await this._model.findByIdAndUpdate(id, data);
    } catch (error) {
      throw error;
    }
  }
}

export default Repository;
