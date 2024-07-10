import BookCards from "../shared/BookCards";
import React, { useEffect, useState } from "react";

const TrendingBook= () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setBooks(data.slice(40,48)))
    }, [])

    return (
        <>
            <BookCards books={books} headline={"TrendingBooks"} />
        </>
    )
}

export default TrendingBook