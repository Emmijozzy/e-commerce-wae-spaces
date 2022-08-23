import React, { FC, useRef, useState } from 'react'
import { Virtual } from 'swiper';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './category.css'
import CatCard from '../CarCard/CatCard'
import { Swiper, SwiperSlide } from 'swiper/react'
// import required modules
import { Pagination, Navigation } from "swiper";
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Element } from 'react-scroll';


const Category: FC = () => {
    const categoryData = [
        {
            img: "https://assets.api.uizard.io/api/cdn/stream/2961b030-674e-432d-9704-8212f592ec27.jpg",
            category: "Jungle Plants"
        },
        {
            img: "https://assets.api.uizard.io/api/cdn/stream/f1ceb50f-3635-48fa-9717-11110a0f5703.jpg",
            category: "Outdoor Plants"
        },
        {
            img: "https://assets.api.uizard.io/api/cdn/stream/9cd6836f-9afc-4315-ba99-8155a7cb46e2.jpg",
            category: "Bedroom Plants"
        },
        {
            img: "https://assets.api.uizard.io/api/cdn/stream/f1ceb50f-3635-48fa-9717-11110a0f5703.jpg",
            category: "Outdoor Plants"
        },
        {
            img: "https://assets.api.uizard.io/api/cdn/stream/9cd6836f-9afc-4315-ba99-8155a7cb46e2.jpg",
            category: "Bedroom Plants"
        }
    ]
    

  return (
    <div id='category' className="app_category ">
        <div className="container flex-center">
            <div className="category_box">
                <h2 className='sub-head'>Categories</h2>
                <div className="swiper_box">
                    <Swiper 
                        slidesPerView={3}
                        spaceBetween={10}
                        slidesPerGroup={1}
                        loop={true}
                        loopFillGroupWithBlank={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="Cat_Swiper"
                    >
                        {categoryData.map((catege, i) => (
                            <SwiperSlide key={i} ><CatCard img={catege.img} category={catege.category} /></SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Category