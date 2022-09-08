import styled from "styled-components";
import devices from "../../utils/mobile";

export const LoginBody = styled.div`
  background: url("/assets/login-bg.svg");
  width: 100%;
  background-position: center;
  background-size: auto;
  background-repeat: no-repeat;
  .body-cont {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    padding: 0 auto;
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
      padding: 60px 0 80px 0;

      h1 {
        font-family: "Epilogue";
        font-style: normal;
        font-weight: 600;
        font-size: 45px;
        line-height: 46px;
        letter-spacing: 0.1em;
      }
      @media ${devices.mobile} {
        padding: 100px 0 60px 0;
      }
      @media ${devices.xsmall} {
        padding: 100px 0 30px 0;
      }
    }

    .form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      form {
        width: 62%;
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
            margin-bottom: 30px;
            padding: 13px 20px;
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
          background: #2196f3;
          border-radius: 15px;

          font-family: "Space Grotesk";
          font-style: normal;
          font-weight: 400;
          font-size: 15px;
          line-height: 19px;
          color: #e5e5e5;
          padding: 11px 13px;
          margin-top: 20px;

          &:disabled {
            ${"" /* background: #3196f9; } */}
            opacity: 0.8;
          }
        }
        @media ${devices.tabpro} {
          width: 85%;
        }
        @media ${devices.res} {
          width: 90%;
        }
        @media ${devices.mobile} {
          width: 90%;
        }
      }
    }
  }

  @media ${devices.mobile} {
    width: 100%;
  }
`;
