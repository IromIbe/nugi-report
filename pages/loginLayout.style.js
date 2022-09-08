import styled from "styled-components";
import devices from "../utils/mobile";

export const LoginLayoutCont = styled.div`
  width: 60%;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;

  @media ${devices.mobile} {
    width: 100%;
    right: unset;
    left: 0;
    ${"" /* padding: 10px 10px; */}
  }
`;
