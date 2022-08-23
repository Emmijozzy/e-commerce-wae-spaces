import React from 'react'
import './quote.css'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const Quote = () => {
  return (
    <div className='app_quote flex-center'>
          <AnimationOnScroll className='animate' animateIn="animate__bounceIn">
                <h3 className='quote_text'>Love and work are to people what water and sunshine are to plants</h3>
          </AnimationOnScroll>
        </div>
  )
}

export default Quote