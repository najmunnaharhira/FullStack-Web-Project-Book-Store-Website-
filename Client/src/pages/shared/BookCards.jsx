import React from "react";
import { FaCartShopping, FaHeart, FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

const BookCards = ({ headline, books }) => {
  return (
    <div className="my-16 px-4 lg:px-24">
      <h2 className="text-5xl my-5 font-bold text-center">{headline}</h2>

      {/* Cards */}
      <div className="mt-20">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          className="w-full h-full"
        >
          {books.map((book) => (
            <SwiperSlide className="text-center relative" key={book.id}>
              <Link to={`/book/${book.id}`} className="cursor-pointer block">
                <div className="bg-gray-100 p-8 rounded-lg relative">
                  <img src={book.imageURL} alt={book.bookTitle} className="w-full" />
                  <div className="absolute top-3 right-3 bg-blue-700 hover:bg-black p-2 rounded">
                    <FaCartShopping className="w-4 h-4 text-white" />
                  </div>
                </div>

                <div className="mt-3 text-left">
                  <h3 className="text-black font-semibold">{book.bookTitle}</h3>
                  <p>{book.authorName}</p>
                </div>

                <div className="flex justify-between items-center px-4 py-2 bg-gray-200 mt-3">
                  <div>
                    {/* Discounted Price */}
                    <p className="font-bold text-blue-700">
                      Tk.{book.discountedPrice || (Math.floor(Math.random() * 101) + 230)}.00
                    </p>
                    
                    {/* Original Price (crossed out) */}
                    {book.discountedPrice && (
                      <p className="text-sm text-gray-500 line-through">
                        Tk.{book.bookPrice || (Math.floor(Math.random() * 101) + 380)}.00
                      </p>
                    )}
                  </div>

                  {/* Wishlist Icon */}
                  <div className="bg-red-500 hover:bg-red-700 p-2 rounded">
                    <FaHeart
                      className="w-4 h-4 text-white cursor-pointer"
                      onClick={() => alert("Added to Wishlist")}
                    />
                  </div>
                </div>

                {/* Review Stars */}
                {book.rating >= 3 && book.rating <= 5 && (
                  <div className="flex items-center mt-2">
                    {Array.from({ length: book.rating }, (_, index) => (
                      <FaStar key={index} className="text-yellow-500" />
                    ))}
                    <span className="ml-2 text-gray-600">
                      ({book.reviews} reviews)
                    </span>
                  </div>
                )}
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BookCards;
