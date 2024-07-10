import BookCards from "../shared/BookCards";
import React, { useEffect, useState } from "react";

const NewReleaseBook = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setBooks(data.slice(30,38)))
    }, [])

    return (
        <>
            <BookCards books={books} headline={"NewReleaseBook"} />
        </>
    )
}

export default NewReleaseBook