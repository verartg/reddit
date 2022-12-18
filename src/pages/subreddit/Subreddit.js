import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";

function Subreddit() {
    const {subredditId} = useParams();
    const [reddit, setReddit] = useState([]);
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    useEffect( () => {
        async function getReddit() {
            toggleLoading(true);
            try {
                toggleError(false);
                const response = await axios.get(`https://www.reddit.com/r/${subredditId}/about.json`);
                setReddit(response.data.data);
                console.log(response.data.data);
            } catch(e) {
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
            <h2>Title</h2>
            <p>{reddit.title}</p>
            <h2>Description</h2>
            <p>{reddit.public_description}</p>
            <h2>Number of subscribers</h2>
            <p>{reddit.subscribers}</p>
            <Link to={'/'}>{`< Take me back`}</Link>
        </>
    );
}

export default Subreddit;