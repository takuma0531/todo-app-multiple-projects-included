import React from "react";
import { RouteHandler } from "./routes";
import "./App.css";
import { TodoListProvider } from "./hooks/todo-context";
import { ModalProvider } from "./hooks/modal-context";
import { CategoryProvider } from "./hooks/category-context";

function App() {
  return (
    <div className="App">
      <TodoListProvider>
        <ModalProvider>
          <CategoryProvider>
            <RouteHandler />
          </CategoryProvider>
        </ModalProvider>
      </TodoListProvider>
    </div>
  );
}

export default App;
