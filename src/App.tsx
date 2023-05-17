import { Provider } from "react-redux";
import store from "./store";

import { ShopCart } from "@/features/ShopCart/ShopCart";

function App() {
  return (
    <Provider store={store}>
      <ShopCart />
    </Provider>
  );
}

export default App;
