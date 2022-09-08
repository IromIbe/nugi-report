import React from "react";
import { LoginLayoutCont } from "./loginLayout.style";
import SuccessPage from "../components/login/change_password/successPage";

function success() {
  return (
    <LoginLayoutCont className='flex flex-col justify-center items-center'>
      <SuccessPage />
    </LoginLayoutCont>
  );
}

export default success;
