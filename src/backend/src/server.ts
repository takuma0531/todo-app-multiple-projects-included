import express, { Express, Request, Response } from 'express';
import { ServerParts, Route } from './typings/common';

class Server {
  private app: Express;
  private port: string;

  constructor(serverParts: ServerParts) {
    this.app = express();
    this.port = serverParts.port;
    this.setMiddlewares(serverParts.middlewares);
    this.setRoutes(serverParts.routes);
  }

  public init() {
    // TODO: remove it later
    this.app.get('/', (_: Request, res: Response) =>
      res.status(200).send('API is running'),
    );

    this.app.listen(this.port, () =>
      console.log(`Server is running on http://localhost:${this.port}`),
    );
  }

  private setMiddlewares(middlewares: Array<any>) {
    middlewares.forEach((middleware) => {
      this.app.use(middleware);
    });
  }

  private setRoutes(routes: Array<any>) {
    routes.forEach((route: Route) => {
      this.app.use(route.baseRoute, route.router);
    });
  }
}

export default Server;
