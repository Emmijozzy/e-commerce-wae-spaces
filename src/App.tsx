import { useEffect } from 'react'
import AppRoutes from './Routes/AppRoutes'
import './App.css'
import { fetchProducts } from './store/Dproducts/products.action'
import { useAppDispatch } from './hooks'

const App = () => {
   const dispatch = useAppDispatch()
   useEffect(() => {
      dispatch(fetchProducts())
   }, [dispatch])

   return <AppRoutes />
}

export default App
