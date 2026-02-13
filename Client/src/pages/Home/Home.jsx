import BestSeller from "./BestSeller";
import BookCards from "../shared/BookCards";
import BookCategories from "./BookCategories";
import FavoriteBook from "./FavoriteBook";
import OtherBooks from "./OtherBooks";
import PopularBook from "./PopularBook";
import PromoBanner from "./PromoBanner";
import React from "react";
import Review from "./Review";
import { Banner } from "./Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <BestSeller />
      <FavoriteBook />
      <PopularBook />
      <BookCategories />
      <PromoBanner />
      <OtherBooks />
      <Review />
      {/* Placeholder for payment process and other buttons */}
      <div className="payment-buttons">
        <button onClick={() => alert('Proceed to Payment')} className="btn btn-primary">
          Proceed to Payment
        </button>
        <button onClick={() => alert('Other Action')} className="btn btn-secondary">
          Other Action
        </button>
      </div>
    </div>
  );
};

export default Home;
