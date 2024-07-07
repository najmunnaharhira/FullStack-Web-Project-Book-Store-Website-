import AnniversaryImage from "../../assets/GiftCards/Anniversary.jpg";
import BirthdayImage from "../../assets/GiftCards/Birthday.jpg";
import BoishakhiImage from "../../assets/GiftCards/Boishakhi.png";
import CongratulationsImage from "../../assets/GiftCards/Congratulations.png";
import EidImage from "../../assets/GiftCards/Eid.png";
import FriendshipImage from "../../assets/GiftCards/Friendship.jpg";
import GraduationImage from "../../assets/GiftCards/Graduation.jpg";
import HolidayImage from "../../assets/GiftCards/Holiday.jpeg";
import LibraryImage from "../../assets/GiftCards/Library.jpg";
import LoveImage from "../../assets/GiftCards/Love.jpeg";
import React, { useState } from "react";
import SalamyImage from "../../assets/GiftCards/Salamy.jpeg";
import SpecialImage from "../../assets/GiftCards/Special.png";
import ThankYouImage from "../../assets/GiftCards/ThankYou.png";
import ValentineImage from "../../assets/GiftCards/Valentine.png";
import WeddingImage from "../../assets/GiftCards/Wedding.jpg";
import { Link, useNavigate } from "react-router-dom";

// Import all gift card images

const GiftCards = () => {
  const [selectedGiftCards, setSelectedGiftCards] = useState([]);
  const navigate = useNavigate();

  const [giftCards] = useState([
    { id: 1, name: 'Birthday Gift Card', amount: 50, color: 'blue', image: BirthdayImage },
    { id: 2, name: 'Anniversary Gift Card', amount: 150, color: 'red', image: AnniversaryImage },
    { id: 3, name: 'Graduation Gift Card', amount: 100, color: 'green', image: GraduationImage },
    { id: 4, name: 'Holiday Gift Card', amount: 160, color: 'blue', image: HolidayImage },
    { id: 5, name: 'Special Gift Card', amount: 200, color: 'blue', image: SpecialImage },
    { id: 6, name: 'Love Gift Card', amount: 80, color: 'blue', image: LoveImage },
    { id: 7, name: 'Gyan Kosh Library', amount: 250, color: 'red', image: LibraryImage },
    { id: 8, name: 'Eid Gift Card', amount: 120, color: 'blue', image: EidImage },
    { id: 9, name: 'Salamy Gift Card', amount: 180, color: 'red', image: SalamyImage },
    { id: 10, name: 'Wedding Gift Card', amount: 300, color: 'green', image: WeddingImage },
    { id: 11, name: 'Friendship Gift Card', amount: 70, color: 'blue', image: FriendshipImage },
    { id: 12, name: 'ThankYou/Appreciation Gift Card', amount: 90, color: 'green', image: ThankYouImage },
    { id: 13, name: 'Valentine Gift Card', amount: 60, color: 'red', image: ValentineImage },
    { id: 14, name: 'Boishakhi Gift Card', amount: 110, color: 'blue', image: BoishakhiImage },
    { id: 15, name: 'Congratulations Gift Card', amount: 130, color: 'green', image: CongratulationsImage },
  ]);

  // Mock reviews for demonstration
  const [reviews, setReviews] = useState({
    1: [
      { id: 1, user: 'Alice', comment: 'Great gift card for birthdays!' },
      { id: 2, user: 'Bob', comment: 'I loved using this for my friend\'s birthday.' },
    ],
    2: [
      { id: 1, user: 'Charlie', comment: 'Perfect for anniversaries, my spouse loved it!' },
      { id: 2, user: 'Eve', comment: 'Highly recommended for anniversaries.' },
    ],
    3: [
      { id: 1, user: 'David', comment: 'Ideal for graduation gifts!' },
      { id: 2, user: 'Sophie', comment: 'Helped celebrate my graduation perfectly.' },
    ],
    4: [
      { id: 1, user: 'James', comment: 'Perfect for the holiday season!' },
      { id: 2, user: 'Emily', comment: 'Used this for Christmas gifts, very convenient.' },
    ],
    5: [
      { id: 1, user: 'Michael', comment: 'Special gift card for special occasions!' },
      { id: 2, user: 'Emma', comment: 'Loved using this for a special event.' },
    ],
    6: [
      { id: 1, user: 'Robert', comment: 'Love gift card is amazing!' },
      { id: 2, user: 'Olivia', comment: 'Perfect for Valentine\'s Day.' },
    ],
    7: [
      { id: 1, user: 'William', comment: 'Great for library donations!' },
      { id: 2, user: 'Ava', comment: 'Helped a lot in supporting the library.' },
    ],
    8: [
      { id: 1, user: 'Joseph', comment: 'Ideal for Eid gifts!' },
      { id: 2, user: 'Isabella', comment: 'Used this for Eid presents, very useful.' },
    ],
    9: [
      { id: 1, user: 'Thomas', comment: 'Perfect for Salamy gifts!' },
      { id: 2, user: 'Mia', comment: 'Great for giving Salamy gifts.' },
    ],
    10: [
      { id: 1, user: 'Charles', comment: 'Wonderful for wedding gifts!' },
      { id: 2, user: 'Amelia', comment: 'Used this for a wedding, highly recommended.' },
    ],
    11: [
      { id: 1, user: 'John', comment: 'Great for celebrating friendship!' },
      { id: 2, user: 'Sarah', comment: 'Perfect for friends, very thoughtful.' },
    ],
    12: [
      { id: 1, user: 'Michael', comment: 'Thank you card was perfect!' },
      { id: 2, user: 'Sophia', comment: 'Highly appreciated by the recipient.' },
    ],
    13: [
      { id: 1, user: 'David', comment: 'Valentine\'s card is lovely!' },
      { id: 2, user: 'Emily', comment: 'Perfect for expressing love on Valentine\'s Day.' },
    ],
    14: [
      { id: 1, user: 'James', comment: 'Boishakhi card is culturally rich!' },
      { id: 2, user: 'Olivia', comment: 'Celebrating Boishakh with this card was great.' },
    ],
    15: [
      { id: 1, user: 'William', comment: 'Congratulations card is perfect!' },
      { id: 2, user: 'Ava', comment: 'Great for celebrating achievements.' },
    ],
  });

  // Function to handle adding more reviews
  const handleAddReview = (giftCardId, comment) => {
    const newReview = { id: reviews[giftCardId].length + 1, user: 'New User', comment: comment };
    setReviews((prevReviews) => ({
      ...prevReviews,
      [giftCardId]: [...prevReviews[giftCardId], newReview],
    }));
  };

  const handleSelectGiftCard = (giftCard) => {
    const isSelected = selectedGiftCards.find((card) => card.id === giftCard.id);
    if (isSelected) {
      setSelectedGiftCards(selectedGiftCards.filter((card) => card.id !== giftCard.id));
    } else {
      setSelectedGiftCards([...selectedGiftCards, giftCard]);
    }
  };

  const handleAddToCart = (giftCard) => {
    console.log(`Adding ${giftCard.name} to cart`);
    // Implement redirection to login page
    navigate('/login');
  };

  const handleAddToWishlist = (giftCard) => {
    console.log(`Adding ${giftCard.name} to wishlist`);
    // Show alert or implement redirection to login page
    alert(`Added ${giftCard.name} to wishlist successfully!`);
    // navigate('/login');
  };

  const handleOrderGiftCards = () => {
    if (selectedGiftCards.length > 0) {
      console.log('Ordering selected gift cards:', selectedGiftCards);
      // Implement your order gift cards logic using selectedGiftCards
      // Redirect to checkout page after selecting gift cards

      // Navigate to checkout with selectedGiftCards and totalPayment state
      const totalPayment = selectedGiftCards.reduce((sum, card) => sum + card.amount, 0);
      navigate('/checkout', {
        state: { selectedGiftCards, totalPayment },
      });
    } else {
      console.warn('Please select at least one gift card before ordering.');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 mt-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Gift Cards</h1>

      {/* Display gift card options */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {giftCards.map((giftCard) => (
          <div
            key={giftCard.id}
            className={`bg-white p-6 rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-105`}
            onClick={() => handleSelectGiftCard(giftCard)}
            style={{ borderColor: selectedGiftCards.find((card) => card.id === giftCard.id) ? 'yellow' : '' }}
          >
            <h2 className={`text-xl font-bold mb-2 text-${giftCard.color}-500`}>{giftCard.name}</h2>
            {giftCard.image && (
              <img
                src={giftCard.image}
                alt={giftCard.name}
                className="mx-auto mb-4 rounded-lg transition duration-300 transform hover:scale-110"
                style={{ maxWidth: '80%', maxHeight: '150px' }}
              />
            )}
            <p className="text-gray-800 mb-2">Amount: TK.{giftCard.amount}</p>
            <div className="flex justify-between mt-4">
              <button
                className={`bg-${giftCard.color}-500 text-white px-4 py-2 rounded hover:bg-${giftCard.color}-600 transition duration-300 mr-2`}
              >
                {selectedGiftCards.find((card) => card.id === giftCard.id) ? 'Selected' : 'Select'}
              </button>
              <button
                className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 mr-2`}
                onClick={(e) => {
                  e.stopPropagation(); // Prevent the card selection toggle
                  handleAddToCart(giftCard);
                }}
              >
                Add to Cart
              </button>
              <button
                className={`bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300`}
                onClick={(e) => {
                  e.stopPropagation(); // Prevent the card selection toggle
                  handleAddToWishlist(giftCard);
                }}
              >
                Add to Wishlist
              </button>
            </div>
            {/* Gift Review Section */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Gift Reviews</h3>
              {reviews[giftCard.id] ? (
                <ul className="mt-2">
                  {reviews[giftCard.id].map((review, index) => (
                    <li
                      key={review.id}
                      className={`mb-2 cursor-pointer hover:bg-${index % 3 === 0 ? 'blue' : index % 3 === 1 ? 'red' : 'pink'}-200`}
                    >
                      <p className="font-medium">{review.user}</p>
                      <p className="text-gray-600">{review.comment}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No reviews yet.</p>
              )}
              {/* Add review form */}
              <div className="mt-4">
                <input type="text" placeholder="Add your review..." className="px-2 py-1 border rounded" />
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 ml-2"
                  onClick={() => handleAddReview(giftCard.id, 'New review comment')}
                >
                  Add Review
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Order Gift Cards section */}
      <div className="mt-8 text-center">
        <button
          className={`bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 transition duration-300 ${selectedGiftCards.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={handleOrderGiftCards}
          disabled={selectedGiftCards.length === 0}
        >
          Order Gift Cards
        </button>
      </div>
    </div>
  );
};

export default GiftCards;
