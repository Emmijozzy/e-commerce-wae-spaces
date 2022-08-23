import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import './Newsletter.css'

const Newsletter = () => {
  return (
  <AnimationOnScroll animateIn='animate__fadeIn' duration={1}>
      <div className='app_newsletter'>
            <h3 className="advert">Get 15% off your next order, Subscribe to our Newsletter</h3>
            <form>
                <input type="text" placeholder='Enter your email here' />
                <button className='subscribe'>subscribe</button>
            </form>
      </div>
    </AnimationOnScroll>
  )
}

export default Newsletter