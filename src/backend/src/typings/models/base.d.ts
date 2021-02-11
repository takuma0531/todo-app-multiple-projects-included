import { BaseCreateDto } from '../../typings/dtos/base';

export interface BaseModel<TCreateDto extends BaseCreateDto, TDocument> {
  new: (createDto: TCreateDto) => TDocument;
}
