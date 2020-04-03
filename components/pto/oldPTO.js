import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Router from 'next/router';
const oldPTO = function() {
    const [data, setData] = useState();
    
    useEffect(() => {
       axios
            .get('/api/ptoAPI?id=' + localStorage.getItem('id'),
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
        <table className='ui celled striped table' id="table">
            <thead>
                <tr>
                <th>Start Date</th>
                    <th>End Date</th>
                    <th>Total Hours</th>
                    <th>Approved</th>
                </tr>
            </thead>
            <tbody>
                {data && data.map(pto => { return ( 
                <tr key={pto.id}>
                    <td>{pto.startDate}</td>
                    <td>{pto.endDate}</td>
                    <td>{pto.hours}</td>
                    <td>{pto.approved}</td>             
                </tr>
                )})}
            </tbody>
        </table>
        <style jsx>{`
        #whole {
            position: relative;
            top: 95px;
            background-color: #e8f3d4;
            padding-top: 25px;
            padding-bottom: 550px;
        }
        #table {
            width: 600px;
            margin-left: 625px;
            margin-top: 20px;
        }
        `}</style>
    </div>
    )

}

export default oldPTO