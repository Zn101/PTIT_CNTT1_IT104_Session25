import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound'

export default function Bai5() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}