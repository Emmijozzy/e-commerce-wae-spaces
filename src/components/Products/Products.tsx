import React from 'react'
import type { RootState } from '../../store'
import Features from '../Features/Features'
import Product from '../Product/Product'
import './products.css'
import { useSelector } from 'react-redux'
import Slider from 'react-slick'

const Products = () => {
      const { products } = useSelector((state: RootState) => state.productsReducer )
  const setting = {
    dots: true,
    Infinity: true,
    LazyLoad: true,
    speed: 500,
    slidesToShow: 2,
    // autoplay: true,
    slidesToScroll: 1,
    // speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  }
  return (
    <div className='app_products'>
      <Features />
      <div className='slider'>
        <Slider {...setting}>
          {products.map((product, i) => (<Product key={i} product={product} />))}
        </Slider>
      </div>
    </div>
  )
}

export default Products