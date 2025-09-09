import { NavLink } from "react-router-dom";

export default function Detail() {
  return (
    <div>
        <NavLink to="/Home">Home</NavLink>
        <NavLink to="/Product">Product</NavLink>
        <NavLink to="/Detail" className="p-3 mb-2 bg-danger text-white">Detail</NavLink>
        <p>Detail</p>
    </div>
  )
}
