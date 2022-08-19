import { Instagram } from '@mui/icons-material'
import React from 'react'
import GroupLinks from '../GroupLinks/GroupLinks'
import './Footer.css'

const Footer = () => {
    const connect = [
        'Instagram',
        'Facebook',
        'Pinterest',
        'Youtube',
    ]

    const resources = [
        'Return Policy',
        'Track An Order',
        'FAQs',
        "Privacy Policy"
    ]

    const about = [
        'Our story',
        'Careers',
        'Press'
    ]
  return (
    <div className='footer'>
        <div className="footer_links">
            <div /* onClick={() => navigate('/')} */ className='logo'>
            </div>
            <GroupLinks head={'Connect'} link={connect}/>
            <GroupLinks head={'Resources'} link={resources}/>
            <GroupLinks head={'About'} link={about}/>
        </div>
        <div className="footer_base">
            <p>Designed by Ogunsuyi Joseph O.</p>
        </div>
    </div>
  )
}

export default Footer