import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

import {
  Button,
  Label,
  Select,
  TextInput,
  Textarea,
} from "flowbite-react";

// Get the API base URL from Vite environment variables
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const EditBooks = () => {
  const { id } = useParams();
  const {
    bookTitle,
    authorName,
    imageURL,
    category,
    bookDescription,
    bookPDFURL,
  } = useLoaderData();

  const bookCategories = [
    "Fiction",
    "Non-fiction",
    "Mystery",
    "Programming",
    "Science fiction",
    "Fantasy",
    "Horror",
    "Biography",
    "Autobiography",
    "History",
    "Self-help",
    "Business",
    "Memoir",
    "Poetry",
    "Children's books",
    "Travel",
    "Religion and spirituality",
    "Science",
    "Art and design",
  ];

  const [selectedBookCategory, setSelectedBookCategory] = useState(
    category || bookCategories[0]
  );

  const handleChangeSelectedValue = (event) => {
    setSelectedBookCategory(event.target.value);
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const updatedBook = {
      bookTitle: form.bookTitle.value,
      authorName: form.authorName.value,
      imageURL: form.imageURL.value,
      category: form.categoryName.value,
      bookDescription: form.bookDescription.value,
      bookPDFURL: form.bookPDFURL.value,
    };

    fetch(`${API_BASE_URL}/book/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedBook),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Book updated:", data);
        alert("Book updated successfully!");
      })
      .catch((err) => {
        console.error("Update failed:", err);
        alert("Failed to update book.");
      });
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Update Book Information</h2>
      <form
        className="flex lg:w-[1180px] flex-col flex-wrap gap-4"
        onSubmit={handleUpdate}
      >
        {/* First Row */}
        <div className="flex gap-8">
          {/* Book Title */}
          <div className="lg:w-1/2">
            <Label htmlFor="bookTitle" value="Book Title" className="mb-2 block" />
            <TextInput
              id="bookTitle"
              name="bookTitle"
              type="text"
              placeholder="Book Name"
              defaultValue={bookTitle}
              required
            />
          </div>

          {/* Author Name */}
          <div className="lg:w-1/2">
            <Label htmlFor="authorName" value="Author Name" className="mb-2 block" />
            <TextInput
              id="authorName"
              name="authorName"
              type="text"
              placeholder="Author Name"
              defaultValue={authorName}
              required
            />
          </div>
        </div>

        {/* Second Row */}
        <div className="flex gap-8">
          {/* Image URL */}
          <div className="lg:w-1/2">
            <Label htmlFor="imageURL" value="Book Image URL" className="mb-2 block" />
            <TextInput
              id="imageURL"
              name="imageURL"
              type="text"
              placeholder="Image URL"
              defaultValue={imageURL}
              required
            />
          </div>

          {/* Book Category */}
          <div className="lg:w-1/2">
            <Label htmlFor="categoryName" value="Book Category" className="mb-2 block" />
            <Select
              id="categoryName"
              name="categoryName"
              value={selectedBookCategory}
              onChange={handleChangeSelectedValue}
              required
            >
              {bookCategories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </Select>
          </div>
        </div>

        {/* Description */}
        <div>
          <Label htmlFor="bookDescription" value="Book Description" className="mb-2 block" />
          <Textarea
            id="bookDescription"
            name="bookDescription"
            placeholder="Book Description"
            defaultValue={bookDescription}
            required
            rows={4}
          />
        </div>

        {/* PDF URL */}
        <div>
          <Label htmlFor="bookPDFURL" value="Book PDF Link" className="mb-2 block" />
          <TextInput
            id="bookPDFURL"
            name="bookPDFURL"
            type="text"
            placeholder="Paste Book PDF URL here"
            defaultValue={bookPDFURL}
            required
          />
        </div>

        {/* Submit Button */}
        <Button type="submit" className="mt-5">
          Update Book
        </Button>
      </form>
    </div>
  );
};

export default EditBooks;
