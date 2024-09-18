import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookRating from './components/BookRating';
import BookFeedback from './components/FeedbackForm';

const App = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({ title: '', author: '', genre: '', isbn: '' });

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:5000/api/books');
    setBooks(response.data);
  };

  const handleChange = (e) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };

  const addBook = async () => {
    await axios.post('http://localhost:5000/api/books', newBook);
    fetchBooks();
    setNewBook({ title: '', author: '', genre: '', isbn: '' });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Book Management System</h1>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Add a New Book</h2>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newBook.title}
          onChange={handleChange}
          className="border p-2 mr-2"
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={newBook.author}
          onChange={handleChange}
          className="border p-2 mr-2"
        />
        <input
          type="text"
          name="genre"
          placeholder="Genre"
          value={newBook.genre}
          onChange={handleChange}
          className="border p-2 mr-2"
        />
        <input
          type="text"
          name="isbn"
          placeholder="ISBN"
          value={newBook.isbn}
          onChange={handleChange}
          className="border p-2 mr-2"
        />
        <button
          onClick={addBook}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Book
        </button>
      </div>
      <h2 className="text-xl font-semibold mb-4">Book List</h2>
      <ul>
        {books.map(book => (
          <li key={book._id} className="border-b py-2">
            <strong>{book.title}</strong> by {book.author} - {book.genre} (ISBN: {book.isbn})
            <BookRating bookId={book._id} />
            <BookFeedback bookId={book._id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
