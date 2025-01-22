import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./app/styles/index.css";
import { App } from "./app/App";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "./app/provides/errorBoundary/index";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </BrowserRouter>
  </StrictMode>
);
