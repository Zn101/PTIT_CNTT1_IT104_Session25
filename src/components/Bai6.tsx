import { NavLink, Route, Routes } from 'react-router-dom'
import Home from './pages/Header/Home'
import Product from './pages/Header/Product'
import Detail from './pages/Header/Detail'

export default function Ex06() {
  return (
    <div>
      <nav className='flex gap-5'>
        <NavLink to={'/'} className='p-3 rounded'>Home</NavLink>
        <NavLink to={'/product'} className='p-3 rounded'>Product</NavLink>
        <NavLink to={'/detail'} className='p-3 rounded'>Detail</NavLink>
      </nav>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/detail' element={<Detail/>}/>
      </Routes>
    </div>
  )
}