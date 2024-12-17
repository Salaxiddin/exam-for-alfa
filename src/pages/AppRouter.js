import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Product from "./Product";
import AddProduct from "./AddProduct";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/products" element={<Home />} />
      <Route path="/addproduct" element={<AddProduct />} />
      <Route path="/products/:id" element={<Product />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
