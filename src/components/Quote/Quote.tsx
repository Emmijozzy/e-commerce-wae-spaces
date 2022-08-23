import React from 'react'
import './quote.css'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const Quote = () => {
  return (
    <AnimationOnScroll animateIn="animate__bounceIn">
        <div className='app_quote flex-center'>
                <h3 className='quote_text'>Love and work are to people what water and sunshine are to plants</h3>
        </div>
    </AnimationOnScroll>
  )
}

export default Quote