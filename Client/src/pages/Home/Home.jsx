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

// ... other imports



export const Home = () => {
  return (
    <div>
      <Banner/>
      <BestSeller/>
      <FavoriteBook/>
      <PopularBook/>

      <BookCategories/>
    
      <PromoBanner/>
  
      <OtherBooks/>
      <Review/>
    </div>
  )
}



//todo list 
// 1. list with category
// 2.   payment process and other button active