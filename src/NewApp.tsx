import React, { useLayoutEffect, FC, useEffect, useRef } from 'react'
import './App.css'
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Newsletter from './components/Newsletter/Newsletter'
import Home from './pages/Home/Home'
import SuccessOrder from './pages/SuccessOrder/SuccessOrder'
import Product from './pages/Product/Product'
import  {useScrollTo} from 'react-use-window-scroll'


 

const NewApp = () => {
    const path = useLocation().pathname

    const scrollTo = useScrollTo()

    useEffect(() => {
        console.log('npoe scroll')
        try {
            scrollTo(0, 0);
        } catch(err) {
            console.log(err)
        }
    }, [path])

  return (
    // <HashRouter>
        <>
            <ScrollToTop />
                <Navbar />
                    <Routes>
                        <Route path={'/'} element={<Home />} />
                        <Route path={'/success'} element={<SuccessOrder />} />
                        <Route path={'/product/:id'} element={<Product />} />
                    </Routes>
            <Newsletter />
            <Footer />
        </>
    // </HashRouter>
  )
}

interface LayoutProps {
    children: React.ReactNode
 }

 export function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      // "document.documentElement.scrollTo" is the magic for React Router Dom v6
      document.documentElement.scrollTo({
        top: 0,
        left: 0,
      });
    }, [pathname]);
  
    return null;
  }


export default NewApp