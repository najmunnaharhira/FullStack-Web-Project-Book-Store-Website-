import BookCards from "../shared/BookCards";
import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../lib/url";

// UpComingBook.jsx

// Assuming API_BASE_URL is 'http://localhost:5000' from this file

const UpComingBook = () => {
    const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Best practice: add loading state
    const [error, setError] = useState(null);       // Best practice: add error state

    useEffect(() => {
        // --- FIX IS HERE ---
        fetch(`${API_BASE_URL}/all-books`) // Correct: Single slash
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(data => {
                // Ensure data is an array before slicing
                if (Array.isArray(data)) {
                    setBooks(data.slice(50, 58));
                }
            })
            .catch(err => {
                console.error("Fetch error:", err);
                setError(err.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <>
            <BookCards books={books} headline={"Upcoming Books"} />
        </>
    );
};

export default UpComingBook;