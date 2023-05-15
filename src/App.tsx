import './App.css'
import { Provider, useDispatch, useSelector } from 'react-redux'
import store from './store'

import cartSlice from "./features/ShopCart/stores/cart/cart.slice";
import { useEffect } from "react";
import { getShops } from "./features/ShopCart/stores/shops/shops.slice";

function TempComponentCart() {
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

function TempComponentShops() {
  const { list, isLoading } = useSelector(state => state.shops)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getShops())
  }, [])

  if (isLoading) {
    return <div>Loading...</div>
  }
  return (
    <>
      <div>
        Shops:
        {list.map(item => (
          <div key={item.id}>
            {item.name}
          </div>
        ))}
      </div>
    </>
  )
}

function App() {

  return (
    <Provider store={store}>
      <TempComponentCart/>
      <TempComponentShops/>
    </Provider>
  )
}

export default App
