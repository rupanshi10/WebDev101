// frontend/src/components/TweetList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TweetList = () => {
    const [tweets, setTweets] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/tweets/')
            .then(response => setTweets(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Tweets</h1>
            <ul>
                {tweets.map(tweet => (
                    <li key={tweet.id}>{tweet.content}</li>
                ))}
            </ul>
        </div>
    );
};

export default TweetList;
