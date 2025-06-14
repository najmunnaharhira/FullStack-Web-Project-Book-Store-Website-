import BookCards from "../shared/BookCards";
import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../lib/url";

    // Add states for loading and error handling
    const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`${API_BASE_URL}/all-books`)
            .then(res => {
                // Check for server errors (e.g., 404, 500)
                if (!res.ok) {
                    throw new Error('Failed to fetch books');
                }
                return res.json();
            })
            .then(data => {
                // Safely check if the response is an array
                if (Array.isArray(data)) {
                    setBooks(data.slice(5, 12));
                }
            })
            .catch(err => {
                // Catch network errors or errors thrown above
                console.error("Fetch error:", err);
                setError(err.message);
            })
            .finally(() => {
                // This always runs, ensuring the loading state is turned off
                setIsLoading(false);
            });
    }, []);

    // 1. Show a loading indicator while fetching data
    if (isLoading) {
        return <div className='mt-24'><p>Loading other books...</p></div>;
    }

    // 2. Show an error message if the fetch failed
    if (error) {
        return <div className='mt-24'><p>Error: {error}</p></div>;
    }

    // 3. Show the books only after they have been successfully loaded
    return (
        <div className='mt-24'>
            <BookCards books={books} headline={"Other Books"} />
        </div>
    );
};

export default OtherBooks;