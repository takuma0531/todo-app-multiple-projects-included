import { Document, Model } from 'mongoose';
import { IRepository } from './iRepository';

class Repository<TDocument extends Document> implements IRepository<TDocument> {
  protected readonly _model: Model<TDocument>;

  constructor(model: Model<TDocument>) {
    this._model = model;
  }

  async addOne(document: TDocument): Promise<TDocument> {
    try {
      const createdDocument = await this._model.create(document);
      return createdDocument;
    } catch (error) {
      throw error;
    }
  }

  async getAll(): Promise<Array<TDocument>> {
    try {
      const documents = await this._model.find();
      return documents;
    } catch (error) {
      throw error;
    }
  }

  async getOneById(id: string): Promise<TDocument> {
    try {
      const document = await this._model.findById(id);
      // TODO: add different validation
      if (!document) throw new Error('Not found by id');
      return document;
    } catch (error) {
      throw error;
    }
  }

  async removeOne(id: string): Promise<void> {
    try {
      await this._model.findByIdAndRemove(id);
    } catch (error) {
      throw error;
    }
  }
}

export default Repository;
