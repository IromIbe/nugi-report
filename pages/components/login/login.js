import React, { useState } from "react";
import { LoginContainer, SideImg, LoginBody } from "./login.style";

function Login() {
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails({ ...loginDetails, [name]: value });
  };
  return (
    <LoginContainer>
      <SideImg>
        <img src='/assets/logo.svg' className='logo' alt='' />

        <h1>
          REPORT <br />
          MANAGEMENT <br />
          SYSTEM
        </h1>
      </SideImg>
      <LoginBody>
        <div className='body-cont'>
          <div className='mobile-logo'>
            <img src='/assets/logo.svg' className='logo' alt='' />
          </div>
          <div className='title'>
            <h1>Login</h1>
          </div>
          <div className='form'>
            <form>
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
              <p>
                Forgot password? <span>Click here</span>
              </p>
              <button>Login</button>
            </form>
            <div className='login-alt'>
              <span>Or login with</span>
              <div className='alt'>
                <div className='alt-login'>
                  <img src='/assets/google.svg' alt='' />
                </div>
                <div className='alt-login'>
                  <img src='/assets/Facebook.svg' alt='' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </LoginBody>
    </LoginContainer>
  );
}

export default Login;
