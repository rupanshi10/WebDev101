// frontend/src/App.js

import React from 'react';
import TweetList from './TweetList';
import TweetForm from './TweetForm';

function App() {
    return (
        <div className="App">
            <TweetForm />
            <TweetList />
        </div>
    );
}

export default App;

