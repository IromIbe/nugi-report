import React from "react";
import styled from "styled-components";

export const CardCont = styled.div`
  width: 31.5%;
  height: 140px;
  border: 1px solid #e4e4e4;
  border-radius: 20px;
`;

function ProgressCard({ children }) {
  return (
    <CardCont className='flex justify-center items-center px-5'>
      {children}
    </CardCont>
  );
}

export default ProgressCard;
