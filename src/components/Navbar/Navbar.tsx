import { AppBar, Button, Container } from '@mui/material'
import { FC } from 'react'
import './navbar.css'
import { useNavigate, NavLink } from 'react-router-dom'
import { FaSearch, FaShoppingCart } from 'react-icons/fa'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { toggleCart } from '../../store/cart/cart.slice'
import { useDispatch, useSelector } from 'react-redux'
import ResponsiveNav from '../ResponsiveNav/ResponsiveNav'
import { RootState } from '../../store'
import { Link } from 'react-scroll'
import { animateScroll as scroll } from 'react-scroll'

const Navbar: FC = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { cartItems } = useSelector((state: RootState) => state.cartReducer)

   return (
        <div className='nav-container'>
             <div className={'navbar'}>
                <ResponsiveNav />
                <div onClick={() => navigate('/')} className='navbarLogo'>
                </div>

                <nav className=''>
                    <ul>
                        <li><NavLink className={'links'} to='./'> Home </NavLink></li>
                        <li><Link className={'links'} to="category" smooth spy duration={500} activeClass="active"> Category</Link></li>
                        <li><Link className={'links'} to='products' smooth spy duration={500} activeClass="active"> Products</Link></li>
                    </ul>
                </nav>

                <div className='navicon'>
                    {/* <button
                    onClick={() => dispatch(toggleCart(true))}
                    >
                        <FaSearch size={'2em'} />
                    </button> */}

                    <button
                    onClick={() => dispatch(toggleCart(true))}
                    >
                        <FaShoppingCart size={'2em'} />
                        <p>{cartItems.length}</p>
                    </button>
                </div>
            </div>
        </div>
    )
 }
 export default Navbar