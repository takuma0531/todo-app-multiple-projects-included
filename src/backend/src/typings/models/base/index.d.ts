import { Document } from 'mongoose';
import { BaseCreateDto, BaseReadDto } from '../../dtos';

interface IHasCustomMethod<TReadDto extends BaseReadDto> {
  /**
   * @summary
   * mapper method to convert TDocument into TReadDto
   */
  toReadDto: () => TReadDto
}

interface IHasCustomStaticMethod<TDocument extends Document, TCreateDto extends BaseCreateDto> {
  /**
   * @summary
   * mapper method to convert TCreateDto into TDocument
   */
  toDocument: (createDto: TCreateDto) => TDocument;
}

export { IHasCustomMethod, IHasCustomStaticMethod };
