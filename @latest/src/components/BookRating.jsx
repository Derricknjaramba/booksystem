import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookRating = ({ bookId }) => {
  const [rating, setRating] = useState(0);
  const [ratings, setRatings] = useState([]);
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    const fetchRatings = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/books/${bookId}/ratings`);
        setRatings(response.data);
        calculateAverageRating(response.data);
      } catch (error) {
        console.error('Error fetching ratings:', error);
      }
    };

    fetchRatings();
  }, [bookId]);

  const calculateAverageRating = (ratings) => {
    if (ratings.length === 0) {
      setAverageRating(0);
      return;
    }

    const total = ratings.reduce((sum, r) => sum + r.rating, 0);
    setAverageRating(total / ratings.length);
  };

  const handleRatingChange = (e) => {
    setRating(Number(e.target.value));
  };

  const submitRating = async () => {
    try {
      await axios.post(`http://localhost:5000/api/books/${bookId}/rating`, {
        userId: 'dummyUser', // Replace with real user ID
        rating
      });
      setRatings([...ratings, { userId: 'dummyUser', rating }]);
      calculateAverageRating([...ratings, { userId: 'dummyUser', rating }]);
      setRating(0);
    } catch (error) {
      console.error('Error submitting rating:', error);
    }
  };

  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold">Rate this Book</h3>
      <select
        value={rating}
        onChange={handleRatingChange}
        className="border p-2"
      >
        <option value={0}>Select Rating</option>
        {[1, 2, 3, 4, 5].map((num) => (
          <option key={num} value={num}>{num}</option>
        ))}
      </select>
      <button
        onClick={submitRating}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
      >
        Submit Rating
      </button>
      <div className="mt-4">
        <h4 className="text-lg font-semibold">Average Rating</h4>
        <p>{averageRating.toFixed(1)} / 5</p>
        <h5 className="text-lg font-semibold mt-4">Ratings</h5>
        <ul>
          {ratings.map((r, index) => (
            <li key={index} className="border-b py-2">
              <p><strong>User {r.userId}:</strong> {r.rating} / 5</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BookRating;
