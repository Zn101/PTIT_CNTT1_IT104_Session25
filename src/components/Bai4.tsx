import { Route, Routes } from 'react-router-dom'
import Register from './pages/Register'

export default function Bai4() {
  return (
    <div>
      <Routes>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </div>
  )
}