import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { decrementQuantity, emptycart, incrementQuantity, removeCartItem } from './redux/slices/cartSlice'

const Cart = () => {

    const navigate = useNavigate()
    const userCart = useSelector(state => state.cartReducer)
    const [cartTotal, setCartTotal] = useState(0)
    const dispatch = useDispatch()

    useEffect(() => {
        if (userCart?.length > 0) {
            setCartTotal(userCart?.map(item => item.totalPrice).reduce((a1,a2) => a1 + a2))
        }
    }, [userCart])


    const handledecrementQuantity = (product) => {
        if(product?.quantity>1){
            dispatch(decrementQuantity(product.id))
        }else{
            dispatch(removeCartItem(product.id))
        }
    }

    const checkOut = () => {
        dispatch(emptycart())
        alert("Order confirmed...Thank you for purchasing with us...")
        // Redirect to home using navigate
        navigate('/')

    }

    return (
        <>
            <Header />
            <div style={{ paddingTop: '100px' }} className='px-5'>
                {
                    userCart?.length > 0 ?
                        <>
                            <h1 className='text-5xl font-bold text-blue-600'>Cart Summary</h1>
                            <div className='grid grid-cols-3 gap-4 mt-5'>
                                <div className='col-span-2 border rounded p-5 shadow'>
                                    <table className='table-auto w-full'>
                                        <thead>
                                            <tr>
                                                <td className='font-semibold'>#</td>
                                                <td className='font-semibold'>Name</td>
                                                <td className='font-semibold'>Image</td>
                                                <td className='font-semibold'>Quantity</td>
                                                <td className='font-semibold'>Price</td>
                                                <td className='font-semibold'>...</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                userCart?.map((product, index) => (
                                                    <tr>
                                                        <td>{index + 1}</td>
                                                        <td>{product?.title}</td>
                                                        <td><img height={'70px'} width={'70px'} src={product?.thumbnail} alt="" /></td>
                                                        <td>
                                                            <div className='flex'>
                                                                <button onClick={() => handledecrementQuantity(product)} className='font-bold'>-</button>
                                                                <input style={{ width: '40px' }} type="text" className='border p-1 rounded mx-2' value={product?.quantity} readOnly />
                                                                <button onClick={() => dispatch(incrementQuantity(product?.id))} className='font-bold'>+</button>
                                                            </div>
                                                        </td>
                                                        <td>{product?.totalPrice}</td>
                                                        <td><button onClick={() => dispatch(removeCartItem(product?.id))} className='text-red-600'><i class="fa-solid fa-trash"></i></button></td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                    <div className='float-right mt-5'>
                                        <button onClick={() => dispatch(emptycart())} className='bg-red-600 rounded p-2 text-white'>Empty Cart</button>
                                        <Link to={'/'} className='bg-blue-600 ms-3 rounded p-2 text-white'>Shop More...</Link>
                                    </div>
                                </div>
                                <div className='col-span-1 border rounded p-5 shadow'>
                                    <h2 className='font-bold my-4 text-2xl '>Total amount : <span className='text-red-600'>{cartTotal}</span></h2>
                                    <hr />
                                    <button onClick={checkOut} className='bg-green-600 text-white w-full mt-4 h-10'>Check Out</button>

                                </div>
                            </div>
                        </>
                        :
                        <div className='flex justify-center items-center h-screen'>
                            <img className='w-96' src="https://media3.giphy.com/media/GXYlkqTQaY6okgGEhn/giphy.gif?cid=6c09b952sra7x9s3fqb1b7tv7ymo5s7t46ly4tlrd4jxybup&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s" alt="" />
                            <h1 className='text-3xl text-red-600'>Your cart is Empty!!!</h1>
                        </div>

                }

            </div>
        </>
    )
}

export default Cart