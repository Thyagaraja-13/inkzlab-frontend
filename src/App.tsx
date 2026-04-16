import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Customize from "./pages/Customize";
import Cart from "./pages/Cart";

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: "10px", background: "black", color: "white" }}>
        <a href="/" style={{ marginRight: "20px", color: "white" }}>Home</a>
        <a href="/cart" style={{ color: "white" }}>Cart</a>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customize" element={<Customize />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}