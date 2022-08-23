import React, { FC, useEffect, useState } from 'react'
import './layout.css'
import Navbar from '../Navbar/Navbar'
import { Container } from '@mui/material'
import Cart from '../Cart/Cart'
import Newsletter from '../Newsletter/Newsletter'
import Footer from '../Footer/Footer'
import ScrollToTop from '../ScrollToTop/ScrollToTop'


interface LayoutProps {
   children: React.ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {

   return (
      <>
         {/* <Container maxWidth={'xl'}> */}
         <Navbar />
            <div className={'pages'}>{children}</div>
            <Cart />

         <Newsletter />
         <Footer />
         <ScrollToTop />
         {/* </Container> */}
      </>
   )
}

export default Layout
