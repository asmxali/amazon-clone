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
          src="https://images-na.ssl-images-amazon.com/images/G/15/kindle/journeys/NDE1YTAyY2Yt/NDE1YTAyY2Yt-MTU0NGE5YzEt-w3000._CB413866510_.jpg"
          height="600px"
          width="1500px"
          data-a-hires="https://images-na.ssl-images-amazon.com/images/G/15/digital/video/merch/2020/Other/Holiday/DESKTOP_TALL_HERO_2X_3219_Generic_Promo_Creative_EN_3000x1200._CB417666422_.jpg"
        />
        <div className="home__row">
          <Product
            id={1}
            title="CeraVe Moisturizing Cream | Daily Face and Body Moisturizer for Dry Skin With Hyaluronic Acid | Fragrance Free, 539 Grams"
            image="https://m.media-amazon.com/images/I/51lfVlvyrAL._AC_UY218_.jpg"
            price={29.73}
            rating={4}
          />
          <Product
            id={2}
            title="Polyte Premium Lint Free Microfiber Washcloth Face Towel, 13 x 13 in, Set of 6 (Grey)"
            image="https://images-na.ssl-images-amazon.com/images/I/915ytdgp6CL._AC_SX569_.jpg"
            price={14.99}
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id={3}
            title="Bliss Collections Daily Planner Tear Off Pad, 50 Undated Sheets, Desk Notepad, Motivational Daily Calendar, Task Planner, To Do List, Productivity Schedule Organizer, Meal Planner, 8.5x11, Vertical"
            image="https://images-na.ssl-images-amazon.com/images/I/61HICHVpMtL._AC_SX679_.jpg"
            price={15.99}
            rating={5}
          />
          <Product
            id={4}
            title="Measuring Spoons: U-Taste 18/8 Stainless Steel Measuring Spoons Set of-7 Piece: 1/8 tsp, 1/4 tsp, 1/2 tsp, 3/4 tsp, 1 tsp, 1/2 tbsp & 1 tbsp Dry and Liquid Ingredients"
            image="https://images-na.ssl-images-amazon.com/images/I/71Bj8zFFu8L._AC_SX679_.jpg"
            price={16.98}
            rating={5}
          />
          <Product
            id={5}
            title="Smithcraft Premium Quality Metal Lemon Squeezer - Lime Presser - Manual Citrus Juice Press Hand-held Lime Juicer Color Yellow"
            image="https://images-na.ssl-images-amazon.com/images/I/61TsqJgWMjL._AC_SX679_.jpg"
            price={14.99}
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id={6}
            title="Aphogee Serious Hair Care Double Bundle (Balancing Moisturizer 8oz and Two step Protein Treatment 4oz)"
            image="https://images-na.ssl-images-amazon.com/images/I/41E-Ls19LoL._AC_.jpg"
            price={29.99}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
