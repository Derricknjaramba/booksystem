import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const UserDashboard = () => (
  <div>
    <Navbar />
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">User Dashboard</h1>
      <div className="mt-4 space-y-4">
        <div className="p-4 bg-blue-100 rounded shadow">
          <Link to="/user/borrowed-books" className="block text-blue-800 font-semibold">Borrowed Books</Link>
        </div>
        <div className="p-4 bg-green-100 rounded shadow">
          <Link to="/user/purchased-books" className="block text-green-800 font-semibold">Purchased Books</Link>
        </div>
        <div className="p-4 bg-yellow-100 rounded shadow">
          <Link to="/user/help" className="block text-yellow-800 font-semibold">Help</Link>
        </div>
        <div className="p-4 bg-red-100 rounded shadow">
          <Link to="/user/books-to-borrow" className="block text-red-800 font-semibold">Books to Borrow</Link>
        </div>
        <div className="p-4 bg-purple-100 rounded shadow">
          <Link to="/user/books-on-sale" className="block text-purple-800 font-semibold">Books on Sale</Link>
        </div>
      </div>
    </div>
  </div>
);

export default UserDashboard;