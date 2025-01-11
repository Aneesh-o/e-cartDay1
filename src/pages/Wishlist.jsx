import React from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from './redux/slices/wishlistSlice'
import { addToCart } from './redux/slices/cartSlice'

function Wishlist() {

    const userCart = useSelector(state => state.cartReducer)
    const dispatch = useDispatch()
    const userWishlist = useSelector(state => state.whishlistReducer)


    const handleCart = (product) => {
        dispatch(removeItem(product?.id))
        dispatch(addToCart(product))
        const existingProduct = userCart?.find(item => item.id == id)
        if (existingProduct) {
            alert("Product Qunatity is Incrementing")
        } else {
            alert("Product added to Cart")
        }
    }

    return (
        <div>
            <Header />
            <div style={{ paddingTop: '100px' }} className='px-5'>
                {
                    userWishlist?.length > 0 ?
                        <>
                            <h1 className='text-4xl font-bold text-red-500'>My Wishlist</h1>
                            <div className='grid grid-cols-4 gap-4 mt-4'>

                                {
                                    userWishlist?.map(product => (
                                        <div className='rounded border p-2 shadow'>
                                            <img width={'100%'} height={'100px'} src={product?.thumbnail} alt="loading" />
                                            <div className='text-center'>
                                                <h3 className='text-xl font-bold'>{product?.title}</h3>
                                                <div className='flex justify-evenly mt-3'>
                                                    <button onClick={() => dispatch(removeItem(product?.id))} className='text-xl'><i class="fa-solid fa-heart-circle-xmark text-red-500"></i></button>
                                                    <button onClick={() => handleCart(product)} className='text-xl'><i class="fa-sharp fa-solid fa-cart-plus text-green-700"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </>
                        :
                        <div className='flex justify-center items-center h-screen'>
                            <img className='w-96' src="https://media3.giphy.com/media/GXYlkqTQaY6okgGEhn/giphy.gif?cid=6c09b952sra7x9s3fqb1b7tv7ymo5s7t46ly4tlrd4jxybup&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s" alt="" />
                            <h1 className='text-3xl text-red-600'>Your wishlist is Empty!!!</h1>
                        </div>
                }

            </div>
        </div>
    )
}

export default Wishlist