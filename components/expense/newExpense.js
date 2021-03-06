import React, { useState } from 'react';
import axios from 'axios';
import Router from 'next/router';

//makes the request to the db to add an employee to the db
const newExpenseAPI = async user => {

  return axios
    .post('/api/expenseAPI', 
    {
      item: user.item,
      vendor: user.vendor,
      cost: user.cost,
      userId: localStorage.getItem('id')
    },
    {
        headers: { Authorization: `Bearer ${localStorage.getItem('userToken')}`}
    })
    .then(response => {   
      alert('Expense report successfully submitted')     
      return response.data
    })
    .catch(err => {
      console.log(err);
      alert('Invalid token, please sign in to verify access');
      Router.push('/index');
    })
};


const newExpenseRequest = function() {
  const [data, setData] = useState({
    item: '',
    cost: '',
    vendor: ''
  })

  const handleInputChange = event => {
    const { name, value } = event.target
    const newData = {
      [name]: value
    }
    setData({ ...data, ...newData}) 
  }

  const handleFormSubmit = event => {
    event.preventDefault();
    
    const expenseRequest = {
        item: data.item,
        cost: data.cost,
        vendor: data.vendor
    };

    newExpenseAPI(expenseRequest).then(res => {
      if(res) {
        setData({
            startDate: '',
            endDate: '',
            vendor: ''
        })
      } else {
        alert("It seems there was an error. Please make sure all fields are filled out. If that isn't the issue, contact a sysadmin, or like, pray")
      }
    })
  }

  return(

    <div className="ui middle aligned center aligned grid">
      <div className="column">
        <h2 className="ui image header">
          <div className="content">
          Please fill in the below with as clear a description of the item purchased as well as the cost and location the item was purchased at.
          </div>
        </h2>
      <form className="ui form">
        <div className="ui stacked segment">
            <div className="fields">
                <div className='two wide field'>
                    <label>Item</label>
                    <input type='text' placeholder='2 night stay at a hotel' name='item' value={data.item} onChange={handleInputChange} />      
                </div>
                <div className='two wide field'>
                    <label>Cost</label>
                    <input type='number' placeholder='200.00' name='cost' value={data.cost} onChange={handleInputChange} />      
                </div>
                <div className='two wide field'>
                    <label>Vendor</label>
                    <input type='text' placeholder='Marriot' name='vendor' value={data.vendor} onChange={handleInputChange} />
                </div>     
            </div>
         <div className="ui fluid large submit button" onClick={handleFormSubmit}>Submit</div>
        </div>
      </form>

    </div>

  </div>

  )
    
};

export default newExpenseRequest;