import React, {useEffect, useState} from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

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
            } catch(e) {
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
            <div>
                <ul>
                    {reddits.map((reddit) => {
                        return <li key={reddit.data.id}>
                            <a href={`https://www.reddit.com${reddit.data.permalink}`}><h3>{reddit.data.title}</h3></a>
                            <Link to={`/subreddit/${reddit.data.subreddit}`}>{reddit.data.subreddit_name_prefixed}</Link>
                            <p>Comments {reddit.data.num_comments} - Ups {reddit.data.ups}</p>
                            </li>
                    })}
                </ul>
            </div>
        </>
    );
}
//<a href={https://www.reddit.com/{reddit.data.subreddit_name_prefixed}}><h3>{reddit.data.title}</h3></a>
export default Home;