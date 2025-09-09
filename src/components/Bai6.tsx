import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Header/Home";
import Product from "./pages/Header/Product";
import Detail from "./pages/Header/Detail";

export default function Bai6() {
  return (
    <div>
        <div className="d-flex" style={{ gap: "4px", padding: "12px" }}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "btn btn-danger text-white" 
                : "btn btn-link text-dark" 
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/product"
            className={({ isActive }) =>
              isActive ? "btn btn-danger text-white" : "btn btn-link text-dark"
            }
          >
            Product
          </NavLink>
          <NavLink
            to="/detail"
            className={({ isActive }) =>
              isActive ? "btn btn-danger text-white" : "btn btn-link text-dark"
            }
          >
            Detail
          </NavLink>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
    </div>
  );
}
