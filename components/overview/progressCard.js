import React from "react";
import styled from "styled-components";
import devices from "../../utils/mobile";

export const CardCont = styled.div`
  ${"" /* width: 31.5%; */}
  height: 140px;
  border: 1px solid #e4e4e4;
  border-radius: 20px;
  ${
    "" /* @media ${devices.surfacePro} {
    padding: 0 10px;
  } */
  }
`;

function ProgressCard({ children }) {
  return (
    <CardCont className='flex justify-center items-center sm:px-1 md:px-0 lg:px-5'>
      {children}
    </CardCont>
  );
}

export default ProgressCard;
