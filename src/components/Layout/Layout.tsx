import React, { FC } from 'react'
import Navbar from '../Navbar/Navbar'
import { Container } from '@mui/material'
import Cart from '../Cart/Cart'
import Newsletter from '../Newsletter/Newsletter'
import Footer from '../Footer/Footer'

interface LayoutProps {
   children: React.ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
   return (
      <>
         <Navbar />
         <Container maxWidth={'xl'}>
            <div className={'pages'}>{children}</div>
            <Cart />
         {/* <Newsletter />
         <Footer /> */}
         </Container>
      </>
   )
}

export default Layout
