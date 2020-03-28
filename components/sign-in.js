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
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}
//========================================================================
//double check react hooks, not sure if any of this works lol
const SignIn = function() {
    const [data, setData] = useState({
        username: '',
        password: ''
    })

    const handleInputChange = event => {
        const  { name, value } = event.target
        const newData = {
            [name]: value
        }
        setData({ ...data, ...newData});
    }

    const handleFormSubmit = event => {
        event.preventDefault();

        const user = {
          //not sure this is right
          username: data.username,
          password: data.password
        }

        signInAPI(user).then(res => {
          if (res) {
            //redirect user to home page
            Router.push('/home')
          }
        })

        setData({
            username: '',
            password: ''
        });

        //might need to move this user and signInAPI above the setData in handleFormSubmit
        
//==========================================================================

        
    };

    return (
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
                <input type="text" name="username" placeholder="username" value={data.username} onChange={handleInputChange} />
              </div>
            </div>
          <div className="field">
            <div className="ui left icon input">
              <i className="lock icon"></i>
              <input type="password" name="password" placeholder="Password" value={data.password} onchange={handleInputChange} />
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

export default SignIn