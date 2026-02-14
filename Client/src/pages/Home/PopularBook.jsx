import BookCards from "../shared/BookCards";
import React, { useEffect, useState } from "react";

const PopularBook = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/all-books")
            .then(res => res.ok ? res.json() : [])
            .then(data => setBooks(Array.isArray(data) ? data.slice(20, 28) : []))
            .catch(() => setBooks([]));
    }, [])

    return (
        <>
            <BookCards books={books} headline={"PopularBook"} />
        </>
    )
}

export default PopularBook