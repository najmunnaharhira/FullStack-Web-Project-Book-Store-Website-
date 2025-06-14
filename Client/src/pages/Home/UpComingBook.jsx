import BookCards from "../shared/BookCards";
import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../lib/url";

const UpComingBook= () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch(`${API_BASE_URL}//all-books`).then(res => res.json()).then(data => setBooks(data.slice(50,58)))
    }, [])

    return (
        <>
            <BookCards books={books} headline={"UpComingBook"} />
        </>
    )
}

export default UpComingBook