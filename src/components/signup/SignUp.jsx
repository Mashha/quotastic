import "./signUp.css";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import avatar from "../../assets/images/avatar.png";

const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = "/signup";

function SignUp() {
  const errRef = useRef();

  const [firstName, setFirstName] = useState("");
  //const [validFirstName, setValidFirstName] = useState(false);

  const [lastName, setLastName] = useState("");
  //const [validLastName, setValidLastName] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  //const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [email, pwd, matchPwd]);

  return (
    <div className="sign-up-form">
      <div className="sign-up-inner">
        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "hidden"}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <div className="top">
          <h4>
            What is your <span id="name">name?</span>
          </h4>
          <p>Your name will appear on quotes and your public profile.</p>
          {/* upload image option */}
          <div className="avatar-image-top">
            <label htmlFor="file">
              <img src={avatar} alt="" />{" "}
            </label>
            <input
              type="file"
              name="file"
              className="fileBtn"
              accept="image/*"
              autoComplete="off"
            />
          </div>
        </div>

        <form action="">
          <div className="email-input">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="example@net.com"
              autoComplete="off"
              required
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setEmailFocus(true)}
              value={email}
            />
            <p
              className={
                emailFocus && email && !validEmail ? "instructions" : "hidden"
              }
            >
              Type in valid email address
            </p>
          </div>

          <div className="first-last">
            <div className="first-name">
              <label htmlFor="first">First Name</label>
              <input
                type="text"
                name="first"
                placeholder="John"
                autoComplete="off"
                required
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
              />
            </div>

            <div className="last-name">
              <label htmlFor="last">Last Name</label>
              <input
                type="text"
                name="last"
                placeholder="Scott"
                autoComplete="off"
                required
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
              />
            </div>
          </div>

          <div className="pwd">
            <div className="pwd-first">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="••••••••••••••••"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
                autocomplete="new-password"
              />
              {/* <p
                id="pwdnote"
                className={pwdFocus && !validPwd ? "instructions" : "hidden"}
              >
                8 to 24 characters.
                <br />
                Must include uppercase and lowercase letters, a number and a
                special character.
                <br />
                Allowed special characters:{" "}
                <span aria-label="exclamation mark">!</span>{" "}
                <span aria-label="at symbol">@</span>{" "}
                <span aria-label="hashtag">#</span>{" "}
                <span aria-label="dollar sign">$</span>{" "}
                <span aria-label="percent">%</span>
              </p> */}
            </div>

            <div className="pwd-repeat">
              <label htmlFor="repeat-password">Confirm Password</label>
              <input
                type="password"
                name="repeat-password"
                placeholder="••••••••••••••••"
                required
                onChange={(e) => setMatchPwd(e.target.value)}
                onFocus={() => setMatchFocus(true)}
                value={matchPwd}
              />
              <p
                id="confirmnote"
                className={
                  matchFocus && !validMatch ? "instructions" : "hidden"
                }
              >
                Must match the first password input field.
              </p>
            </div>
          </div>
          <button
            className="submit-btn"
            disabled={!validEmail || !validPwd || !validMatch ? true : false}
          >
            Sign Up
          </button>
        </form>
        <div className="sign-in">
          <p>Already have an account?</p>
          <Link to="/login">Sign In</Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
