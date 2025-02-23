import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchProduct } from '../pages/redux/slices/productSlice'

const Header = ({ insideHome }) => {


    const dispatch = useDispatch()
    const userCart = useSelector(state => state.cartReducer)

    const userwishlist = useSelector(state => state.whishlistReducer)
    return (
        <nav className='flex  bg-violet-600 fixed text-white w-full p-5'>
            <Link className='text-2xl font-bold' to={'/'}><i class="fa-solid fa-truck-fast"></i> E cart</Link>
            <ul className='flex-1 text-right'>
                {
                    insideHome &&
                    <li className='list-none inline-block px-5'><input onChange={(e) => dispatch(searchProduct(e.target.value.toLowerCase()))} style={{ width: '300px', color: 'black' }} className='rounded p-2' type='text' placeholder='Search Products...'></input> </li>
                }

                <li className='list-none inline-block px-5'><Link to={'/Wishlist'}><i class="fa-solid fa-heart text-red-600"></i> Wishlist <span className='bg-black text-white rounded p-1'>{userwishlist?.length}</span></Link> </li>

                <li className='list-none inline-block px-5'><Link to={'/Cart'}><i class="fa-solid fa-cart-shopping+ text-green-600"></i> Cart <span className='bg-black text-white rounded p-1'>{userCart?.length}</span></Link> </li>
            </ul>

        </nav>
    )
}

export default Header