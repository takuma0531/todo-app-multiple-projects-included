import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RoutePath } from "../enums/route-path";
import { Category, Home } from "../pages";

export function RouteHandler() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutePath.HOME} element={Home()} />
        <Route path={RoutePath.CATEGORY} element={Category()} />
      </Routes>
    </BrowserRouter>
  );
}
