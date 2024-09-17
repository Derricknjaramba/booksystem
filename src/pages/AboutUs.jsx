// src/pages/AboutUs.jsx
import React from 'react';
import Navbar from '../components/Navbar';

const AboutUs = () => (
  <div className="bg-gradient-to-r from-gray-100 to-gray-200 min-h-screen">
    <Navbar />
    <div className="container mx-auto p-8 bg-white shadow-lg rounded-lg mt-8 mb-8 max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 text-center">
        About Us
      </h1>
      <p className="mt-4 text-lg text-gray-700 leading-relaxed mb-8">
        Welcome to BookMate, the premier bookstore management system designed to streamline the way you manage your book collection and enhance your reading experience.
      </p>
      <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          At BookMate, our mission is to simplify book management for both bookstores and avid readers. We aim to provide an intuitive platform that allows users to effortlessly track borrowed and purchased books, manage inventory, and discover new reading opportunities. Our goal is to foster a love for reading through efficient and user-friendly technology.
        </p>
      </div>
      <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">What We Offer</h2>
        <ul className="list-disc pl-6 text-lg text-gray-700 space-y-4">
          <li><strong className="text-gray-800">Comprehensive Inventory Management:</strong> Easily add, update, and categorize books in your collection. Keep track of stock levels and receive notifications for low inventory.</li>
          <li><strong className="text-gray-800">Efficient Borrowing System:</strong> Manage borrowed books with ease. Track due dates, overdue items, and generate reminders for users.</li>
          <li><strong className="text-gray-800">User-Friendly Interface:</strong> Our platform is designed with simplicity in mind, making it easy for users of all ages to navigate and utilize its features.</li>
          <li><strong className="text-gray-800">Personalized Recommendations:</strong> Discover new books based on your interests and previous reading history with our smart recommendation engine.</li>
          <li><strong className="text-gray-800">Detailed Reports:</strong> Generate reports and analytics to gain insights into your collection, borrowing trends, and user preferences.</li>
        </ul>
      </div>
      <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Values</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          We believe in the power of books to inspire, educate, and entertain. Our core values drive us to continuously improve and innovate:
        </p>
        <ul className="list-disc pl-6 text-lg text-gray-700 space-y-4">
          <li><strong className="text-gray-800">Customer-Centric Approach:</strong> We prioritize our users' needs and feedback to enhance our services and ensure a seamless experience.</li>
          <li><strong className="text-gray-800">Integrity:</strong> We are committed to maintaining transparency and honesty in all our interactions and operations.</li>
          <li><strong className="text-gray-800">Innovation:</strong> We strive to stay ahead of technological trends and incorporate cutting-edge solutions into our platform.</li>
          <li><strong className="text-gray-800">Passion for Reading:</strong> Our love for books drives us to create a system that enriches the reading experience for everyone.</li>
        </ul>
      </div>
      <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Join Us</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Whether you are a bookstore owner looking to streamline your operations or a reader seeking to organize your personal collection, BookMate is here to support you. Explore our features and see how we can help you achieve your book management goals.
        </p>
        <p className="text-lg text-gray-700">
          Thank you for visiting BookMate. We look forward to being part of your reading journey!
        </p>
      </div>
    </div>
  </div>
);

export default AboutUs;