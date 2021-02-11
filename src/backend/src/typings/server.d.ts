import { Router } from "express";

export interface ServerParts {
    port: string;
    middlewares: Array<any>;
    routes: Array<Route>
}

export interface Route {
    baseRoute: string,
    router: Router;
}
