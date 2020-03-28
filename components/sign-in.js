import React, { useState } from 'react';

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

        setData({
            username: '',
            password: ''
        });
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