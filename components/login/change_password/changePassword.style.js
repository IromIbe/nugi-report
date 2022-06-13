import styled from "styled-components";
import devices from "../../../utils/mobile";

export const ChangePasswordCont = styled.div`
  background: url("/assets/login-bg.svg");
  width: 100%;
  background-position: center;
  background-size: auto;
  background-repeat: no-repeat;
  height: 100vh;
  .body-cont {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    min-height: 100vh;

    .mobile-logo {
      display: none;
      position: absolute;
      top: 10px;
      left: 10px;

      @media ${devices.mobile} {
        display: block;
      }
    }
    .title {
      display:flex;
      justify-content: center;
      align-items:center;
      flex-direction: column;
      padding: 0px 0 60px 0;
      @media ${devices.mobile} {
        padding: 100px 10px 60px 10px;

        }
      @media ${devices.xsmall} {
        padding: 80px 10px 20px 10px;

        }
      }
      h1 {
        font-family: "Epilogue";
        font-style: normal;
        font-weight: 600;
        font-size: 45px;
        ${"" /* line-height: 46px; */}
        letter-spacing: 0.015em;
        color: #0f017a;

        @media ${devices.tabpro} {
          font-size: 35px;
        }
        @media ${devices.res} {
          font-size: 27px;
        }
        @media ${devices.mobile} {
          font-size: 35px;
        }
        @media ${devices.s20Ultra} {
          font-size: 30px;
        }
        @media ${devices.s8Plus} {
          font-size: 25px;
        }
        @media ${devices.xsmall} {
          font-size: 20px;
        }
      }
      p {
        line-height: 18px;
        text-align: center;
        letter-spacing: 0.015em;
      }

    }
    .form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      form {
        width: 60%;
        margin-bottom: 35px;
        label {
          margin-left: 20px;
          font-family: "Space Grotesk";
          font-style: normal;
          font-weight: 300;
          font-size: 16px;
          line-height: 18px;

          color: #4f4f4f;
          input {
            margin-bottom: 35px;
            padding: 15px 23px;
            width: 100%;
            background: #ffffff;
            border: 1px solid #cacaca;
            box-shadow: 2px 4px 5px rgba(79, 79, 79, 0.05);
            border-radius: 25px;
            outline: none;
            background: transparent;
          }
        }
        button {
          text-align: center;
          width: 100%;
          outline: none;
          border: none;
          background: #0f017a;
          border-radius: 25px;
          font-family: "Space Grotesk";
          font-style: normal;
          font-weight: 700;
          font-size: 15px;
          line-height: 19px;
          color: #e5e5e5;
          padding: 12px 13px;
          margin-top: 20px;
        }
        @media ${devices.large} {
          width: 70%;
        }
        @media ${devices.surfacePro} {
          width: 80%;
        }
        @media ${devices.galaxyTab} {
          width: 87%;
        }
        @media ${devices.res} {
          width: 95%;
        }
        @media ${devices.res} {
          width: 90%;
        }
      }
    }
  }
`;
