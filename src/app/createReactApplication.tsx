import type React from "react";
import ReactDOM from "react-dom/client";
import environmentMeta from "@/shared/const/environment.meta";

const createReactApplication = (
  rootElement: HTMLElement,
  applicationElement: React.ReactNode
) => {
  if (environmentMeta.PROD) {
    ReactDOM.hydrateRoot(rootElement, applicationElement);
  } else {
    ReactDOM.createRoot(rootElement).render(applicationElement);
    console.log("mode", environmentMeta.MODE);
  }
};
export default createReactApplication;
