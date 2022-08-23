import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, HashRouter, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
// import { store } from './store/Dindex'
import store from './store'
import Layout from './components/Layout/Layout'
import NewApp from './NewApp'


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
   <BrowserRouter >
      <Provider store={store}>
         <Layout>
            <App />
         </Layout>
         {/* <NewApp /> */}
      </Provider>
   </BrowserRouter>
)

