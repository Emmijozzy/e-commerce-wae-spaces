import React from 'react'
import type { RootState } from '../../store'
import Features from '../Features/Features'
import Product from '../Product/Product'
import './products.css'
import { useSelector } from 'react-redux'
import Slider from 'react-slick'

const Products = () => {
      const products = useSelector((state: RootState) => state.products )
  const setting = {
    dots: true,
    Infinity: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
  }
  return (
    <div className='app_products'>
      <Features />

      {products.map((product, i) => (<Product key={i} product={product} />))}
    </div>
  )
}

export default Products