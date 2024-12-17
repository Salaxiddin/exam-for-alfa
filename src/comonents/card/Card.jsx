import React from "react";
import cl from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card({img,title,description,id}) {
  return (
    <div className={cl.Card}>
      <img src={img} alt={title} />
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <Link to={"/products/"+id}><button>Lern More</button></Link>
      </div>
    </div>
  );
}
