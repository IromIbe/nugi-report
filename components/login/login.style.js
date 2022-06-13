import styled from "styled-components";
import devices from "../../utils/mobile";

export const LoginContainer = styled.div``;

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
      padding: 60px 0 100px 0;

      h1 {
        font-family: "Epilogue";
        font-style: normal;
        font-weight: 600;
        font-size: 45px;
        line-height: 46px;
        letter-spacing: 0.09em;
        color: #0f017a;
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
        width: 75%;
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
            padding: 15px 20px;
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
          font-size: 17px;
          line-height: 19px;
          color: #e5e5e5;
          padding: 12px 13px;
          margin-top: 20px;

          &:disabled {
            background: #0f017a;
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
      .login-alt {
        width: 65%;

        span {
          font-family: "Space Grotesk";
          font-style: normal;
          font-weight: 400;
          font-size: 12px;
          line-height: 15px;

          color: #757171;
          display: flex;
          flex-direction: row;
        }
        span:before,
        span:after {
          content: "";
          flex: 1 1;
          border-bottom: 1px solid;
          margin: auto;
        }
        span:before {
          margin-right: 10px;
        }
        span:after {
          margin-left: 10px;
        }

        .alt {
          padding: 15px 19px;
          display: flex;
          justify-content: space-between;
          align-items: center;

          .alt-login {
            background: #ffffff;
            box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.25);
            border-radius: 8px;
            padding: 6px;
          }
        }
      }
    }
  }

  @media ${devices.mobile} {
    width: 100%;
  }
`;
