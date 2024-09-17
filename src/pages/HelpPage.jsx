// src/pages/HelpPage.jsx
import { useState } from 'react';
import axios from '../api/api';  // Update this import according to your axios setup

const HelpPage = () => {
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/user/help-request', { message });
      setSuccess('Your help request has been submitted successfully.');
      setMessage('');
      setError('');  // Clear any previous error message
    } catch (error) {
      setError('Failed to submit the help request. Please try again.');
      setSuccess('');  // Clear any previous success message
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Help Request</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border border-gray-300 p-3 w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="6"
          placeholder="Please describe your issue or question here..."
          required
        />
        <button
          type="submit"
          className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit Request
        </button>
      </form>
      {success && <p className="text-green-600 mt-4">{success}</p>}
      {error && <p className="text-red-600 mt-4">{error}</p>}
    </div>
  );
};

export default HelpPage;