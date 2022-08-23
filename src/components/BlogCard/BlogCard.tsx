import React from 'react'
import './blogcard.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { AnimationOnScroll } from 'react-animation-on-scroll';

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
        <AnimationOnScroll animateIn='animate__fadeIn'>
            <div className="img_box-blog">
                <div className='author'>
                    <p>Written By</p>
                    <h5 className='author_name'>{blog.author}</h5>
                </div>
                <LazyLoadImage src={blog.img} alt="" />
            </div>
            <p className="edition">Edition {blog.edition}</p>
            <h3 className="title">{blog.title}</h3>
        </AnimationOnScroll>
    </div>
  )
}

export default BlogCard