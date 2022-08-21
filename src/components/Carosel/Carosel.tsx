import React from 'react'
import './carosel.css'
import LazyLoad from 'react-lazyload'
import { LazyLoadImage } from 'react-lazy-load-image-component'
interface image {
    image: string
}

const Carosel = ({image}: image ) => {
  return (
    <div className='carosel'>
        <div className="index_img">
            <LazyLoadImage className='index' src={image} alt="" />
        </div>
            <LazyLoadImage className='alternate  alternate1' src='https://assets.api.uizard.io/api/cdn/stream/c0dfbf89-8d77-42ab-ad3b-155bd55178da.jpg' alt="" />
            <LazyLoadImage className='alternate alternate2' src='https://assets.api.uizard.io/api/cdn/stream/87658174-25e0-4002-ab8f-b4e7961200cd.jpg' alt="" />
            <LazyLoadImage className='alternate  alternate3' src='https://assets.api.uizard.io/api/cdn/stream/4a1a87f6-3bed-4dfc-8301-a53777cf226f.jpg' alt="" />
        <div className="alt_img">
        </div>
    </div>
  )
}

export default Carosel