import React from 'react'
import './GroupLinks.css'
import { Link } from 'react-router-dom';

type groupLink = {
    head : string;
    link: string[]
}

const GroupLinks = ({head, link}: groupLink) => {
    const connect = [
        'Instagram',
        'Facebook',
        'Pinterest',
        'Youtube',
    ]
  return (
    <div className='group_link'>
        <div className="head">{head}</div>
        {link.map((link, i) => (<div className='link'><Link to='#' >{link}</Link></div>))}
    </div>
  )
}

export default GroupLinks