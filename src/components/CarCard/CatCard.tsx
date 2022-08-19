import React, { FC } from 'react'
import './catcard.css'

type cardDetail= {
    img: string,
    category: string
}

const CatCard = ({ img, category } : cardDetail ) => {
  return (
    <div className='cat_card'>
        <div className="column">
            <div className='img_card'>
                <img src={img} alt="card" />
            </div>
            <h3 className="category_text">{category}</h3>
        </div>
    </div>
  )
}

export default CatCard