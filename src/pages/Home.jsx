import React, { useEffect } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from './redux/slices/productSlice'

function Home() {

    const dispath = useDispatch()

    const { allproducts, loading, errormsg } = useSelector(state => state.productReducer)
    console.log(allproducts, loading, errormsg);




    useEffect(() => {
        dispath(fetchProducts())
    }, [])




    return (
        <>
            <Header insideHome={true} />
            <div style={{ paddingTop: '100px' }} className='container px-4 mx-auto'>
                {
                    loading ?
                        <div className='flex justify-center items-center my-5 text-lg'>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif" alt="" />

                        </div>
                        :
                        <>
                            <div className='grid grid-cols-4 gap-4'>
                                {
                                    allproducts?.length > 0 ?
                                        allproducts?.map(product => (
                                            <div key={product?.id} className='rounded border p-2 shadow'>
                                                <img width={'100%'} height={'100px'} src={product.thumbnail} alt="loading" />
                                                <div className='text-center'>
                                                    <h3 className='text-xl font-bold'>{product.title}</h3>
                                                    <Link to={`/${product?.id}/view`} className='bg-violet-600 rounded p-1 mt-3 text-white inline-block' >View More..</Link>
                                                </div>
                                            </div>

                                        ))

                                        :
                                        <div className='flex justify-center items-center font-bold text-red-600 my-5 text-lg'>
                                            Product Not Found
                                        </div>

                                }

                            </div>
                        </>
                }

            </div>
        </>
    )
}

export default Home