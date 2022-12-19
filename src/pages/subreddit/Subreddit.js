import React, {useEffect, useState} from 'react';
import {Link, NavLink, useParams} from "react-router-dom";
import axios from "axios";
import './Subreddit.css'

function Subreddit() {
    const {subredditId} = useParams();
    const [reddit, setReddit] = useState([]);
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    useEffect(() => {
        async function getReddit() {
            toggleLoading(true);
            try {
                toggleError(false);
                const response = await axios.get(`https://www.reddit.com/r/${subredditId}/about.json`);
                setReddit(response.data.data);
                console.log(response.data.data);
            } catch (e) {
                console.error(e);
                toggleError(true);
            }
            toggleLoading(false);
        }

        if (true) {
            getReddit();
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
                    <h1 className="headertitle">{reddit.display_name_prefixed}</h1>
                    <h4 className="headerh">Subreddit specifications</h4>
                </div>
            </header>
            <main>
                <div className="margin">
                    <h4 className="subreddittitle">Title</h4>
                    <p className="subredditp">{reddit.title}</p>
                    <h4 className="subreddittitle">Description</h4>
                    <p className="subredditp">{reddit.public_description}</p>
                    <h4 className="subreddittitle">Number of subscribers</h4>
                    <p className="subredditp">{reddit.subscribers}</p>
                    <Link to={'/'}><p className="redmargin">{`< Take me back`}</p></Link>
                </div>
                <footer className="footer">
                    <div className="margindiv">
                        <p>In opdracht van NOVI Hogeschool © 2022</p>
                    </div>
                </footer>
            </main>
        </>
    );
}

export default Subreddit;