import React from "react";
import styled from "styled-components";
import TodoList from "../../overview/todoList";

const SideReportCont = styled.div`
  padding: 3.3rem 1rem;
  width: 28%;
  min-height: 100%;
  ${"" /* position: fixed; */}
  ${"" /* z-index: 1; */}
  ${"" /* top: 0; */}
  ${"" /* right: 0; */}
  ${"" /* overflow-y: scroll; */}
`;

function SideReport() {
  return (
    <SideReportCont className='side-bar flex flex-col w-full'>
      <div className='img-high-five py-5 flex  justify-center items-center'>
        <img src='/assets/high-five.svg' alt='' className='pb-7' />
      </div>
      <TodoList />
    </SideReportCont>
  );
}

export default SideReport;
