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
import { Banner } from "./Banner";

// ... other imports



export const Home = () => {
  return (
    <div>
      <Banner/>
      <BestSeller/>
      <FavoriteBook/>
      <PopularBook/>
<NewReleaseBook/>
<UpComingBook/>
<TrendingBook/>
      <BookCategories/>
    
      <PromoBanner/>
  
      <OtherBooks/>
      <Review/>
    </div>
  )
}



//todo list 

// 2.   payment process and other button active