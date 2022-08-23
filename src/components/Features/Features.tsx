import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import './feature.css'

const Features = () => {
  return (
    <div className='feature'>
        <AnimationOnScroll animateIn='animate__bounceInLeft'>
            <h3>Featured</h3>
            <p className='feature_text'>Our plants are 100% organic, we don't use pesticides or harmful chemicals. </p>
            <p className='feature_text'>But please don't eat them</p>
            <button className='feature_btn'>Shop all Favourites</button>
        </AnimationOnScroll>
    </div>
  )
}

export default Features