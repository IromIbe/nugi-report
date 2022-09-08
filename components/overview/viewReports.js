import React from "react";
import styled from "styled-components";
import devices from "../../utils/mobile";

const ViewReportsCont = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 35px;

  .single {
    background: url(/assets/light-bg.svg);
    border-radius: 25px;
    height: 165px;
    width: 100%;
    background-position: center;
    background-size: auto;
    background-repeat: no-repeat;

    &:hover {
      background: url(/assets/dark-bg.svg);
      border-radius: 25px;
      height: 165px;
      width: 100%;
      background-position: center;
      background-size: auto;
      background-repeat: no-repeat;
    }
  }
  @media ${devices.res} {
    display: flex;
    flex-direction: column;
  }
`;

function ViewReports() {
  const totalWeeklyReports = [
    { title: "Week 1" },
    { title: "Week 2" },
    { title: "Week 3" },
    { title: "Week 4" },
    { title: "Week 5" },
    { title: "Week 6" },
  ];

  const displayFour = totalWeeklyReports.slice(0, 4);
  return (
    <ViewReportsCont>
      {displayFour.map((item, idx) => (
        <div className='single flex justify-center items-center' key={idx}>
          <h1 className='font-medium text-xl text-[#ffff]'>{item.title}</h1>
        </div>
      ))}
    </ViewReportsCont>
  );
}

export default ViewReports;
