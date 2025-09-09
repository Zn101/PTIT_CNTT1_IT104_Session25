import { Routes, Route } from "react-router-dom";
import ListUser from "./pages/ListUser";
import UserDetail from "./pages/UserDetail";

export default function Bai8() {
  return (
      <Routes>
        <Route path="/" element={<ListUser />} />
        <Route path="/user/:id" element={<UserDetail />} />
      </Routes>
  );
}
