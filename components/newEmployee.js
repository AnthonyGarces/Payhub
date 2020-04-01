import React, { useState } from 'react';
import axios from 'axios';
import Router from 'next/router';

//makes the request to the db to add an employee to the db
const newEmployeeAPI = async user => {
  return axios
    .post('/api/newEmployeeAPI', 
    {
      firstName: user.firstName,
      lastName: user.lastName,
      authLevel: user.authLevel,
      username: user.username,
      password: user.password,
      manager: user.manager
    },
    {
        headers: { Authorization: `Bearer ${localStorage.getItem('userToken')}`}
    })
    .then(response => {      
      return response.data
    })
    .catch(err => {
      console.log(err);
      alert('Invalid token, please sign in to verify access');
      Router.push('/index');
    })
}

const newEmployee = function() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    authLevel: "",
    username: "",
    password: "",
    manager: ''
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
    
    const employee = {
        firstName: data.firstName,
        lastName: data.lastName,
        authLevel: data.authLevel,
        username: data.username,
        password: data.password,
        manager: data.manager
    }

    newEmployeeAPI(employee).then(res => {
      if(res) {
        alert("Employee successfully added to the database");
        setData({
            firstName: "",
            lastName: "",
            authLevel: "",
            username: "",
            password: "",
            manager: ''
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
          Please enter the new hire's information here
          </div>
        </h2>
      <form className="ui large form">
        <div className="ui stacked segment">
          <div className="field">
            <div className="ui left icon input">
              <i className="user icon"></i>
              <input type="text" name="firstName" placeholder="James" value={data.firstName} onChange={handleInputChange} />
            </div>
          </div>
        <div className="field">
          <div className="ui left icon input">
            <i className="lock icon"></i>
            <input type="text" name="lastName" placeholder="Harden" value={data.lastName} onChange={handleInputChange} />
          </div>
        </div>
        <div className="field">
          <div className="ui left icon input">
            <i className="lock icon"></i>
            <input type="text" name="authLevel" placeholder="Authorization level" value={data.authLevel} onChange={handleInputChange} />
          </div>
        </div>
        <div className="field">
          <div className="ui left icon input">
            <i className="lock icon"></i>
            <input type="text" name="username" placeholder="Desired username" value={data.username} onChange={handleInputChange} />
          </div>
        </div>
        <div className="field">
          <div className="ui left icon input">
            <i className="lock icon"></i>
            <input type="password" name="password" placeholder="Password" value={data.password} onChange={handleInputChange} />
          </div>
        </div>
        <div className="field">
          <div className="ui left icon input">
            <i className="lock icon"></i>
            <input type="text" name="manager" placeholder="Managed By..." value={data.manager} onChange={handleInputChange} />
          </div>
        </div>
        <div className="ui fluid large submit button" onClick={handleFormSubmit}>Submit</div>
      </div>

      <div className="ui error message"></div>

      </form>

    </div>

    <style jsx>{`
  body {
      margin-left: 25%
  }
  `}</style>

  </div>

  )
    
};

export default newEmployee;