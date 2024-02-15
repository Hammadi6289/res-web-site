import React from "react";
import "./Product.css";
import "../../App.css";
import Cards from "../Cards";

export default function Products() {
  return (
    <div className="product-container">
      <div className="productss">
        <h1 className="product-heading">Our Packages</h1>
      </div>
      <Cards />
    </div>
  );
}
