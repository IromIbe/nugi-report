/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { LoginBody } from "./login.style";

function Login() {
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });
  // const [disable, setDisable] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails({ ...loginDetails, [name]: value });
  };
  return (
    <LoginBody>
      <div className='body-cont'>
        <div className='mobile-logo'>
          <img src='/assets/logo.svg' layout='' className='logo' alt='' />
        </div>
        <div className='title'>
          <h1 className='text-[#2196F3]'>Login</h1>
        </div>
        <div className='form'>
          <form autoComplete='off'>
            <label htmlFor='username'>
              Username
              <input
                type='text'
                value={loginDetails.username}
                name='username'
                onChange={handleChange}
              />
            </label>
            <label htmlFor='username'>
              Password
              <input
                type='password'
                value={loginDetails.password}
                name='password'
                onChange={handleChange}
              />
            </label>
            {/* <p>
                Forgot password? <span>Click here</span>
              </p> */}
            <button
              type='submit'
              disabled={!loginDetails.username || !loginDetails.password}
            >
              Login
            </button>
          </form>
          {/* <div className='login-alt'>
            <span>Or login with</span>
            <div className='alt'>
              <div className='alt-login'>
                <img src='/assets/google.svg' alt='' />
              </div>
              <div className='alt-login'>
                <img src='/assets/Facebook.svg' alt='' />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </LoginBody>
  );
}

export default Login;
