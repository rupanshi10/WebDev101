// frontend/src/components/TweetForm.js

import React, { useState } from 'react';
import axios from 'axios';

const TweetForm = () => {
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/tweets/', { content })
            .then(response => {
                setContent('');
                window.location.reload(); // Refresh to see the new tweet
            })
            .catch(error => console.error(error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="What's happening?"
                required
            />
            <button type="submit">Tweet</button>
        </form>
    );
};

export default TweetForm;
