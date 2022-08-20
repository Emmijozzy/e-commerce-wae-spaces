import React from 'react'
import './product.css'
import { useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component'

interface product {
    product: {
        name: string;
        price: number;
        image: string;
        sold: boolean;
    }
}

const Product = ({product}: product) => {
    const navigate = useNavigate()
  return (
    <div className='app_product' onClick={() => navigate('/product')}>
        <div className="img_box">
            {product.sold && <h6 className='sold'>Sold Out</h6>}
            <LazyLoadImage src={product.image} alt="" />
        </div>
        <p className="plant_type">{product.name}</p>
        <h4 className='product_price'>{product.price}&#8364;</h4>
    </div>
  )
}

export default Product