import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div style={{ height: '250px', marginTop: '100px' }} className='mt-5 w-full bg-violet-600 text-white'>
        <div className='flex justify-content-between' >
          {/* {intro} */}
          <div style={{ width: '400px' }}>
            <h5><i class="fa-solid fa-music me-3"></i>Media Player</h5>
            <p>Designed and built with all the love in the world by the Luminar team with the help of our contributors.</p>
            <p>Code licensed MIT, docs CC BY 3.0.</p>
            <p>Currently v5.3.3.</p>
          </div>

          {/* {links} */}
          <div  className='flex flex-col'>
            <h5 className='text-xl font-bold'>Links</h5>
            <Link style={{ textDecoration: 'none', color: 'white' }} to={'/'} >Home</Link>
            <Link style={{ textDecoration: 'none', color: 'white' }} to={'/Wishlist'} >Wishlist</Link>
            <Link style={{ textDecoration: 'none', color: 'white' }} to={'/Cart'} >Cart</Link>
          </div>

          {/* [guides] */}
          <div className='flex flex-col mx-20'>
            <h5 className='text-xl font-bold'>Guides</h5>
            <a style={{ textDecoration: 'none', color: 'white' }} href="https://react.dev/" target='blank'>React</a>
            <a style={{ textDecoration: 'none', color: 'white' }} href="https://getbootstrap.com/" target='blank'>Bootstrap</a>
            <a style={{ textDecoration: 'none', color: 'white' }} href="https://reactrouter.com/" target='blank'>React Router</a>
          </div>
          {/* [contact] */}
          <div className='flex flex-col'>
            <h5 className='text-xl font-bold'>Contact Us</h5>
            <div className='d-flex'>
              <input type="text" placeholder='Enter your email' className='form-control me-2' />
              <button className='btn btn-info'><i class="fa-solid fa-arrow-right"></i></button>
            </div>
            <div className='flex justify-content-between mt-2'>
              <a style={{ textDecoration: 'none', color: 'white' }} href="https://x.com/" target='blank'><i class="fa-brands fa-twitter"></i></a>

              <a style={{ textDecoration: 'none', color: 'white' }} href="https://www.facebook.com/" target='blank'><i class="fa-brands fa-facebook"></i></a>

              <a style={{ textDecoration: 'none', color: 'white' }} href="https://www.google.com/" target='blank'><i class="fa-brands fa-google"></i></a>

              <a style={{ textDecoration: 'none', color: 'white' }} href="https://www.instagram.com/" target='blank'><i class="fa-brands fa-instagram"></i></a>

              <a style={{ textDecoration: 'none', color: 'white' }} href="https://www.linkedin.com" target='blank'><i class="fa-brands fa-linkedin-in"></i></a>

              <a style={{ textDecoration: 'none', color: 'white' }} href="https://www.youtube.com/" target='blank'><i class="fa-brands fa-youtube"></i></a>

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer