import { useState, useEffect } from 'react';
import axios from '../api/api';
import BookCard from '../components/BookCard';

const BooksToBorrow = () => {
  const [books, setBooks] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch genres from API
    axios.get('/api/genres')
      .then(response => setGenres(response.data))
      .catch(error => setError('Error fetching genres'))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    // Fetch books from API based on selected genre and search query
    setLoading(true);
    axios.get('/api/books-to-borrow', { params: { genre: selectedGenre, search } })
      .then(response => setBooks(response.data))
      .catch(error => setError('Error fetching books'))
      .finally(() => setLoading(false));
  }, [selectedGenre, search]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Books to Borrow</h1>
      
      <div className="mb-6 flex flex-col md:flex-row items-center md:items-start gap-4">
        <select
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
          className="border p-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        >
          <option value="">All Genres</option>
          {genres.map(genre => (
            <option key={genre} value={genre}>{genre}</option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Search by title or author"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        />
      </div>

      {loading && <p className="text-blue-500">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.length > 0 ? (
          books.map(book => (
            <BookCard key={book.id} book={book} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">No books available.</p>
        )}
      </div>
    </div>
  );
};

export default BooksToBorrow;