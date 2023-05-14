import './App.css'
import { Provider, useDispatch, useSelector } from 'react-redux'
import store from './store'

import cartSlice from "./features/ShopCart/stores/cart/cart.slice";

function TempComponent() {
  const list = useSelector(state => state.cart.list)
  const dispatch = useDispatch()

  function handleAddToCart() {
    dispatch(cartSlice.actions.addItemToCart({
      id: Math.random().toString(),
      name: 'Test name',
      shop: 'Test shop'
    }))
  }

  return (
    <>
      <div>
        {list.map(item => (
          <div key={item.id}>
            {item.name}
          </div>
        ))}
      </div>
      <button onClick={() => handleAddToCart()}>Add</button>
    </>
  )
}

function App() {

  return (
    <Provider store={store}>
      <TempComponent/>
    </Provider>
  )
}

export default App
