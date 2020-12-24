import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://news.toyark.com/wp-content/uploads/sites/4/2019/07/Prime-Day-Banner.jpg"
        ></img>
        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {/* Basket */}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
