import { useState, useEffect } from 'react';
import axios from '../api/api';

const PurchasedBooks = () => {
  const [purchasedBooks, setPurchasedBooks] = useState([]);

  useEffect(() => {
    // Fetch purchased books data from the API
    axios.get('/user/purchased-books')
      .then(response => setPurchasedBooks(response.data))
      .catch(error => console.error('Error fetching purchased books:', error));
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Purchased Books</h1>
      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="min-w-full">
          <thead className="bg-green-500 text-white">
            <tr>
              <th className="py-3 px-6 text-left">Title</th>
              <th className="py-3 px-6 text-left">Author</th>
              <th className="py-3 px-6 text-left">Date of Purchase</th>
            </tr>
          </thead>
          <tbody>
            {purchasedBooks.length > 0 ? (
              purchasedBooks.map(book => (
                <tr key={book.id} className="border-b hover:bg-green-50 transition">
                  <td className="py-3 px-6">{book.title}</td>
                  <td className="py-3 px-6">{book.author}</td>
                  <td className="py-3 px-6">{book.purchaseDate}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="py-3 px-6 text-center text-gray-500">No purchased books found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PurchasedBooks;