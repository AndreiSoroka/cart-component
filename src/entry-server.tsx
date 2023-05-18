import ReactDOMServer from "react-dom/server";
import getApplication from "@/app/getApplication";

export function render() {
  return ReactDOMServer.renderToString(getApplication());
}
