import BestSeller from "./BestSeller";
import BookCards from "../shared/BookCards";
import BookCategories from "./BookCategories";
import FavoriteBook from "./FavoriteBook";
import LoginNavbar from "./LoginNavbar";
import NewReleaseBook from "./NewReleaseBook";
import OtherBooks from "./OtherBooks";
import PopularBook from "./PopularBook";
import PromoBanner from "./PromoBanner";
import React from "react";
import Review from "./Review";
import TrendingBook from "./TrendingBook";
import UpComingBook from "./UpComingBook";
import backgroundimage from "../../assets/finnal.gif";

// HomeAfterLogin.js

export const HomeAfterLogin = () => {
  const divStyle = {
    backgroundImage: `url(${backgroundimage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "100vh", // Ensure the background covers the full viewport height
  };

  return (
    <div style={divStyle}>
      <LoginNavbar /> {/* Using LoginNavbar for logged-in users */}
      <div className="container mx-auto px-4">
        <section>
          <BestSeller />
        </section>
        <section>
          <FavoriteBook />
        </section>
        <section>
          <PopularBook />
        </section>
        <section>
          <NewReleaseBook />
        </section>
        <section>
          <UpComingBook />
        </section>
        <section>
          <TrendingBook />
        </section>
        <section>
          <BookCategories />
        </section>
        <section>
          <PromoBanner />
        </section>
        <section>
          <OtherBooks />
        </section>
        <section>
          <Review />
        </section>
        {/* Add more sections if needed */}
      </div>
    </div>
  );
};

export default HomeAfterLogin;
