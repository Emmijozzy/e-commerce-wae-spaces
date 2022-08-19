import React from 'react'
import './product.css'
import Carosel from '../../components/Carosel/Carosel'


const Product = () => {
    
  return (
      <div className='product'>
        <Carosel />
        <div className="cart_side">
            <div className="sold-out">Sold Out</div>
            <h4 className="name">Plant 3</h4>
            <h3 className="price">50#</h3>
            <div className="quantity">
                <p>Quantity</p>
                <div className="quantity_box">
                    <button>-</button>
                    <span className="figure">1</span>
                    <button>+</button>
                </div>
                <button className='cart-btn'>Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export default Product