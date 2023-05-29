import "./login.css";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../../context/AuthProvider";
import axios from "../../api/axios";

const LOGIN_URL = "/login";

function Login() {
  const { setAuth } = useContext(AuthContext);
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email, password: pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      const accessToken = response?.data?.accessToken;
      setAuth({ email, pwd, accessToken });
      setEmail("");
      setPwd("");
      setSuccess(true);
    } catch (err) {
      if (!err.response) {
        setErrorMsg("No server response");
      } else if (err.response?.status === 400) {
        setErrorMsg("Missing username or password");
      } else if (err.response?.status === 401) {
        setErrorMsg("Unauthorized");
      } else {
        setErrorMsg("Login failed");
      }
    }
  }

  return (
    <>
      {success ? (
        <p>you are logged in</p>
      ) : (
        <div className="login-form">
          <div className="login-inner">
            <p
              ref={errRef}
              className={errorMsg ? "errmsg" : "hidden"}
              aria-live="assertive"
            >
              {errorMsg}
            </p>
            <div className="top">
              <h4>
                Welcome <span>Back!</span>
              </h4>
              <p>
                Thank you for coming back. Hope you have a good day and inspire
                others.
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="email-input">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@net.com"
                  autoComplete="off"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />
              </div>
              <div className="pwd-login">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="••••••••••••••••"
                  onChange={(e) => setPwd(e.target.value)}
                  value={pwd}
                  required
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
      )}
    </>
  );
}

export default Login;
