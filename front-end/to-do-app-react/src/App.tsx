import React from "react";
import { RouteHandler } from "./routes";
import "./App.css";
import { TodoListProvider } from "./hooks/todoContext";

function App() {
  return (
    <div className="App">
      <TodoListProvider>
        <RouteHandler />
      </TodoListProvider>
    </div>
  );
}

export default App;
