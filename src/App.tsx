import { Provider } from "react-redux";
import store from "./store";
import DefaultPage from "@/pages/DefaultPage/DefaultPage";

function App() {
  return (
    <Provider store={store}>
      <DefaultPage />
    </Provider>
  );
}

export default App;
