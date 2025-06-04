import BookCards from "../shared/BookCards";
import React, { useEffect, useState } from "react";

const BestSeller = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch(`${API_BASE_URL}/all-books`).then(res => res.json()).then(data => setBooks(data.slice(0, 8)))
    }, [])

    return (
        <>
            <BookCards books={books} headline={"Best Seller Books"} />
        </>
    )
}

export default BestSeller