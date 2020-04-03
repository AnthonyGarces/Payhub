import React, { useState } from 'react';
import axios from 'axios';
import Router from 'next/router';

//makes the request to the db to add an employee to the db
const newPtoRequestAPI = async user => {
  return axios
    .post('/api/ptoAPI', 
    {
      startDate: user.startDate,
      endDate: user.endDate,
      hours: user.hours,
      userId: localStorage.getItem('id')
    },
    {
        headers: { Authorization: `Bearer ${localStorage.getItem('userToken')}`}
    })
    .then(response => {   
      alert('PTO request successfully submitted, please contact your manager for further direction')     
      return response.data
    })
    .catch(err => {
      console.log(err);
      alert('Invalid token, please sign in to verify access');
      Router.push('/index');
    })
}

const newPtoRequest = function() {
  const [data, setData] = useState({
    startDate: '',
    endDate: '',
    hours: ''
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
    
    const ptoRequest = {
        startDate: data.startDate,
        endDate: data.endDate,
        hours: data.hours
    }

    newPtoRequestAPI(ptoRequest).then(res => {
      if(res) {
        setData({
            startDate: '',
            endDate: '',
            hours: ''
        })
      } else {
        alert("It seems there was an error. Please make sure all fields are filled out. If that isn't the issue, contact a sysadmin, or like, pray")
      }
    })
  }

  return(

    <div className="ui middle aligned center aligned grid" id="whole">
      <div className="column">
        <h3 className="ui center aligned header">
          <div className="content">
          Please select the days you wish to apply your paid time off towards and the amount of total hours you intend on using. If only applying for a single day do not fill in end date.
          </div>
        </h3>
      <form className="ui form" id="form">
        <div className="ui stacked segment">
            <div className="equal width fields">
                <div className='two wide field'>
                    <label>Start Date</label>
                    <div className="ui left icon input">
                      <i className="calendar icon"></i>
                      <input type='date' placeholder='01/01/2020' name='startDate' value={data.startDate} onChange={handleInputChange} />      
                    </div>
                </div>
                <div className='two wide field'>
                    <label>End Date</label>
                    <div className="ui left icon input">
                      <i className="calendar icon"></i>
                      <input type='date' placeholder='01/08/2020' name='endDate' value={data.endDate} onChange={handleInputChange} />      
                    </div>
                </div>
                <div className='two wide field'>
                    <label>Hours Used</label>
                    <div className="ui left icon input">
                      <i className="hourglass half icon"></i>
                      <input type='number' placeholder='40' name='hours' value={data.hours} onChange={handleInputChange} />      
                    </div>
                </div>     
            </div>
         <div className="ui fluid large submit button" onClick={handleFormSubmit}>Submit</div>
        </div>
      </form>

    </div>
    <style jsx>{`
    #whole {
      position: relative;
      top: 95px;
      background-color: #e8f3d4;
      padding-top: 25px;
    }
    #form {
      width: 600px;
      margin-left: 625px;
      margin-top: 20px;
    }
    `}</style>

  </div>

  )
    
};

export default newPtoRequest;