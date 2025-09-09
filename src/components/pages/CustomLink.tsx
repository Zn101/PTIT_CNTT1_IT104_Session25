import { Link, useLocation, Navigate } from "react-router-dom";

export default function CustomLink() {
  const location = useLocation();
  if (location.pathname !== "/home-page") {
    return <Navigate to="/not-found" replace />;
  }
  return (
    <div>
      <Link to="/home-page">Go to Home Page</Link>
    </div>
  );
}
