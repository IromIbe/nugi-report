import styled, { keyframes } from "styled-components";
import devices from "../../utils/mobile";

export const SavedCont = styled.div`
  width: 72%;
  padding: 2.8rem 2.5rem;

  border-radius: 6px;
  min-height: 100vh;
  border-right: 1px solid rgba(215, 223, 241, 0.45);

  .image {
    width: 34px;
    height: 34px;
    background: #f9f9f9;
    border-radius: 50%;
  }
  .publish {
    button {
      border-radius: 16px;
      padding-top: 7px;
      padding-bottom: 7px;
      outline: none;
    }
    .save {
      border: 1px solid #2196f3;
      border-radius: 16px;
    }
  }
`;
