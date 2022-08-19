import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className='app_newsletter'>
        <h3 className="advert">Get 15% off your next order, Subscribe to our Newsletter</h3>
        <form>
            <input type="text" placeholder='Enter your email here' />
            <button className='subscribe'>subscribe</button>
        </form>
    </div>
  )
}

export default Newsletter