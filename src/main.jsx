import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Certifique-se de que o caminho está correto
import './index.css'; // Certifique-se de importar o CSS principal

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);