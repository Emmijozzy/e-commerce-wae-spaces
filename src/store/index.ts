import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productsReducer from './Product/products.slice'
import cartReducer from './cart/cart.slice'

const rootReducer = combineReducers({
   productsReducer,
   cartReducer,
})


 const store = configureStore({
    reducer: rootReducer
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


