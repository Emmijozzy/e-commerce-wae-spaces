import React, { useState } from 'react'
import './responsiveNav.css'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-scroll'


const ResponsiveNav = () => {
    const [ openNav, setNav ] = useState(false)
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
                <li><NavLink className={'links'} to='./'> Home</NavLink></li>
                <li><Link className={'links'} to="category" smooth spy duration={500} activeClass="active"> Category</Link></li>
                <li><Link className={'links'} to='products' smooth spy duration={500} activeClass="active"> Products</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default ResponsiveNav