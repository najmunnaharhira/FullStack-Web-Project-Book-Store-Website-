import BookCards from "../shared/BookCards";
import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../lib/url";

const PopularBook = () => {
    // Add loading and error states for a better user experience
    const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`${API_BASE_URL}/all-books`)
            .then(res => {
                // Check if the response was successful
                if (!res.ok) {
                    throw new Error('Failed to fetch popular books');
                }
                return res.json();
            })
            .then(data => {
                // Ensure the data is an array before trying to slice it
                if (Array.isArray(data)) {
                    setBooks(data.slice(20, 28));
                }
            })
            .catch(err => {
                // If an error occurs, save it to the state
                console.error("Fetch error:", err);
                setError(err.message);
            })
            .finally(() => {
                // This runs regardless of success or failure
                setIsLoading(false);
            });
    }, []); // The empty dependency array means this runs once on mount

    // 1. Show a loading message while fetching
    if (isLoading) {
        return <p>Loading popular books...</p>;
    }

    // 2. Show an error message if the fetch failed
    if (error) {
        return <p>Error: {error}</p>;
    }

    // 3. Show the books once the data is successfully loaded
    return (
        <>
            {/* A slightly nicer headline */}
            <BookCards books={books} headline={"Popular Books"} />
        </>
    );
};

export default PopularBook;