import "./signUp.css";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import avatar from "../../assets/images/avatar.png";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = "/signup";

function SignUp() {
  const errRef = useRef();
  const userEmail = useRef();

  const [firstName, setFirstName] = useState("");
  const [validFirstName, setValidFirstName] = useState(false);
  const [firstNameFocus, setFirstNameFocus] = useState(false);

  const [lastName, setLastName] = useState("");
  const [validLastName, setValidLastName] = useState(false);
  const [lastNameFocus, setLastNameFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userEmail.current.focus();
  }, []);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidFirstName(USER_REGEX.test(firstName));
    setValidLastName(USER_REGEX.test(lastName));
  }, [firstName, lastName]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [email, firstName, lastName, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(true);
    setEmail("");
    setFirstName("");
    setLastName("");
    setPwd("");
    setMatchPwd("");
    console.log(firstName, lastName, email, pwd);
  };

  return success ? (
    <>
      <h1>you are signed up</h1>
    </>
  ) : (
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
            />
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="email-input">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="example@net.com"
              autoComplete="off"
              required
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setEmailFocus(true)}
              value={email}
              ref={userEmail}
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
                id="first"
                placeholder="John"
                autoComplete="off"
                required
                onChange={(e) =>
                  setFirstName(
                    e.target.value.charAt(0).toUpperCase() +
                      e.target.value.slice(1)
                  )
                }
                onFocus={() => setFirstNameFocus(true)}
                value={firstName}
              />
            </div>

            <div className="last-name">
              <label htmlFor="last">Last Name</label>
              <input
                type="text"
                id="last"
                placeholder="Scott"
                autoComplete="off"
                required
                onChange={(e) =>
                  setLastName(
                    e.target.value.charAt(0).toUpperCase() +
                      e.target.value.slice(1)
                  )
                }
                onFocus={() => setLastNameFocus(true)}
                value={lastName}
              />
            </div>
          </div>

          <p
            className={
              firstNameFocus && firstName && !validFirstName
                ? "instructions"
                : "hidden"
            }
          >
            4 to 24 characters.
            <br />
            Must begin with a letter.
            <br />
            Letters, numbers, underscores, hyphens allowed.
          </p>
          <p
            className={
              lastNameFocus && lastName && !validLastName
                ? "instructions"
                : "hidden"
            }
          >
            4 to 24 characters.
            <br />
            Must begin with a letter.
            <br />
            Letters, numbers, underscores, hyphens allowed.
          </p>

          <div className="pwd">
            <div className="pwd-first">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="••••••••••••••••"
                onChange={(e) => setPwd(e.target.value)}
                onFocus={() => setPwdFocus(true)}
                value={pwd}
                required
                autoComplete="new-password"
              />
              <p
                className={
                  pwdFocus && pwd && !validPwd ? "instructions" : "hidden"
                }
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
              </p>
            </div>

            <div className="pwd-repeat">
              <label htmlFor="repeat-password">Confirm Password</label>
              <input
                type="password"
                id="repeat-password"
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
            disabled={
              !validEmail ||
              !validFirstName ||
              !validLastName ||
              !validPwd ||
              !validMatch
                ? true
                : false
            }
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
