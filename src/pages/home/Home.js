import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, NavLink} from "react-router-dom";
import logo from '../../assets/logo.png' ;
import './Home.css';

function Home() {
    const [reddits, setReddits] = useState([]);
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    useEffect(() => {
        async function getData() {
            toggleLoading(true);
            try {
                toggleError(false);
                const result = await axios.get('https://www.reddit.com/hot.json?limit=15');
                setReddits(result.data.data.children);
                console.log(result.data.data.children);
            } catch (e) {
                console.error(e);
                toggleError(true);
            }
            toggleLoading(false);
        }

        if (true) {
            getData();
        }

    }, []);

    return (
        <>
            {error && <span>Er is iets misgegaan met het ophalen van de data</span>}
            {loading && <span>Loading...</span>}
            <header>
                <div className="margindiv">
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/" className="headerlink"><p>Hottest posts</p></NavLink>
                            </li>
                            <li>
                                <a href="https://www.reddit.com/" className="headerlink"><p>Reddit</p></a>
                            </li>
                            <li>
                                <a href="https://www.reddit.com/r/memes/" className="headerlink"><p>Memes</p></a>
                            </li>
                        </ul>
                    </nav>
                    <img src={logo} alt="reddit logo"/>
                    <h1>Reddit</h1>
                </div>
            </header>
            <main>
                <div className="margindiv">
                    <h2>Hottest posts</h2>
                    <h4>on Reddit right now</h4>
                    <div className="flexgrid">
                            {reddits.map((reddit) => {
                                return <article key={reddit.data.id}>
                                    <a href={`https://www.reddit.com${reddit.data.permalink}`} className="articletitles"><h3>
                                        {reddit.data.title}</h3></a>
                                    <div className="topspace">
                                        <Link
                                            to={`/subreddit/${reddit.data.subreddit}`}><p className="redtext">{reddit.data.subreddit_name_prefixed}</p></Link>
                                        <p className="commentsups">Comments {reddit.data.num_comments} - Ups {reddit.data.ups}</p>
                                    </div>
                                </article>
                            })}
                    </div>
                </div>
            </main>
            <footer className="footer">
                <div className="margindiv">
                    <p>In opdracht van NOVI Hogeschool © 2022</p>
                </div>
            </footer>
        </>
    );
}

    export default Home;