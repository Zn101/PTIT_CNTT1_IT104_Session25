import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";

export default function Bai1() {
  return (
    <div>
      <Routes>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  )
}
