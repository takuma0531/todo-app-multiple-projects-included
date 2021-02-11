import { BaseCreateDto } from '../../typings/dtos/base';

export interface BaseModel<TCreateDto extends BaseCreateDto, TDocument> {
  /**
   * Object creation static method for strict typing because of 
   * a constructor of the mongoose model that has no typing check.
   */
  new: (createDto: TCreateDto) => TDocument;
}
