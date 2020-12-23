import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div>
      <div className="home__container">
        <img
          className="home__image"
          alt="Here come the Holidays. Prime Video"
          src="https://images-na.ssl-images-amazon.com/images/G/15/digital/video/merch/2020/Other/Holiday/DESKTOP_TALL_HERO_2X_3219_Generic_Promo_Creative_EN_3000x1200._CB417666422_.jpg"
          height="600px"
          width="1500px"
          data-a-hires="https://images-na.ssl-images-amazon.com/images/G/15/digital/video/merch/2020/Other/Holiday/DESKTOP_TALL_HERO_2X_3219_Generic_Promo_Creative_EN_3000x1200._CB417666422_.jpg"
        />
        <div className="home__row">
          <Product />
          <Product />
        </div>
        <div className="home__row">
          <Product />
          <Product />
          <Product />
        </div>
        <div className="home__row">
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Home;
