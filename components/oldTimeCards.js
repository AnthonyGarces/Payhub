import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Router from 'next/router';

const getTimeCards = () => {
    return axios
        .get('/api/timeCardAPI',
        {
            userId: localStorage.getItem('id')
        },
        {
            headers: { Authorization: `Bearer ${localStorage.getItem('userToken')}`}    
        })
        .then(response => {
            //console.log for now, once i see the response i can get to putting it into the page
            console.log(response)
        })
        .catch(err => {
            console.log(err);
            alert(err);
            // Router.push('/index')
        })
}

const oldTimeCards = function() {
    const [data, setData] = useState({ timeCards: [] });

    useEffect(() => {
        getTimeCards()
    }, []);

    return(
        <div>
            this is where i will render the results of the timecards
        </div>
    )
}

export default oldTimeCards