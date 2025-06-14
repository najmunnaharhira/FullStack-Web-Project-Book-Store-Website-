import BookCards from "../shared/BookCards";
import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../lib/url";

const BooksByCategory = ({ category, headline }) => {
    // Add states for loading and error handling
    const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Skip fetching if the category is not set
        if (!category) {
            setIsLoading(false);
            setBooks([]);
            return;
        }
        
        const fetchBooks = async () => {
            setIsLoading(true);
            setError(null);
            
            try {
                // REASON: Use the API's built-in filtering. This is much faster.
                // The server now does the work of finding the right books.
                const response = await fetch(`${API_BASE_URL}/all-books?category=${encodeURIComponent(category)}`);

                if (!response.ok) {
                    throw new Error(`Failed to fetch books for category: ${category}`);
                }
                
                const data = await res.json();
                setBooks(data); // The data is already filtered, so we can set it directly.

            } catch (error) {
                console.error("Error fetching books by category:", error);
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchBooks();
        
        // This effect re-runs whenever the 'category' prop changes
    }, [category]);

    // REASON: No longer needed. This heavy work should be done once on the backend during upload.
    // const checkUrl = ...

    // REASON: No longer needed. The database should ideally not contain duplicates.
    // If it does, it's more efficient to fix it with a `SELECT DISTINCT` query on the backend.
    // const removeDuplicates = ...

    // --- Conditional Rendering for better UX ---

    if (isLoading) {
        return <p>Loading {headline}...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }
    
    // Show a message if no books are found for that category
    if (books.length === 0) {
        return <p>No books found for the category "{headline}".</p>
    }

    return (
        <>
            <BookCards books={books} headline={headline} isFree={false} />
        </>
    );
};

export default BooksByCategory;