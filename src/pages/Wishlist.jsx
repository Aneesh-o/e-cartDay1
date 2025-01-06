import React from 'react'
import Header from '../components/Header'

function Wishlist() {
  return (
    <div>
        <Header/>
        <div style={{paddingTop:'100px'}} className='px-5'>
            <>
            <h1 className='text-4xl font-bold text-red-500'>My Wishlist</h1>
            <div className='grid grid-cols-4 gap-4 mt-4'>
                    <div className='rounded border p-2 shadow'>
                        <img width={'100%'} height={'100px'} src="https://img.freepik.com/free-vector/shopping-supermarket-cart-with-grocery-pictogram_1284-11697.jpg?semt=ais_hybrid" alt="loading" />
                        <div className='text-center'>
                            <h3 className='text-xl font-bold'>Product name</h3>
                            <div className='flex justify-evenly mt-3'>
                                <button className='text-xl'><i class="fa-solid fa-heart-circle-xmark text-red-500"></i></button>
                                <button className='text-xl'><i class="fa-sharp fa-solid fa-cart-plus text-green-700"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        </div>
    </div>
  )
}

export default Wishlist