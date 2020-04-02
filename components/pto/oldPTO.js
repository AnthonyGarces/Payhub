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
        <table className='ui celled striped table'>
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
            
    )

}

export default oldPTO