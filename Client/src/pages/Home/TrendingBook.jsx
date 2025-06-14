import BookCards from "../shared/BookCards";
import React, { useEffect, useState } from "react";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const TrendingBook= () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch(`${API_BASE_URL}//all-books`

        ).then(res => res.json()).then(data => setBooks(data.slice(40,48)))
    }, [])

    return (
        <>
            <BookCards books={books} headline={"TrendingBooks"} />
        </>
    )
}

export default TrendingBook