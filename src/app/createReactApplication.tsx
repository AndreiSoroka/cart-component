import type React from "react";
import ReactDOM from "react-dom/client";

const createReactApplication = (
  rootElement: HTMLElement,
  applicationElement: React.ReactNode
) => {
  if (import.meta.env.PROD) {
    ReactDOM.hydrateRoot(rootElement, applicationElement);
  } else {
    ReactDOM.createRoot(rootElement).render(applicationElement);
    console.log("mode", import.meta.env.MODE);
  }
};
export default createReactApplication;
