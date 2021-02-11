import * as express from 'express';

import HttpStatusCode from '../../enums/httpStatusCode';
import { BaseReadDto } from '../../typings/dtos/base';

abstract class BaseController {
  public ok<TReadDto extends BaseReadDto>(res: express.Response, data?: TReadDto | Array<TReadDto>) {
    if (!data) return res.sendStatus(HttpStatusCode.OK);

    return res.status(HttpStatusCode.OK).json(data);
  }

  public created<TReadDto extends BaseReadDto>(res: express.Response, data: TReadDto, message: string = 'Created') {
    return res.status(HttpStatusCode.CREATED).location(`${data.id}`).json({ message, source: data });
  }

  public noContent(res: express.Response) {
    return res.sendStatus(HttpStatusCode.NO_CONTENT);
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
      message: error.toString(),
    });
  }
}

export default BaseController;
