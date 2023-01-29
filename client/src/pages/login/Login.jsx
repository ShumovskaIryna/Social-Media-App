import "./login.css";
import { useContext, useRef } from 'react';
import { loginCall } from "../../apiCalls"
import { AuthContext } from "../../context/AuthContext";
import CircularProgress from '@mui/material/CircularProgress';

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch} = useContext(AuthContext)
  const handleClick = (e) => {
    e.preventDefault();
    loginCall({ email:email.current.value, password:password.current.value }, dispatch);
  }

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Pandachat</h3>
            <span className="topbarIconBadge"></span>
          <span className="loginDesc">
            Connect with friends and the world around you on PandaChat.
          </span>
        </div>
        <div className="loginRight" onSubmit={handleClick}>
          <form className="loginBox">
          <input 
            placeholder="Email" 
            type="email" 
            className="loginInput" 
            ref={email} 
            required/>
            <input 
            placeholder="Password" 
            type="password" 
            className="loginInput" 
            minLength="6"
            ref={password} 
            required/>
            <button className="loginButton">
              {isFetching 
              ? <CircularProgress sx={{ color: 'green' }}/>
              : "Log In"}
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
