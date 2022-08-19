import React from 'react'
import './blogcard.css'

interface blogs {
    blog: {
        author: string;
        edition: number;
        title: string;
        img: string;
    }
}

const BlogCard = ({blog}: blogs) => {
  return (
    <div className='blog_card'>
        <div className="img_box-blog">
            <div className='author'>
                <p>Written By</p>
                <h5 className='author_name'>{blog.author}</h5>
            </div>
            <img src={blog.img} alt="" />
        </div>
        <p className="edition">Edition {blog.edition}</p>
        <h3 className="title">{blog.title}</h3>
    </div>
  )
}

export default BlogCard