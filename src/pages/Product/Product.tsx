import React from 'react'
import './product.css'
import Carosel from '../../components/Carosel/Carosel'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import produce from 'immer'


const Product = () => {
    let { id } = useParams();
    const idNum = id ? +id : null
    const products = useSelector((state: RootState) => state.products)
    const product = products.filter((produce) => (
         produce.id === idNum
    ))
    const foundProduct = product[0]
  return (
      <div className='product'>
        <Carosel image={foundProduct.image} />
        <div className="cart_side">
            {foundProduct.sold &&  <div className="sold-out"> Sold Out</div>}
            <h4 className="name">{foundProduct.name}</h4>
            <h3 className="price">{foundProduct.price}{ '\u20AC' }</h3>
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