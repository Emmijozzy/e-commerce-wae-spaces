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
                        <li><NavLink to='./'> Home</NavLink></li>
                        <li><NavLink to='./'> Category</NavLink></li>
                        <li><NavLink to='./'> Contact</NavLink></li>
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
                        <p>*{cartItems.length}</p>
                    </button>
                </div>
            </div>
        </div>
    )
 }
 export default Navbar