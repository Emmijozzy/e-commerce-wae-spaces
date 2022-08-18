import { AppBar, Button, Container } from '@mui/material'
import { FC } from 'react'
import './navbar.css'
import { useNavigate, NavLink } from 'react-router-dom'
import { FaSearch, FaShoppingCart } from 'react-icons/fa'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { toggleCart } from '../../store/cart/cart.slice'
import { useAppDispatch, useAppSelector } from '../../hooks'

const Navbar: FC = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { cartItems } = useAppSelector((state) => state.cartReducer)

    return (
        <div className='container'>
             <div className={'navbar'}>
                <div onClick={() => navigate('/')} className='navbarLogo'>
                </div>

                <nav className='flex-center'>
                    <ul>
                        <li><NavLink to='./'> Home</NavLink></li>
                        <li><NavLink to='./'> Category</NavLink></li>
                        <li><NavLink to='./'> Contact</NavLink></li>
                    </ul>
                </nav>

                <div className='navicon'>
                    <button
                    onClick={() => dispatch(toggleCart(true))}
                    >
                        <FaSearch size={'2em'} />
                    </button>

                    <button
                    onClick={() => dispatch(toggleCart(true))}
                    >
                        <FaShoppingCart size={'2em'} />
                        Cart({cartItems.length})
                    </button>
                </div>
            </div>
        </div>
    )
 }
 export default Navbar