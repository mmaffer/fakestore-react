import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>FakeStore</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
      </div>
    </nav>
  );
}
