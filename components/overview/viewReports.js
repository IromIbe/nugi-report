import React from "react";
import styled from "styled-components";
import devices from "../../utils/mobile";

const ViewReportsCont = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 35px;

  .blue {
    background: #8ec5f7;
  }
  .lighter {
    background: #5276e1;
  }
  .single {
    border-radius: 25px;
    height: 165px;
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
        <div
          className={`${
            idx % 2 === 0 + 1 ? "blue" : "lighter"
          } single flex justify-center items-center`}
          key={idx}
        >
          <h1 className='font-medium text-xl text-[#ffff]'>{item.title}</h1>
        </div>
      ))}
    </ViewReportsCont>
  );
}

export default ViewReports;
