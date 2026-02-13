import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";

const Cart = () => {
  const { cart } = useContext(CartContext);

  if (cart.length === 0) {
    return <div className="my-28 text-center">Your cart is empty.</div>;
  }

  return (
    <div className="my-28 px-4 lg:px-24">
      <h2 className="text-3xl font-bold text-center mb-16 z-40">Your Cart</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {cart.map((book, index) => (
          <div key={index} className="card shadow-xl relative mr-5 md:my-5">
            <img src={book.imageURL} alt={book.bookTitle} className="h-96 w-full object-cover" />
            <div className="card-body">
              <h2 className="card-title">{book.bookTitle}</h2>
              <p>{book.bookDescription}</p>
              <div className="card-actions justify-between items-center mt-2">
                <h5 className="font-semibold">
                  <span className="text-sm text-red">$</span> {book.price}
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link to="/checkout">
          <button className="px-4 py-2 bg-green-600 text-white rounded">Proceed to Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
