import { useState, useEffect } from 'react';
import axios from '../api/api';

const BorrowedBooks = () => {
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  useEffect(() => {
    // Fetch borrowed books data from the API
    axios.get('/user/borrowed-books')
      .then(response => setBorrowedBooks(response.data))
      .catch(error => console.error('Error fetching borrowed books:', error));
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Borrowed Books</h1>
      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="min-w-full">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="py-3 px-6 text-left">Title</th>
              <th className="py-3 px-6 text-left">Author</th>
              <th className="py-3 px-6 text-left">Due Date</th>
            </tr>
          </thead>
          <tbody>
            {borrowedBooks.length > 0 ? (
              borrowedBooks.map(book => (
                <tr key={book.id} className="border-b hover:bg-blue-50 transition">
                  <td className="py-3 px-6">{book.title}</td>
                  <td className="py-3 px-6">{book.author}</td>
                  <td className="py-3 px-6">{book.dueDate}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="py-3 px-6 text-center text-gray-500">No borrowed books found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BorrowedBooks;