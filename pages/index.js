import Login from "../components/login/login";
import styled from "styled-components";
import  LoginLayoutCont  from "./loginLayout.style";

const LoginCont = styled.div``;

export default function LoginScreen() {
  return (
    <LoginLayoutCont>
      <Login />
    </LoginLayoutCont>
  );
}
