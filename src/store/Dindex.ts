import { combineReducers, configureStore } from '@reduxjs/toolkit'
import productsReducer from './Dproducts/products.slice'
import cartReducer from './cart/cart.slice'

// const rootReducer = combineReducers({
//    productsReducer,
//    cartReducer,
// })

export const store = configureStore({
    reducer: cartReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
