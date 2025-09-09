import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Header/Home";
import Product from "./pages/Header/Product";
import Detail from "./pages/Header/Detail";

export default function Bai6() {
  return (
    <div>
      <nav className="nav nav-pills gap-3 mb-3">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/product"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Product
        </NavLink>

        <NavLink
          to="/detail"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Detail
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </div>
  );
}
