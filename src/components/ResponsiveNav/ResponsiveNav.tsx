import React, { useState } from 'react'
import './responsiveNav.css'
import { NavLink } from 'react-router-dom'

const ResponsiveNav = () => {
    const [ openNav, setNav ] = useState(true)
    const resNavElem = (
        <div className='res_nav' onClick={() => setNav(!openNav)}>
            <span className={`bar ${openNav?'bar1' : ''}`}></span>
            <span className={`bar ${openNav?'bar2' : ''}`}></span>
            <span className={`bar ${openNav?'bar3' : ''}`}></span>
        </div>
    )
  return (
    <div className='responsive_nav'>
        {resNavElem}
        <div className={`responsive_nav-bar ${!openNav? 'close' : ''}`}>
            <ul className={`nav ${openNav? 'open' : ''}`}>
                <li><NavLink to='./'> Home</NavLink></li>
                <li><NavLink to='./'> Category</NavLink></li>
                <li><NavLink to='./'> Contact</NavLink></li>
            </ul>
        </div>
    </div>
  )
}

export default ResponsiveNav