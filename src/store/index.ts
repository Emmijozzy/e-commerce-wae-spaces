import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productsReducer from './Product/products.slice'
// const rootReducer = combineReducers({
//     products: ProductsReducer
// })

 const store = configureStore({
    reducer: productsReducer
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


