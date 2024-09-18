import React from 'react';
import FeedbackForm from './components/FeedbackForm';
import BookRating from './components/BookRating';
import './App.css';


const App = () => {
  return (
    <div>
      <FeedbackForm />
      <BookRating/>
    </div>
  );
};

export default App;
