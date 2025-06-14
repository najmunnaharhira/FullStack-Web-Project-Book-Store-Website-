import BookCards from "../shared/BookCards";
import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../lib/url";

const PopularBook = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch(`${API_BASE_URL}//all-books`).then(res => res.json()).then(data => setBooks(data.slice(20,28)))
    }, [])

    return (
        <>
            <BookCards books={books} headline={"PopularBook"} />
        </>
    )
}

export default PopularBook