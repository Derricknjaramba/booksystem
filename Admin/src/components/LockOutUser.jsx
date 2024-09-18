
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LockOutUser = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('/api/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  const handleLockOut = (e) => {
    e.preventDefault();
    axios.post(`/api/lock-out-user/${selectedUser}`)
      .then(response => {
        setMessage('User locked out successfully!');
        setUsers(users.filter(user => user.id !== selectedUser));
        setSelectedUser('');
      })
      .catch(error => {
        console.error('Error locking out user:', error);
        setMessage('Failed to lock out user.');
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Lock Out User</h1>
      <form onSubmit={handleLockOut} className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700">Select User</label>
          <select
            value={selectedUser}
            onChange={(e) => setSelectedUser(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          >
            <option value="">Select a user</option>
            
          </select>
        </div>
        <button type="submit" className="p-2 bg-yellow-500 text-white rounded">Lock Out User</button>
        {message && <p className="mt-4 text-gray-700">{message}</p>}
      </form>
    </div>
  );
};

export default LockOutUser;
