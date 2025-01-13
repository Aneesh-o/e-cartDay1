import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from './redux/slices/productSlice'

function Home() {

    const dispath = useDispatch()

    const { allproducts, loading, errormsg } = useSelector(state => state.productReducer)
    // console.log(allproducts, loading, errormsg);
    const [currentPage, setCurrentPage] = useState(1)
    const productPerPage = 8
    const totalPages = Math.ceil(allproducts?.length / productPerPage)
    const currentPageProductLastIndex = currentPage * productPerPage
    const currentPageProductFirstIndex = currentPageProductLastIndex - productPerPage
    const visibleAllproducts = allproducts?.slice(currentPageProductFirstIndex, currentPageProductLastIndex)



    useEffect(() => {
        dispath(fetchProducts())
    }, [])

    const navigateToNext = () => {
        if(currentPage!=totalPages){
            setCurrentPage(currentPage+1)
        }
    }

    const navigateToBack = () => {
        if(currentPage!=1){
            setCurrentPage(currentPage-1)
        }
    }



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
                                    visibleAllproducts?.length > 0 ?
                                    visibleAllproducts?.map(product => (
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
                            <div className='text-2xl text-center font-bold mt-20'>
                                <span onClick={navigateToBack} className='cursor-pointer'><i className='fa-solid fa-backward me-3'></i></span>
                                <span>{currentPage} of {totalPages}</span>
                                <span onClick={navigateToNext} className='cursor-pointer'><i className='fa-solid fa-forward ms-5'></i></span>
                            </div>
                        </>
                }

            </div>
        </>
    )
}

export default Home