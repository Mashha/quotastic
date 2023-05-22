import "./signUp.css";
import { Link } from "react-router-dom";
import avatar from "../../assets/images/avatar.png";

function SignUp() {
  return (
    <div className="sign-up-form">
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
          <input type="file" name="file" className="fileBtn" accept="image/*" />
        </div>
      </div>

      <form action="">
        <div className="email-input">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="example@net.com" />
        </div>
        <div className="first-last">
          <div className="first-name">
            <label htmlFor="first">First Name</label>
            <input type="text" name="first" placeholder="John" />
          </div>
          <div className="avatar-image">
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

          <div className="last-name">
            <label htmlFor="last">Last Name</label>
            <input type="text" name="last" placeholder="Scott" />
          </div>
        </div>
        <div className="pwd">
          <div className="pwd-first">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="••••••••••••••••"
            />
          </div>
          <div className="pwd-repeat">
            <label htmlFor="repeat-password">Confirm Password</label>
            <input
              type="password"
              name="repeat-password"
              placeholder="••••••••••••••••"
            />
          </div>
        </div>
        <button className="submit-btn">Sign Up</button>
      </form>
      <div className="sign-in">
        <p>Already have an account?</p>
        <Link to="/login">Sign In</Link>
      </div>
    </div>
  );
}

export default SignUp;
