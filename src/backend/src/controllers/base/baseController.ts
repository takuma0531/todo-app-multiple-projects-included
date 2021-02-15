import * as express from 'express';

import HttpStatusCode from '../../enums/httpStatusCode';
import { BaseReadDto } from '../../typings/dtos/base';
import { SuccessResponse, ErrorResponse } from '../../typings/common';

abstract class BaseController {
  public ok(res: express.Response, data?: any | Array<any>) {
    if (!data) return res.sendStatus(HttpStatusCode.OK);

    const successResponse: SuccessResponse = { data };
    return res.status(HttpStatusCode.OK).json(successResponse);
  }

  public created<TReadDto extends BaseReadDto>(res: express.Response, data: TReadDto) {
    const successResponse: SuccessResponse = { data };
    return res.status(HttpStatusCode.CREATED).location(`${data.id}`).json(successResponse);
  }

  public noContent(res: express.Response) {
    return res.sendStatus(HttpStatusCode.NO_CONTENT);
  }

  public unauthorized(res: express.Response, message: string = 'Unauthorized') {
    const errorResponse: ErrorResponse = {
      error: {
        code: HttpStatusCode.UNAUTHORIZED,
        message: message,
      },
    };

    return res.status(HttpStatusCode.UNAUTHORIZED).json(errorResponse);
  }

  public notFound(res: express.Response, message: string = 'Not Found') {
    const errorResponse: ErrorResponse = {
      error: {
        code: HttpStatusCode.NOT_FOUND,
        message: message,
      },
    };
    return res.status(HttpStatusCode.NOT_FOUND).json(errorResponse);
  }

  public forbidden(res: express.Response, message: string = 'Forbidden') {
    const errorResponse: ErrorResponse = {
      error: {
        code: HttpStatusCode.FORBIDDEN,
        message: message,
      },
    };

    return res.status(HttpStatusCode.FORBIDDEN).json(errorResponse);
  }

  public internalServerError(res: express.Response, error: Error | string) {
    const errorResponse: ErrorResponse = {
      error: {
        code: HttpStatusCode.INTERNAL_SERVER_ERROR,
        message: error.toString(),
      },
    };
    return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json(errorResponse);
  }
}

export default BaseController;
