import React, { useEffect, useState } from 'react'
import './product.css'
import Scroll from 'react-scroll'
import { animateScroll as scroll } from 'react-scroll'
import Carosel from '../../components/Carosel/Carosel'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
// import produce from 'immer'
import { addProduct } from '../../store/cart/cart.slice'


const Product = () => {
    const [quantity , setQuantity] = useState(1)
    const [open, setOpen] = useState(false)

    let { id } = useParams();
    const idNum = id ? +id : null
    const { products } = useSelector((state: RootState) => state.productsReducer )
    const product = products.filter((produce) => (
         produce.id === idNum
    ))
    const foundProduct = product[0]

    const dispatch = useDispatch()
    const { cartItems, itemAdded } = useSelector((state: RootState) => state.cartReducer)
    
    const handleClickItem = () => {
      setOpen(true)
   }

   useEffect(() => {
    scroll.scrollToTop()
   }, [])


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
                    <button onClick={() => setQuantity((prevQ) => (prevQ - 1))}>-</button>
                    <span  className="figure">{quantity}</span>
                    <button onClick={() => setQuantity((prevQ) => (prevQ + 1))}>+</button>
                </div>
                <button onClick={() => dispatch(addProduct({product: foundProduct, quantity}))} className='cart-btn'>Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export default Product