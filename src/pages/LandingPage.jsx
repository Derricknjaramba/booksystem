// src/pages/LandingPage.jsx
import React from 'react';

const LandingPage = () => (
  <div
    className="relative bg-cover bg-center h-screen flex items-center justify-center text-white"
    style={{ backgroundImage: 'url(https://media.newyorker.com/photos/63a4964f9a1485c25e918cd9/4:3/w_2275,h_1706,c_limit/Shouts-Elson-Reading.jpg)' }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
        Bookmate: Welcome to Bookmate Bookstore
      </h1>
      <p className="text-lg md:text-2xl mb-8 text-center">
        Explore our features and manage your book experience.
      </p>
      <div className="flex flex-col gap-4">
        <a
          href="/admin"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 text-center"
        >
          Admin Dashboard
        </a>
        <a
          href="/user"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 text-center"
        >
          User Dashboard
        </a>
        <a
          href="/about"
          className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 text-center"
        >
          About Us
        </a>
      </div>
    </div>
  </div>
);

export default LandingPage;
