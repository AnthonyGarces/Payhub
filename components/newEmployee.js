import React, { useState, useEffect } from 'react';
import axios from 'axios';

//makes the request to the db to add an employee to the db
const newEmployeeAPI = async user => {
  return axios
    .post('/api/newEmployee', {
      firstName: user.username,
      lastName: user.password,
      authLevel: user.authLevel,
      username: user.username,
      password: user.password,
      manager: user.manager
    })
    .then(response => {      
      return response.data
    })
    .catch(err => {
      console.log(err)
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
          Sign-in to your account
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
        <div className="ui fluid large submit button" onClick={handleFormSubmit}>Login</div>
      </div>

      <div className="ui error message"></div>

      </form>

    </div>
  </div>
  )
    
};

export default SignIn;