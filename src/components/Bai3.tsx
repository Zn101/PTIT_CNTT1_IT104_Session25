import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'

export default function Ex03() {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  )
}