import BookCards from "../shared/BookCards";
import React, { useEffect, useState } from "react";

const UpComingBook= () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setBooks(data.slice(50,58)))
    }, [])

    return (
        <>
            <BookCards books={books} headline={"UpComingBook"} />
        </>
    )
}

export default UpComingBook