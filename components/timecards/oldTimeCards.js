import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Router from 'next/router';
const oldTimeCards = function() {
    const [data, setData] = useState();
    
    useEffect(() => {
       axios
            .get('/api/timeCardAPI?id=' + localStorage.getItem('id'),
            {
                headers: { Authorization: `Bearer ${localStorage.getItem('userToken')}`}    
            })
            .then(response => setData(response.data))
            .catch(err => {
                console.log(err);
                alert(err);
                Router.push('/index')
            })
    }, []);
    console.log(data);
    return(
        <div id="whole">
        <div className='container' id="title">
                Your Previous Timecards
        </div>
        <table className='ui collapsing celled striped table' id="big">
            <thead>
                <tr>
                <th>End of Week Date</th>
                    <th>Sunday</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                    <th>Total Hours</th>
                </tr>
            </thead>
            <tbody>
                {data && data.map(timeCard => { return ( 
                    <tr key={timeCard.id}>
                        <td>{timeCard.endofweek}</td>
                        <td>{timeCard.sunday}</td>
                        <td>{timeCard.monday}</td>
                        <td>{timeCard.tuesday}</td>
                        <td>{timeCard.wednesday}</td>
                        <td>{timeCard.thursday}</td>
                        <td>{timeCard.friday}</td>
                        <td>{timeCard.saturday}</td>
                        <td>{timeCard.sunday + timeCard.monday + timeCard.tuesday + timeCard.wednesday + timeCard.thursday + timeCard.friday + timeCard.saturday}</td>
                    </tr>   
                )})}
            </tbody>
        </table>
        <style jsx>{`
            #big {   
                margin-left: 550px;
                position: relative;
                justify-content: center;
                height: 100%;
            }
            #title {
                position: relative;
                justify-content: center;
                margin-left: 550px;
                font-weight: bold;
                font-size: 24px;
            }
            #whole {
                background-color: #e8f3d4;
                padding-bottom: 452px;
                padding-top: 60px;
            }
        `}</style>
    </div>
            
    )

}

export default oldTimeCards