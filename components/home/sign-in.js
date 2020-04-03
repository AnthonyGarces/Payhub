import React, { useState } from 'react';
import axios from 'axios';
import Router from 'next/router';

//makes the request to the db to verify usename/password and stores data to localstorage
const signInAPI = async user => {
  return axios
    .post('/api/login', {
      username: user.username,
      password: user.password
    })
    .then(response => {
      localStorage.setItem('userToken', response.data.token)
      localStorage.setItem('name', response.data.name)
      localStorage.setItem('authLevel', response.data.authLevel)
      localStorage.setItem('id', response.data.id)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

const SignIn = function() {
  const [data, setData] = useState({
    username: '',
    password: ''
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
    
    const user = {
      username: data.username,
      password: data.password
    }

    signInAPI(user).then(res => {
      if(res) {
        Router.push('/home')
      } else {
        setData({
          username: '',
          password: ''
        });

        alert('Incorrect username or password, please try again')
      }
    })

    
  }


  return(

    <div className="ui middle aligned center aligned grid container" id="whole">
      <div className="column">
        <h2 className="ui header">
          <div className="content">
          Sign-in to your account
          </div>
        </h2>
      <form className="ui small form" id="formA">
        <div className="ui stacked segment">
          <div className="field">
            <div className="ui left icon input">
              <i className="user icon"></i>
              <input type="text" name="username" placeholder="username" value={data.username} onChange={handleInputChange} />
            </div>
          </div>
        <div className="field">
          <div className="ui left icon input">
            <i className="lock icon"></i>
            <input type="password" name="password" placeholder="Password" value={data.password} onChange={handleInputChange} />
          </div>
        </div>
        <div className="ui fluid large submit button" onClick={handleFormSubmit}>Login</div>
      </div>

      <div className="ui error message"></div>

      </form>

    </div>
    <style jsx>{`
    #whole {
      width: 200px;
      position: relative;
      margin-top: 80px;
      background-color: #D8EBB5;
      padding-top: 250px;
      padding-bottom: 420px; 
    }
    form {
      margin-top: 20px;
    }
    `}</style>
  </div>
  )
    
};

export default SignIn;