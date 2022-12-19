import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from '../src/pages/home/Home';
import Subreddit from '../src/pages/subreddit/Subreddit';
import Notfound from "./pages/notfound/Notfound";
import './App.css';

function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/subreddit/:subredditId" element={<Subreddit/>}/>
                <Route path="*" element={<Notfound/>}/>
            </Routes>
        </>
    );
}

export default App;
