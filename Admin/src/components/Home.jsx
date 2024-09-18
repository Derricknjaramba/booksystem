
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Welcome to the Book Management System</h1>
      <p className="text-gray-700 mb-6">Use the links below to navigate to different sections.</p>
      
      <div className="space-y-4">
        <Link to="/admin/manage-borrowed-books" className="text-blue-500 hover:underline">Manage Borrowed Books</Link>
        <Link to="/admin/manage-purchased-books" className="text-blue-500 hover:underline">Manage Purchased Books</Link>
        {/* Add other links if needed */}
      </div>
    </div>
  );
};

export default Home;
