import React from "react";
import "./Product.css";

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>Cerave SA Cream</p>
        <p className="product__price">
          <small>$</small>
          <strong>19.99</strong>
        </p>
        <div className="product__rating">
          <p>⭐️</p>
        </div>
      </div>

      <img src="https://m.media-amazon.com/images/I/51lfVlvyrAL._AC_UY218_.jpg"></img>
      <button>Add To Basket</button>
    </div>
  );
}

export default Product;
