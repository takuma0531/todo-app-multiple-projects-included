import { Document } from 'mongoose';

interface IHasCustomStaticMethod<TDocument extends Document, TCreateDto> {
  /**
   * @summary
   * mapper method for createDto
   */
  toDocument: (createDto: TCreateDto) => TDocument;
}

export { IHasCustomStaticMethod };
