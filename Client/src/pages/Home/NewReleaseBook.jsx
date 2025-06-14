import BookCards from "../shared/BookCards";
import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../lib/url";

const NewReleaseBook = () => {
    // Add states for loading and error handling
    const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`${API_BASE_URL}/all-books`)
            .then(res => {
                // Check if the server responded with an error
                if (!res.ok) {
                    throw new Error('Failed to fetch new releases');
                }
                return res.json();
            })
            .then(data => {
                // Safely ensure data is an array before slicing
                if (Array.isArray(data)) {
                    setBooks(data.slice(30, 38));
                }
            })
            .catch(err => {
                // Catch any network or server errors
                console.error("Fetch error:", err);
                setError(err.message);
            })
            .finally(() => {
                // This always runs, so the loading state is always turned off
                setIsLoading(false);
            });
    }, []);

    // 1. Display a loading message while data is being fetched
    if (isLoading) {
        return <p>Loading New Releases...</p>;
    }

    // 2. Display an error message if the fetch failed
    if (error) {
        return <p>Error: {error}</p>;
    }

    // 3. Display the books only after they are successfully loaded
    return (
        <>
            {/* A slightly improved headline for readability */}
            <BookCards books={books} headline={"New Release Books"} />
        </>
    );
};

export default NewReleaseBook;