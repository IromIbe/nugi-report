import React from "react";
// import styled from "styled-components";
import { LoginLayoutCont } from "./loginLayout.style";
import ChangePasswordPg from "../components/login/change_password/changePassword";

const ChangePassword = () => {
  return (
    <LoginLayoutCont>
      <ChangePasswordPg />
    </LoginLayoutCont>
  );
};

export default ChangePassword;
