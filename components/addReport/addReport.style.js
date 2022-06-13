import styled from "styled-components";
import devices from "../../utils/mobile";

export const ReportCont = styled.div`
  font-family: "Montserrat", sans-serif;
  width: 100%;
  .main {
    width: 72%;
    padding: 2.8rem 2.5rem;
    border-right: 1px solid rgba(215, 223, 241, 0.45);
    border-radius: 6px;
    min-height: 100vh;

    .dual-cont {
      width: 100%;
      ${"" /* margin-right: 30px; */}

      .cont-one {
        width: 38%;
        ${"" /* border: 1px solid red; */}
        .task-item {
          input {
            width: 100%;
            background: #f9f9f9;
            padding: 15px;
            outline: none;
            border-radius: 10px;
            font-weight: 500;
            font-size: 14px;
            line-height: 15px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            color: #000000;
          }
        }
        .add {
          outline: none;
          border: none;
          background: #2196f3;
          border-radius: 10px;
          font-style: normal;
          line-height: 15px;
        }
      }
      .cont-two {
        width: 62%;
        .inputs {
          .summa {
            input {
              width: 100%;
              background: #f9f9f9;
              padding: 15px;
              now-wrap: wrap;
              outline: none;
              border-radius: 10px;
              font-weight: 500;
              font-size: 14px;
              line-height: 15px;

              color: #000000;
            }
          }
          .description {
            width: 100%;
            background: #f9f9f9;
            border-radius: 10px;
            padding: 3rem 1.8rem;
            textarea {
              padding: 10px 0;
              border-top: 1px solid #e0e0e0;
              border-bottom: 1px solid #e0e0e0;
              min-height: 400px;
              max-height: 400px;
              overflow-y: auto;
              width: 100%;
              background: #f9f9f9;
              outline: none;

              &::placeholder {
                font-weight: 450;
                font-size: 14px;
                line-height: 15px;
                color: #c4c4c4;
              }
            }
          }
        }
        .send {
          height: 35px;
          .save {
            font-style: normal;
            font-weight: 600;
            font-size: 15px;
            ${"" /* line-height: 18px; */}
            color: #545c6b;
            padding: 2px 30px;
            height: 100%;
            background: #e5e5e5;
            margin-right: 2.5px;
            border-radius: 10px 0px 0px 10px;
          }
          .save-btn {
            height: 100%;
            padding: 2px 10px;
            background: #2196f3;
            border-radius: 0px 10px 10px 0px;
          }
        }
      }
    }
  }
  .side-bar {
    padding: 3.3rem 1rem;
    width: 28%;
  }
`;
