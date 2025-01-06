import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import View from './pages/View'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Wishlist' element={<Wishlist />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/:id/view' element={<View />} />
        <Route path='/*' element={<pnf />} />
      </Routes>
      {/* Footer */}
      <Footer/>
    </>
  )
}

export default App
