import React from "react";
import cl from "./Header.module.css";
import { Link } from "react-router-dom";

export default function Header() {
  const links = [
    {
      id: 1,
      href: "/",
      title: "Home",
    },
    {
      id: 2,
      href: "/addproduct",
      title: "Add Product",
    },
  ];
  return (
    <div className={cl.Header}>
      <ul className={cl.List}>
        {links.map((link) => (
          <li key={link.id} className={cl.Item}>
            <Link className={cl.Link} to={link.href}>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}