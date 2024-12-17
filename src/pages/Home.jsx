import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Card from "../comonents/card/Card";


export default function Products() {
  const [products, setProducts] = useState([]);

  let prods = useSelector((state) => state.products)
  useEffect(() => {
    setProducts(prods);
  },[prods])

  return (
    <div className="HomeProducts">
      <div className="ProductList">
            {products.map((product) => (
              <Card
                key={product._id}
                id={product._id}
                title={product.title}
                description={product.description}
                img={product.image}
              />
            ))}
      </div>
    </div>
  );
}
