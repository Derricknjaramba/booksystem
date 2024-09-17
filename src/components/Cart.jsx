// src/components/Cart.jsx
import React from 'react';

const Cart = ({ cart, totalPrice, onCheckout }) => (
  <div className="p-4 bg-white shadow-lg rounded-lg">
    <h2 className="text-2xl font-bold mb-4">Cart</h2>
    <ul>
      {cart.map(item => (
        <li key={item.id} className="flex justify-between mb-2">
          <span>{item.title} ({item.quantity} x KSh {item.price.toFixed(2)})</span>
          <span>KSh {(item.price * item.quantity).toFixed(2)}</span>
        </li>
      ))}
    </ul>
    <div className="flex justify-between mt-4">
      <span className="text-xl font-semibold">Total Price:</span>
      <span className="text-xl font-semibold">KSh {totalPrice.toFixed(2)}</span>
    </div>
    <button 
      onClick={onCheckout}
      className="mt-4 w-full bg-green-500 text-white py-2 px-4 rounded"
    >
      Checkout
    </button>
  </div>
);

export default Cart;