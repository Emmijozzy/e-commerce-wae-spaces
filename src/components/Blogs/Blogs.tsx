import React from 'react'
import './Blogs.css'
import BlogCard from '../BlogCard/BlogCard'

const Blogs = () => {
    const blogs = [
        {
            author: 'Mellissa Bail',
            edition: 291,
            title: 'How to water your freaking plants so they don\'t die after one week',
            img: 'https://assets.api.uizard.io/api/cdn/stream/6c0ab3e9-f416-41d9-a079-da4b7116c71f.jpg'
        },
        {
            author: 'Jesse Rowe',
            edition: 292,
            title: 'How to repot a Monstera without killing it and foster its growth',
            img: 'https://assets.api.uizard.io/api/cdn/stream/3b5ffd6b-115b-4ac3-9e39-7e2875d27dd7.jpg'
        }
    ]
  return (
    <div className='app_blogs'>
        {blogs.map((blog, i) => (<BlogCard key={i} blog={blog}/>
))}
    </div>
  )
}

export default Blogs