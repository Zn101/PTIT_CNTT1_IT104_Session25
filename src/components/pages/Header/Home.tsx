import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div>
        <NavLink to="/Home" className="p-3 mb-2 bg-danger text-white">Home</NavLink>
        <NavLink to="/Product">Product</NavLink>
        <NavLink to="/Detail">Detail</NavLink>
        <p>Home</p>
    </div>
  )
}
