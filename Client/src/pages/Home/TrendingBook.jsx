import BookCards from "../shared/BookCards";
import React, { useEffect, useState } from "react";

const PopularBook = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setBooks(data.slice(20,28)))
    }, [])

    return (
        <>
            <BookCards books={books} headline={"PopularBook"} />
        </>
    )
}

export default PopularBook