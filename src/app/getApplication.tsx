import React from "react";
import App from "@/App";
import "@/shared/styles/main.scss";

export default function getApplication() {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
