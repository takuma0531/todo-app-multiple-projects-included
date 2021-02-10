import * as express from 'express';

import HttpStatusCode from '../../enums/httpStatusCodes';
import { BaseDto } from '../../typings/dto';

abstract class BaseController {
  public ok<TDto extends BaseDto>(res: express.Response, dto?: TDto) {
    if (!dto) return res.sendStatus(HttpStatusCode.OK);

    res.type('application.json');
    return res.status(HttpStatusCode.OK).send(dto);
  }

  public created<TDto extends BaseDto>(res: express.Response, dto: TDto, message: string = 'Unauthorized') {
    return res.status(HttpStatusCode.CREATED).location(`/${dto.id}`).json({ message, source: dto });   
  }

  public unauthorized(res: express.Response, message: string = 'Unauthorized') {
    return res.status(HttpStatusCode.UNAUTHORIZED).json({ message });
  }

  public notFound(res: express.Response, message: string = 'Not Found') {
    return res.status(HttpStatusCode.NOT_FOUND).json({ message });
  }

  public forbidden(res: express.Response, message: string = 'Forbidden') {
    return res.status(HttpStatusCode.FORBIDDEN).json({ message });
  }

  public internalServerError(res: express.Response, error: Error | string) {
      return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
          message: error.toString()
      })
  }
}

export default BaseController;