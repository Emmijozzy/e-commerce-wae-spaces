import React from 'react'
import Features from '../Features/Features'
import Product from '../Product/Product'
import './products.css'

const Products = () => {
  const products = [
    {
      name: 'Plant1',
      price:  150,
      image: 'https://assets.api.uizard.io/api/cdn/stream/ab148d11-028d-4fe4-af04-8c2710fca1cd.jpg',
      sold: false
    },
    {
      name: 'Plant2',
      price:  50,
      image: 'https://assets.api.uizard.io/api/cdn/stream/c0dfbf89-8d77-42ab-ad3b-155bd55178da.jpg',
      sold: true
    }
  ]
  return (
    <div className='app_products'>
      <Features />
      {products.map((product, i) => (<Product key={i} product={product} />))}
    </div>
  )
}

export default Products