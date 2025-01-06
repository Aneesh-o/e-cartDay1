import React from 'react'
import Header from '../components/Header'

function View() {
  return (
    <>
        <Header/>
        <div className='flex flex-col mx-5'>
        <div className='grid grid-cols-2 items-center h-screen'>
        <img width={'450px'} height={'200px'} src="https://img.freepik.com/free-vector/shopping-supermarket-cart-with-grocery-pictogram_1284-11697.jpg?semt=ais_hybrid" alt="" />

        <div>
            <h5 className='font-bold'>PID:1</h5>
            <h1 className='text-5xl font-bold '>Product name</h1>
            <h4 className='font-bold text-red-600 text-2xl'>$ 2.84</h4>
            <h4>Brand: Brand</h4>
            <h4>Catogery : Catogery</h4>
            <p className='font-bold'>Description:
                <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam blanditiis iusto vel nihil cupiditate perspiciatis impedit reprehenderit, laboriosam ab quibusdam. Nesciunt adipisci esse nobis corporis quis aut quibusdam natus repellendus.</span>
            </p>
                <div className='flex justify-between mt-5'>
                    <button className='bg-blue-600 text-white p-2'>Add to wishlist</button>
                    <button className='bg-green-600 text-white p-2'>Add to Cart</button>
                </div> 
        </div>

        </div>

    </div>
    </>
  )
}

export default View