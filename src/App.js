import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from '../src/pages/home/Home';
import Subreddit from '../src/pages/subreddit/Subreddit';
import './App.css';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/subreddit/:subredditId" element={<Subreddit/>}/>
            </Routes>
        </>
    );
}

export default App;
