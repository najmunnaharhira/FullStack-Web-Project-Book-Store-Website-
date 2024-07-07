import React, { useState, useEffect } from 'react';

const BookReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    rating: 0,
    comment: '',
    image: null, // Assuming you allow image upload
  });

  // Function to handle star rating
  const StarRating = ({ value, onChange }) => {
    const stars = [1, 2, 3, 4, 5];

    return (
      <div>
        {stars.map((star) => (
          <span
            key={star}
            className={`cursor-pointer ${star <= value ? 'text-yellow-500' : 'text-gray-300'}`}
            onClick={() => onChange(star)}
          >
            &#9733;
          </span>
        ))}
      </div>
    );
  };

  // Fetch book reviews from backend on component mount
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('http://localhost:5000/reviews'); // Replace with your backend endpoint
        if (response.ok) {
          const data = await response.json();
          setReviews(data);
        } else {
          throw new Error('Failed to fetch reviews');
        }
      } catch (error) {
        console.error('Error fetching reviews:', error.message);
      }
    };
    fetchReviews();
  }, []);

  // Handle form submission for adding a new review
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('rating', newReview.rating);
      formData.append('comment', newReview.comment);
      if (newReview.image) {
        formData.append('image', newReview.image);
      }

      const response = await fetch('http://localhost:5000/reviews', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setReviews([...reviews, data]); // Update reviews state with new review
        setNewReview({ rating: 0, comment: '', image: null }); // Reset form fields
      } else {
        throw new Error('Failed to add review');
      }
    } catch (error) {
      console.error('Error adding review:', error.message);
    }
  };

  // Handle file upload for image
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setNewReview({ ...newReview, image: file });
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8">Book Reviews</h1>

      {/* Form to add a new review */}
      <form onSubmit={handleSubmit} encType="multipart/form-data" className="mb-8">
        <div className="flex items-center mb-4">
          <span className="mr-4">Your Rating:</span>
          <StarRating value={newReview.rating} onChange={(value) => setNewReview({ ...newReview, rating: value })} />
        </div>
        <div className="mb-4">
          <textarea
            value={newReview.comment}
            onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
            placeholder="Write your review..."
            rows={4}
            className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <input type="file" onChange={handleImageChange} className="py-2" />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
          Post Review
        </button>
      </form>

      {/* Display existing reviews */}
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white p-6 rounded shadow-lg">
            <div className="flex items-center mb-4">
              <StarRating value={review.rating} readOnly />
            </div>
            <p className="text-gray-800 mb-2">{review.comment}</p>
            {review.imageUrl && (
              <div>
                <img src={review.imageUrl} alt="Review Image" className="max-w-full h-auto rounded-lg" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookReviews;
