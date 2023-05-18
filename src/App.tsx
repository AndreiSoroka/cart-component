import { Provider } from "react-redux";
import { setupStore } from "./store";
import DefaultPage from "@/pages/DefaultPage/DefaultPage";

function App() {
  return (
    <Provider store={setupStore()}>
      <DefaultPage />
    </Provider>
  );
}

export default App;
