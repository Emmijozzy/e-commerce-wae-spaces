import React, { CSSProperties, useState } from 'react'
import './home.css'
import 'swiper/css'
import Hero from '../../components/Hero/Hero'
import About from '../../components/About/About'
import Category from '../../components/Category/Category'
import Quote from '../../components/Quote/Quote'
import Products from '../../components/Products/Products'
import Blogs from '../../components/Blogs/Blogs'
import Newsletter from '../../components/Newsletter/Newsletter'
import Footer from '../../components/Footer/Footer'
import Product from '../Product/Product'
import SliderExaple from '../../components/SliderExample/SliderExample'
// import Sidebar from '../../components/Sidebar/Sidebar'
// import ProductList from '../../components/ProductList/ProductList'
// import AlertComponent from '../../components/Alert/AlertComponent'
// import { useAppDispatch, useAppSelector } from '../../hooks'
// import { toggleItemAdded } from '../../store/cart/cart.slice'
import ClipLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  
const Home = () => {
    // const { itemAdded } = useAppSelector((state) => state.cartReducer)
    // const dispatch = useAppDispatch()
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");
    return (
        <>
            <div id='home' className={'home'}>
                <Hero />
                <About />
                <Category />
                <Quote />
                <Products />
                <Blogs />
            </div>
        </>
    )
}

export default Home
