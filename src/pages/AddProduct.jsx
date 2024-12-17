import React, { useState } from "react";
import ProductsServise from "../api/ProductsService";
import { useDispatch } from "react-redux";

export default function AddProduct() {
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const Send = () => {
    if (image && description && title) {
      const prod = {
        title: title,
        description: description,
        image: image,
      };
      ProductsServise.addProducts({ ...prod, dispatch });
      setImage("");
      setDescription("");
      setTitle("");
    } else {
      alert("Please anter title , description and url to image !");
    }
  };

  return (
    <div className="AddProduct">
      {image && <img src={image} />}
      <div className="ProductInputs">
        <input
          type="url"
          onChange={(e) => setImage(e.target.value)}
          placeholder="URL photo"
          value={image}
        />
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          value={title}
        />
        <textarea
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          placeholder="description"
          value={description}
        />
        <input type="submit" placeholder="Send" onClick={Send} />
      </div>
    </div>
  );
}
