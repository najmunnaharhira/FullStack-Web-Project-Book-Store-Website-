import BookCards from "../shared/BookCards";
import React, { useEffect, useState } from "react";

const BooksByCategory = ({ category, headline }) => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const res = await fetch("http://localhost:5000/all-books");
                const data = await res.json();
                const filteredBooks = data.filter(book => book.category === category);

                const validBooks = await Promise.all(filteredBooks.map(async book => {
                    const isImageValid = await checkUrl(book.imageURL);
                    const isPdfValid = await checkUrl(book.pdfURL);
                    return isImageValid && isPdfValid ? book : null;
                }));

                const uniqueBooks = removeDuplicates(validBooks.filter(book => book !== null));
                setBooks(uniqueBooks);
            } catch (error) {
                console.error("Error fetching books:", error);
            }
        };

        fetchBooks();
    }, [category]);

    const checkUrl = async (url) => {
        try {
            const response = await fetch(url, { method: 'HEAD' });
            return response.ok;
        } catch (error) {
            return false;
        }
    };

    const removeDuplicates = (books) => {
        const seen = new Set();
        return books.filter(book => {
            if (seen.has(book.id)) { // Assuming 'id' is the unique identifier for books
                return false;
            }
            seen.add(book.id);
            return true;
        });
    };

    return (
        <>
            <BookCards books={books} headline={headline} isFree={false} />
        </>
    );
};

export default BooksByCategory;
