export default function Login() {
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
            />
          </div>
        </form>
      </div>
    )
};