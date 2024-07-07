import BooksByCategory from "./BooksByCategory";
import React from "react";

const BookCategories = () => {
    return (
        <div>
        
            <BooksByCategory category="Fiction" headline="Fiction Books" />
            <BooksByCategory category="Mystery" headline="Mystery Books" />
           
            <BooksByCategory category="History" headline="History Books" />
        
            <BooksByCategory category="Classic" headline="Classic Books" />
         
            <BooksByCategory category="Self-help" headline="Self-help Books" />
            <BooksByCategory category="Autobiography" headline="AutoBiography Books" />
           
            <BooksByCategory category="Memoir" headline="Memoir Books" />
            <BooksByCategory category="Horror" headline="Horror Books" />
            <BooksByCategory category="Science Fiction" headline="Science Fiction Books" />
            <BooksByCategory category="Thriller" headline="Thriller Books" />
            <BooksByCategory category="Biography" headline="Biography Books" />
            <BooksByCategory category="Fantasy" headline="Fantasy Books" />
            <BooksByCategory category="Business" headline="Business Books" />
            <BooksByCategory category="Historical Fiction" headline="Historical Fiction Books" />
            <BooksByCategory category="Dystopian" headline="Dystopian Books" />
            <BooksByCategory category="Dystopian Fiction" headline="Dystopian Fiction Books" />
            <BooksByCategory category="Political Satire" headline="Political Satire Books" />
            <BooksByCategory category="Programming" headline="Programming Books" />
            <BooksByCategory category="Hobbies" headline="Hobbies Books" />
            <BooksByCategory category="Poetry" headline="Poetry Books" />
            <BooksByCategory category="Children's Books" headline="Children's Books" />
            <BooksByCategory category="Travel" headline="Travel Books" />
            <BooksByCategory category="Art and Design" headline="Art and Design Books" />
            <BooksByCategory category="Religion and spirituality" headline="Religion and Spirituality Books" />
            <BooksByCategory category="Non-fiction" headline="Non-fiction Books" />
            <BooksByCategory category="Science" headline="Science Books" />
        </div>
    );
};

export default BookCategories;
