/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "styled-components";

const SuccessCont = styled.div`
  background: url("/assets/login-bg.svg");
  width: 100%;
  background-position: center;
  background-size: auto;
  background-repeat: no-repeat;
`;

function SuccessPage() {
  return (
    <SuccessCont className='flex flex-col justify-center items-center text-center'>
      <img src='/assets/success.svg' alt='' className='mb-3' />
      <h1 className='text-[#2C3742] text-3xl leading-8 font-semibold mb-5'>
        Success!!
      </h1>
      <p className='text-[#485B79] font-medium leading-4 text-tiny'>
        You have successfully changed your password{" "}
      </p>
    </SuccessCont>
  );
}

export default SuccessPage;
