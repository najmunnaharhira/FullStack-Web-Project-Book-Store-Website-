import BestSeller from "./BestSeller";
import BookCards from "../shared/BookCards";
import BookCategories from "./BookCategories";
import FavoriteBook from "./FavoriteBook";
import NewReleaseBook from "./NewReleaseBook";
import OtherBooks from "./OtherBooks";
import PopularBook from "./PopularBook";
import PromoBanner from "./PromoBanner";
import React from "react";
import Review from "./Review";
import TrendingBook from "./TrendingBook";
import UpComingBook from "./UpComingBook";
import backgroundimage from "../../assets/finnal.gif";
import { Banner } from "./Banner";

export const Home = () => {
  const divStyle = {
    backgroundImage: `url(${backgroundimage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '10vh',  // Ensure the background covers the entire viewport height
    // You can add more styling properties as needed
  };

  return (
    <div style={divStyle}>
      <Banner />
      {/* Place the BestSeller component here */}
      <BestSeller />
      <FavoriteBook />
      <PopularBook />
      <NewReleaseBook />
      <UpComingBook />
      <TrendingBook />
      <BookCategories />
      <PromoBanner />
      <OtherBooks />
      <Review />
    </div>
  );
};
//todo list 

// 2.   payment process and other button active
