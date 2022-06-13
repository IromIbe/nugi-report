import React, { useState } from "react";
import { ChangePasswordCont } from "./changePassword.style";

function ChangePasswordPg() {
  const [loginDetails, setLoginDetails] = useState({
    oldPassword: "",
    newPassword: "",
    confirmNew: "",
  });
  // const [disable, setDisable] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails({ ...loginDetails, [name]: value });
  };
  return (
    <ChangePasswordCont>
      <div className='body-cont'>
        <div className='mobile-logo'>
          <img src='/assets/logo.svg' layout='fill' className='logo' alt='' />
        </div>
        <div className='title'>
          <h1>Change Password</h1>
          <p className='text-[#0F017A] font-extralight text-lg text-center'>
            change default password to your prefferd choice
          </p>
        </div>
        <div className='form'>
          <form autoComplete='off'>
            <label htmlFor='oldPassword' className='w-100'>
              Enter current password
              <input
                type='password'
                value={loginDetails.oldPassword}
                name='oldPassword'
                onChange={handleChange}
              />
            </label>
            <label htmlFor='newPassword'>
              Enter new password
              <input
                type='password'
                value={loginDetails.newPassword}
                name='newPassword'
                onChange={handleChange}
              />
            </label>
            <label htmlFor='confirmNew'>
              Confirm new password
              <input
                type='password'
                value={loginDetails.confirmNew}
                name='confirmNew'
                onChange={handleChange}
              />
            </label>
            {/* <p>
                Forgot password? <span>Click here</span>
              </p> */}
            <div className='buttons flex justify-center items-center'>
              <button
                className='mr-2'
                type='submit'
                disabled={
                  !loginDetails.oldPassword ||
                  !loginDetails.newPassword ||
                  !loginDetails.confirmNew
                }
              >
                Submit
              </button>
              {/* <button className='ml-2'>Skip</button> */}
            </div>
          </form>
        </div>
      </div>
    </ChangePasswordCont>
  );
}

export default ChangePasswordPg;
