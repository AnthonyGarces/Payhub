import React from 'react';

export default function Login() {
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
        <div>
        <form action="/login" method="post" id="login">
          <div>
            <div>
              <span>
                <i />
              </span>
            </div>
            <input
              type="text"
              id="username"
              placeholder="username"
              value={data.username}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <div>
              <span>
                <i />
              </span>
            </div>
            <input
              type="password"
              id="password"
              placeholder="password"
              value={data.password}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <input type="checkbox" />
            Remember Me
          </div>
          <div>
            <input
              type="submit"
              defaultValue="Login"
              onClick={handleFormSubmit}
            />
          </div>
        </form>
      </div>
    )
};