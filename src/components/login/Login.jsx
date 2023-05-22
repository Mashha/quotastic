import "./login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login-form">
      <div className="login-inner">
        <div className="top">
          <h4>
            Welcome <span>Back!</span>
          </h4>
          <p>
            Thank you for coming back. Hope you have a good day and inspire
            others.
          </p>
        </div>
        <form action="">
          <div className="email-input">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="example@net.com" />
          </div>
          <div className="pwd-login">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="••••••••••••••••"
            />
          </div>
          <button className="login-btn">Login</button>
        </form>
        <div className="sign-up">
          <p>Don't have an account</p>
          <Link to="/sign up">Sign up</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
