import React from "react";
import ReactDOM from "react-dom/client";
import VisionApp from "./app";

const container = ReactDOM.createRoot(document.getElementById("app")!);

container.render(
  <React.StrictMode>
    <VisionApp />
  </React.StrictMode>
);
