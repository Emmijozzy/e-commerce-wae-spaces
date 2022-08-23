import React, { FC } from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import './hero.css'

const Loader: FC = () => {
   return (
      <div className='app_hero'>
        <div className="container">
          <AnimationOnScroll animateIn="animate__bounceIn">
            <div className="hero_box flex-center">
                <h2 className="hero_text">Find perfect plants for your home</h2>
                <p className="hero_content-text">Beautiful plants that encourage you to get creative.</p>
                <button className="action_btn">Shop now</button>
            </div>
          </AnimationOnScroll>
        </div>
      </div>
   )
}

export default Loader
