import BannerCard from "../shared/BannerCard";
import React, { useState, useEffect } from "react";

const categories = [
    "Fantasy",
    "Horror",
    "Self-help",
    "Memoir",
    "Science Fiction",
    "Thriller",
    "Non-fiction",
    "Programming",
    "Poetry",
    "Children's books",
    "Travel",
    "Religion and spirituality",
    "Science",
    "Art and design"
];

export const Banner = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");

    const handleSearch = async () => {
        try {
            const response = await fetch(`http://localhost:5000/all-books?query=${searchQuery}`);
            if (response.ok) {
                const data = await response.json();
                setSearchResults(data);
                console.log("Search Results:", data);
            } else {
                console.error("Error fetching search results:", response.statusText);
            }
        } catch (error) {
            console.error("Error fetching search results:", error);
        }
    };

    const handleCategoryChange = async (event) => {
        const category = event.target.value;
        setSelectedCategory(category);
        try {
            const response = await fetch(`http://localhost:5000/all-books?category=${category}`);
            if (response.ok) {
                const data = await response.json();
                setSearchResults(data);
                console.log("Category Results:", data);
            } else {
                console.error("Error fetching category results:", response.statusText);
            }
        } catch (error) {
            console.error("Error fetching category results:", error);
        }
    };

    return (
        <div className='bg-teal-100 px-4 lg:px-24 flex items-center'>
            <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-12 py-40'>
                {/* Right side */}
                <div className='md:w-1/2 h-full'>
                    <BannerCard />
                </div>

                {/* Left side */}
                <div className='md:w-1/2 space-y-8 bg-teal-100'>
                    <h1 className='lg:text-6xl text-5xl font-bold text-black mb-5 lg:leading-tight leading-snug'>
                        Buy and sell your books <span className='text-blue-700'>for the best prices</span>
                    </h1>
                    <p>
                        Find and read more books you will love, and keep track of the books you want to read. Be part of the world's largest community of book lovers on Goodreads.
                    </p>
                    <div className='flex items-center'>
                        <input
                            type="search"
                            placeholder='Search a book here'
                            className='py-2 px-2 rounded-s-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700'
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button
                            className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'
                            onClick={handleSearch}
                        >
                            Search
                        </button>
                    </div>

                    <div className='mt-8'>
                        <select
                            className='py-2 px-2 rounded-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700'
                            value={selectedCategory}
                            onChange={handleCategoryChange}
                        >
                            <option value="" disabled selected>Browse Category</option>
                            {categories.map((category, index) => (
                                <option key={index} value={category}>{category}</option>
                            ))}
                        </select>
                    </div>

                    {/* Search Results */}
                    {searchResults.length > 0 && (
                        <div className='mt-8'>
                            <h2 className='text-2xl font-bold mb-4'>Search Results</h2>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                                {searchResults.map((book, index) => (
                                    <div key={index} className='bg-white p-4 rounded shadow'>
                                        <img src={book.imageURL} alt={book.bookTitle} className='w-full h-64 object-cover rounded mb-4' />
                                        <h3 className='text-xl font-semibold'>{book.bookTitle}</h3>
                                        <h4 className='text-xl font-semibold'>{book.category}</h4>
                                        <p className='text-gray-700'>{book.authorName}</p>
                                        <p className='text-gray-600'>{book.bookDescription}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Banner;
