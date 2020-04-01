import React, { useState } from 'react';
import axios from 'axios';
import Router from 'next/router';

//makes the request to the db to add an employee to the db
const newTimeCardAPI = async user => {
  return axios
    .post('/api/timeCardAPI', 
    {
      sunday: user.sunday,
      monday: user.monday,
      tuesday: user.tuesday,
      wednesday: user.wednesday,
      thursday: user.thursday,
      friday: user.friday,
      saturday: user.saturday,
      endofweek: user.endofweek,
      userId: localStorage.getItem('id')
    },
    {
        headers: { Authorization: `Bearer ${localStorage.getItem('userToken')}`}
    })
    .then(response => {   
      alert('Time Card successfully submitted')     
      return response.data
    })
    .catch(err => {
      console.log(err);
      alert('Invalid token, please sign in to verify access');
      Router.push('/index');
    })
}

const newTimeCard = function() {
  const [data, setData] = useState({
    sunday: "",
    monday: "",
    tuesday: "",
    wednesday: "",
    thursday: "",
    friday: '',
    saturday: '',
    endofweek: ''
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
    
    const timeCard = {
        sunday: data.sunday,
        monday: data.monday,
        tuesday: data.tuesday,
        wednesday: data.wednesday,
        thursday: data.thursday,
        friday: data.friday,
        saturday: data.saturday,
        endofweek: data.endofweek
    }

    newTimeCardAPI(timeCard).then(res => {
      if(res) {
        setData({
            sunday: "",
            monday: "",
            tuesday: "",
            wednesday: "",
            thursday: "",
            friday: '',
            saturday: '',
            endofweek: ''
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
          Please fill the form with the hours you worked on the days you worked, along with the end of week date
          </div>
        </h2>
      <form className="ui form">
        <div className="ui stacked segment">
            <div className="equal width fields">
                <div className='field'>
                    <label>Sunday</label>
                    <input type='text' placeholder='0' name='sunday' value={data.sunday} onChange={handleInputChange} />      
                </div>
                <div className='field'>
                    <label>Monday</label>
                    <input type='text' placeholder='0' name='monday' value={data.monday} onChange={handleInputChange} />      
                </div>
                <div className='field'>
                    <label>Tuesday</label>
                    <input type='text' placeholder='0' name='tuesday' value={data.tuesday} onChange={handleInputChange} />      
                </div>
                <div className='field'>
                    <label>Wednesday</label>
                    <input type='text' placeholder='0' name='wednesday' value={data.wednesday} onChange={handleInputChange} />      
                </div>
                <div className='field'>
                    <label>Thursday</label>
                    <input type='text' placeholder='0' name='thursday' value={data.thursday} onChange={handleInputChange} />      
                </div>
                <div className='field'>
                    <label>Friday</label>
                    <input type='text' placeholder='0' name='friday' value={data.friday} onChange={handleInputChange} />      
                </div>
                <div className='field'>
                    <label>Saturday</label>
                    <input type='text' placeholder='0' name='saturday' value={data.saturday} onChange={handleInputChange} />      
                </div>
            </div>
            <div className='field'>
                <label>End of Week</label>
                <input type='date' placeholder='01/01/2020' name='endofweek' value={data.endofweek} onChange={handleInputChange} />
            </div>
         </div>
         <div className="ui fluid large submit button" onClick={handleFormSubmit}>Submit</div>
 
      </form>

    </div>

  </div>

  )
    
};

export default newTimeCard;