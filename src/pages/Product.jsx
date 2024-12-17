import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function AddProduct() {
  const { id } = useParams();
  const Products = useSelector((state) => state.products);
  const product = Products.filter((items) => items._id == id)[0];

  return (
    <div className="Product">
      <div className="ProductOpen">
        {product && (
          <>
            <img src={product.image} alt={product.title} />
            <div>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
