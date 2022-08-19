import React from 'react'
import './product.css'

interface product {
    product: {
        name: string;
        price: number;
        image: string;
        sold: boolean;
    }
}

const Product = ({product}: product) => {
  return (
    <div className='app_product'>
        <div className="img_box">
            {product.sold && <h6 className='sold'>Sold Out</h6>}
            <img src={product.image} alt="" />
        </div>
        <p className="plant_type">{product.name}</p>
        <h4 className='price'>{product.price}&#8364;</h4>
    </div>
  )
}

export default Product