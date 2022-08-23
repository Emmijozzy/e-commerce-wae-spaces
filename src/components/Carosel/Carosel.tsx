import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide} from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from "swiper";
import './carosel.css'
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import SwiperCore, { EffectFade, Pagination } from "swiper";
import LazyLoad from 'react-lazyload'
import { LazyLoadImage } from 'react-lazy-load-image-component'

interface image {
    image: string
}

//  & SwiperProps
const Carosel = ({image}: image ) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore |  undefined | null  >(null);

  return (
    <div className='carosel'>
      <Swiper
        // style={{
        //   "--swiper-navigation-color": "#fff",
        //   "--swiper-pagination-color": "#fff",
        // }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <LazyLoadImage className='alternate  alternate1' src='https://assets.api.uizard.io/api/cdn/stream/c0dfbf89-8d77-42ab-ad3b-155bd55178da.jpg' alt="" />        </SwiperSlide>
        <SwiperSlide>
          <LazyLoadImage className='alternate alternate2' src='https://assets.api.uizard.io/api/cdn/stream/87658174-25e0-4002-ab8f-b4e7961200cd.jpg' alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <LazyLoadImage className='alternate  alternate3' src='https://assets.api.uizard.io/api/cdn/stream/4a1a87f6-3bed-4dfc-8301-a53777cf226f.jpg' alt="" />        
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <LazyLoadImage className='alternate  alternate1' src='https://assets.api.uizard.io/api/cdn/stream/c0dfbf89-8d77-42ab-ad3b-155bd55178da.jpg' alt="" />        </SwiperSlide>
        <SwiperSlide>
          <LazyLoadImage className='alternate alternate2' src='https://assets.api.uizard.io/api/cdn/stream/87658174-25e0-4002-ab8f-b4e7961200cd.jpg' alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <LazyLoadImage className='alternate  alternate3' src='https://assets.api.uizard.io/api/cdn/stream/4a1a87f6-3bed-4dfc-8301-a53777cf226f.jpg' alt="" />        
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Carosel