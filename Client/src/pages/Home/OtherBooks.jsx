import BookCards from "../shared/BookCards";
import React, { useEffect, useState } from "react";

const OtherBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/all-books")
            .then(res => res.ok ? res.json() : [])
            .then(data => setBooks(Array.isArray(data) ? data.slice(5, 12) : []))
            .catch(() => setBooks([]));
    }, [])

    return (
        <div className='mt-24'>
            <BookCards books={books} headline={"Other Books"} />
        </div>
    )
}

export default OtherBooks
//all-books