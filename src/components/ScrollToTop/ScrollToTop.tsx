import React, { FC, useEffect, useState } from 'react'
import {animateScroll as scroll} from 'react-scroll'
import { BsArrowUp } from 'react-icons/bs'
import './scrollToTop.css'

const ScrollToTop = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
         window.addEventListener('scroll', () => {
             if (window.pageYOffset > 300) {
                 setShowButton(true);
             } else {
                 setShowButton(false);
             }
         });
     }, []);
 
     const scrollToTop = function () {
         scroll.scrollToTop();
     };
 
  return (
    <div>
        {showButton && (
            <button onClick={scrollToTop} className="back-to-top" type="button">
                <BsArrowUp className='arrow-up' />
            </button>
        )}
    </div>
  )
}

export default ScrollToTop