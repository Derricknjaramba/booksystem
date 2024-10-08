
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminDashboard from './components/AdminDashboard';
import ManagePurchasedBooks from './components/ManagePurchasedBooks';
import ManageBorrowedBooks from './components/ManageBorrowedBooks';
import AddBook from './components/AddBook';
import RemoveBook from './components/RemoveBook';
import LockOutUser from './components/LockOutUser';
import RestrictUser from './components/RestrictUser';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/manage-purchased-books" element={<ManagePurchasedBooks />} />
        <Route path="/manage-borrowed-books" element={<ManageBorrowedBooks />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/remove-book" element={<RemoveBook />} />
        <Route path="/lock-out-user" element={<LockOutUser />} />
        <Route path="/restrict-user" element={<RestrictUser />} />
      </Routes>
    </Router>
  );
};

export default App;
