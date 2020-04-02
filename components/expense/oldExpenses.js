import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Router from 'next/router';
const oldExpenses = function() {
    const [data, setData] = useState();
    
    useEffect(() => {
       axios
            .get('/api/expenseAPI?id=' + localStorage.getItem('id'),
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
                <th>Date</th>
                <th>Item</th>
                <th>Vendor</th>
                <th>Cost</th>                
                </tr>
            </thead>
            <tbody>
                {data && data.map(expense => { return ( 
                    <tr key={expense.id}>
                        <td>{expense.createdAt.slice(0, 10)}</td>
                        <td>{expense.item}</td>
                        <td>{expense.vendor}</td>
                        <td>{expense.cost}</td>
                    </tr>
                )})}
            </tbody>
        </table>
            
    )

}

export default oldExpenses