import React from "react";
import { RouteHandler } from "./routes";
import "./App.css";
import { TodoListProvider } from "./hooks/todoContext";
import { ModalProvider } from "./hooks/modalContext";

function App() {
  return (
    <div className="App">
      <TodoListProvider>
        <ModalProvider>
          <RouteHandler />
        </ModalProvider>
      </TodoListProvider>
    </div>
  );
}

export default App;
