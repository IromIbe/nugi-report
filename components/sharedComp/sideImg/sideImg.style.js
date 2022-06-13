import styled from "styled-components";
import devices from "../../../utils/mobile";

export const SideImgCont = styled.div`
  background: url("/assets/side-pic.svg");
  width: 40%;
  height: 100vh;
  position: fixed;
  top: 0;
  ${"" /* left: 0; */}
  bottom: 0;
  z-index: 1;
  ${"" /* overflow: hidden; */}
  position: relative;

  .logo {
    position: absolute;
    top: 20px;
    left: 30px;
  }

  h1 {
    font-family: "Epilogue", sans-serif;
    position: absolute;
    z-index: 999;
    margin: 0 auto;
    left: 0;
    right: 10px;
    ont-style: normal;
    font-weight: 700;
    font-size: 3rem;
    line-height: 58px;
    text-align: right;
    letter-spacing: 0.15em;
    color: #ffffff;
    top: 40%; /* Adjust this value to move the positioned div up and down */
    text-align: right;
    @media ${devices.surfacePro} {
      font-size: 2.4rem;
    }
    @media ${devices.miniTab} {
      font-size: 2rem;
    }
    @media ${devices.res} {
      font-size: 1.6rem;
    }
  }
  @media ${devices.mobile} {
    display: none;
  }
  @media ${devices.mobile} {
    display: none;
  }
`;
