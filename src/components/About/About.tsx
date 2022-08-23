import React, { FC } from 'react'
import './about.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { AnimationOnScroll } from 'react-animation-on-scroll'
const About: FC = () => {
  return (
    <div className="app_about">
        <div className='container'>
            <div className="about-img">
              <AnimationOnScroll animateIn='animate__fadeIn'>
                <LazyLoadImage className='about_img' src='https://assets.api.uizard.io/api/cdn/stream/c8515796-8789-48b2-9884-dec4cd6778f4.jpg' width={'100%'} alt="" />
              </AnimationOnScroll>
            </div>
        </div>
    </div>
  )
}

export default About