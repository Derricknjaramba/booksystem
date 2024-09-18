import React, { useState } from 'react';

const FeedbackForm = () => {
    const [feedback, setFeedback] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit feedback to the backend
        fetch('/api/feedback', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, feedback }), // Removed name
        })
        .then(response => response.json())
        .then(data => {
            alert('Thank you for your feedback!');
            setEmail('');
            setFeedback('');
        });
    };

    return (
        <div className="feedback-form">
            <h2>Submit Your Feedback</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Your Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                <textarea 
                    placeholder="Your Feedback" 
                    value={feedback} 
                    onChange={(e) => setFeedback(e.target.value)} 
                    required 
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default FeedbackForm;
