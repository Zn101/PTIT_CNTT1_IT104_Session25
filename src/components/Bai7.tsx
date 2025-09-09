import CustomLink from './pages/CustomLink'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import { Route, Routes } from 'react-router-dom'

export default function Bai7() {
  return (
    <div>
      <CustomLink />
      <Routes>
        <Route path="/home-page" element={<HomePage />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}
