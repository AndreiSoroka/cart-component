import ReactDOMServer from "react-dom/server";
import getApplication from "@/app/getApplication";

export const render = () => ReactDOMServer.renderToString(getApplication());
