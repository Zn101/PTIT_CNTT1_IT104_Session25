import { Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound'

export default function Bai5() {
  return (
    <div>
        <Routes>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
    </div>
  )
}