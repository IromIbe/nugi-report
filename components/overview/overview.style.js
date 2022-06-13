import styled from "styled-components";

export const OverviewCont = styled.div`
  font-family: "Montserrat", sans-serif;
`;

export const FirstCont = styled.div`
  border-right: 1px solid rgba(215, 223, 241, 0.45);
  border-radius: 6px;
  width: 72%;
  ${"" /* min-height: 100vh; */}
  padding: 2.8em  3.0rem;

  title {
    p {
      color: #686b6f;
      font-style: normal;
      font-weight: 450;
    }
  }
  .card {
    ${"" /* border: 3px solid red; */}
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(135px, 1fr));
    grid-gap: 15px;
  }
`;

export const SecondCont = styled.div`
  width: 28%;
  .add {
    outline: none;
    border: none;
    background: #2196f3;
    border-radius: 16px;
    font-style: normal;
    line-height: 25px;
    ${"" /* color: #ffffff; */}
  }
  .calender {
    border: 1px solid #e5e5e5;
    border-radius: 20px;
  }
`;
