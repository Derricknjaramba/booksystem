import React from 'react';
import { useLocation } from 'react-router-dom';

const CheckoutForm = () => {
  const { state } = useLocation();
  const { cart, totalPrice } = state || { cart: [], totalPrice: 0 };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Order placed!');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Name</label>
          <input type="text" className="p-2 border rounded w-full" required />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Address</label>
          <input type="text" className="p-2 border rounded w-full" required />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Phone Number</label>
          <input type="tel" className="p-2 border rounded w-full" required />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Place Order
        </button>
      </form>
      <div className="mt-4">
        <h2 className="text-2xl font-bold mb-2">Order Summary</h2>
        <ul>
          {cart.map((book) => (
            <li key={book.id} className="flex justify-between p-2 border-b">
              <span>{book.title}</span>
              <span>${book.price}</span>
            </li>
          ))}
        </ul>
        <p className="text-lg font-bold mt-4">Total Price: ${totalPrice}</p>
      </div>
    </div>
  );
};

export default CheckoutForm;