import styled from "styled-components";
import devices from "../../utils/mobile";

export const LoginContainer = styled.div`
  display: flex;
  @media ${devices.mobile} {
    flex-direction: column;
  }
`;

export const LoginBody = styled.div`
  background: url("/assets/login-bg.svg");
  width: 60%;
  background-position: center;
  background-size: auto;
  background-repeat: no-repeat;
  ${"" /* border: 1px solid blue; */}

  .body-cont {
    ${"" /* border: 1px solid red; */}
    .mobile-logo {
      display: none;
      position: absolute;
      top: 10px;
      left: 10px;

      @media ${devices.mobile} {
        display: block;
      }
    }
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    min-height: 100vh;

    h1 {
      padding: 60px 0 60px 0;
      font-family: "Epilogue";
      font-style: normal;
      font-weight: 600;
      font-size: 45px;
      line-height: 46px;
      letter-spacing: 0.15em;
      color: #0f017a;

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
      form {
        ${"" /* border: 1px solid green; */}
        width: 85%;
        margin-bottom: 35px;
        label {
          margin-left: 8px;
          font-family: "Space Grotesk";
          font-style: normal;
          font-weight: 300;
          font-size: 14px;
          line-height: 18px;

          color: #4f4f4f;
          input {
            margin-bottom: 30px;
            padding: 9px 12px;
            width: 100%;
            background: #ffffff;
            border: 1px solid #cacaca;
            box-shadow: 2px 4px 5px rgba(79, 79, 79, 0.05);
            border-radius: 25px;
            outline: none;
            background: transparent;
          }
        }
        p {
          text-align: center;
          font-family: "Space Grotesk";
          font-style: normal;
          font-weight: 300;
          font-size: 14px;
          line-height: 18px;
          color: #4f4f4f;

          span {
            color: #0f017a;
            font-weight: 900;
          }
        }
        button {
          text-align: center;
          width: 100%;
          outline: none;
          border: none;
          background: #0f017a;
          border-radius: 15px;

          font-family: "Space Grotesk";
          font-style: normal;
          font-weight: 700;
          font-size: 15px;
          line-height: 19px;
          color: #e5e5e5;
          padding: 8px 13px;
          margin-top: 20px;

          &:disabled {
            background: #0f017a;
            opacity: 0.8;
          }
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
