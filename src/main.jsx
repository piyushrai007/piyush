import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ContentProvider } from "./ContentContext.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContentProvider>
      <App />
    </ContentProvider>
  </React.StrictMode>
);
