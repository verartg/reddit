import React from 'react';
import {Routes, Route, NavLink} from 'react-router-dom';
import Home from '../src/pages/home/Home';
import Subreddit from '../src/pages/subreddit/Subreddit';
import Notfound from "./pages/notfound/Notfound";
import './App.css';

function App() {

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Hottest posts</NavLink>
                    </li>
                    <li>
                        <a href="https://www.reddit.com/">Reddit</a>
                    </li>
                    <li>
                        <a href="https://www.reddit.com/r/memes/">Memes</a>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/subreddit/:subredditId" element={<Subreddit/>}/>
                <Route path="*" element={<Notfound/>}/>
            </Routes>
        </>
    );
}

export default App;
