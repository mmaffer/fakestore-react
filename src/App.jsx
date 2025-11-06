import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import "./index.css";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <Router>
      <Navbar className="navbar">
        <h1>FakeStore Catalog</h1>
        <div>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
        </div>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  );
}
