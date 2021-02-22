import express from 'express';
import { ITokenService } from '../services/interfaces';
import HttpStatusCode from '../enums/httpStatusCode'
import { ErrorResponse } from '../typings/common/response';

class AuthorizeMiddleware {

    private readonly _tokenService: ITokenService;

    constructor(tokenService: ITokenService) {
        this._tokenService = tokenService; 
    }

    public verifyToken(req: express.Request, res: express.Response, next: express.NextFunction) {
        try {
            let token = req.get('authorization');
            if(!token) {
                // TODO: make the process simple
                const errorResponse: ErrorResponse = {
                    error: {
                      code: HttpStatusCode.UNAUTHORIZED,
                      message: 'Unauthorized',
                    },
                  };
                  return res.status(HttpStatusCode.UNAUTHORIZED).json(errorResponse);
            }

            // TODO: split with a space and get the last
            token = token.slice(7);
            const decoded = this._tokenService.verifyToken(token);
            req.userClaims = decoded;
            next();
            return;
        } catch (error) {
            throw error;
        }

    }

}

export default AuthorizeMiddleware;