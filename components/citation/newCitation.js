import React, { useState } from 'react';
import axios from 'axios';
import Router from 'next/router';

//makes the request to the db to add an employee to the db
const newCitationAPI = async user => {

  return axios
    .post('/api/citationAPI', 
    {
      date: user.date,
      event: user.event,
      action: user.action,
      userId: localStorage.getItem('id')
    },
    {
        headers: { Authorization: `Bearer ${localStorage.getItem('userToken')}`}
    })
    .then(response => {   
      alert('Citation successfully submitted')     
      return response.data
    })
    .catch(err => {
      console.log(err);
      alert('Invalid token, please sign in to verify access');
      Router.push('/index');
    })
};


const newCitationRequest = function() {
  const [data, setData] = useState({
    date: '',
    event: '',
    action: ''
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
    
    const citationRequest = {
        date: data.date,
        event: data.event,
        action: data.action
    };

    newCitationAPI(citationRequest).then(res => {
      if(res) {
        setData({
            date: '',
            event: '',
            action: ''
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
          Please fill in the below with as clear a description of the citation event, as well as the action taken in response by management.
          </div>
        </h2>
      <form className="ui form" id="eventfrm"> 
        <div className="ui stacked segment">
            <div className="fields">
                <div className='two wide field'>
                    <label>Date</label>
                    <input type='date' placeholder='01/01/2020' name='date' value={data.date} onChange={handleInputChange} />      
                </div>
                <div className='three wide field'>
                    <label>Event</label>
                    <textarea placeholder="Event description goes here" name="event" onChange={handleInputChange} form="eventfrm" rows="4" value={data.event}></textarea>
                </div>
                <br />
                <div className='three wide field'>
                    <label>Action</label>
                    <textarea placeholder="Action description goes here" name="action" onChange={handleInputChange} form="eventfrm" rows="4" value={data.action}></textarea>
                </div>     
            </div>
         <div className="ui fluid large submit button" onClick={handleFormSubmit}>Submit</div>
        </div>
      </form>


    </div>

  </div>

  )
    
};

export default newCitationRequest;