import React from "react";
import favBook from "../../assets/favoritebook.jpg";
import { Link } from "react-router-dom";

const FavoriteBook = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
        <div className='md:w-1/2'>
            <img src={favBook} alt="" className='rounded md:w-10/12' />
        </div>
        <div className='space-y-6 md:w-1/2'>
            <h2 className='text-5xl my-5 font-bold md:w-3/4 leading-snug'>Find Your Favorite <span className='text-blue-600'>Book Here!</span></h2>
            <p className='mb-10 text-lg md:w-5/6'>
              Gyan Kosh Library, located in Katalgonj, Chittagong, is renowned for its extensive collection of books especially English Medium Book. 
              This library serves as a beacon of knowledge and a sanctuary for students and book lovers alike. 
              It offers a serene environment, perfect for reading and studying, making it a cherished resource in the community.
              Additionally, Gyan Kosh Library is known for its bookstore, where you can purchase books at reasonable prices. 
              Whether you are looking for the latest bestsellers or timeless classics, you will find a wide selection to choose from without breaking the bank.
            </p>
            <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
              <div>
                <h3 className='text-3xl font-bold '>800+</h3>
                <p className='text-base'>Book Listing</p>
              </div>
              <div>
                <h3 className='text-3xl font-bold '>550+</h3>
                <p className='text-base'>Registered Users</p>
              </div>
              <div>
                <h3 className='text-3xl font-bold '>1200+</h3>
                <p className='text-base'>PDFs Downloaded</p>
              </div>
            </div>
            <Link to="/shop" className='block mt-8'>
              <button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>
                Explore Now
              </button>
            </Link>
        </div>
    </div>
  )
}

export default FavoriteBook
