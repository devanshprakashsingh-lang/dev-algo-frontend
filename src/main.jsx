import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// 🔹 Runtime controllers (NO React)
import { bootstrapApp } from "./bootstrap/app.bootstrap";
import { startRefreshLoop } from "./runtime/refresh.controller";

// 🔹 Runtime startup (executes once per page load)
bootstrapApp();
startRefreshLoop();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
