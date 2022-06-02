/* eslint-disable @next/next/no-img-element */
import React from "react";
import { overviewCont, FirstCont, SecondCont } from "./overview.style";
import ProgressCard from "./progressCard";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
function Overview() {
  const percentage = 95;
  const numbered = 80;

  return (
    <overviewCont className='flex'>
      <FirstCont className=''>
        <div className='heading pb-10'>
          <h1 className='text-black font-bold text-3xl pb-2'>Hello, Rebecca</h1>
          <p className='text-base font-normal text-gray-500'>Welcome Back!</p>
        </div>
        <div className='card flex justify-between'>
          <ProgressCard>
            <div className='flex'>
              <img src='/assets/thunder.svg' alt='' />
              <div className='text pl-3'>
                <p className='text-xl text-[#2196F3]'>16 days!!!</p>
                <span className='text-sm text-[#A6D5FA]'>Let’s keep it up</span>
              </div>
            </div>
          </ProgressCard>
          <ProgressCard>
            <div className='flex'>
              <div className='text flex justify-center items-center'>
                <p className='text-lg text-black pr-5 font-medium'>This week</p>
              </div>
              <div style={{ width: "40%", fontWeight: 600 }}>
                <CircularProgressbar
                  value={numbered}
                  //   maxValue={1}
                  text={`${numbered / 20}/5`}
                  styles={buildStyles({
                    rotation: 0.25,
                    textSize: "19px",
                    pathTransitionDuration: 0.5,
                    pathColor: `#2196F3`,
                    textColor: "#000000",
                    fontWeight: 800,
                  })}
                />
              </div>
            </div>
          </ProgressCard>
          <ProgressCard>
            <div className='flex'>
              <div className='text flex justify-center items-center'>
                <p className='text-lg text-black pr-5 font-medium'>
                  Total Reports
                </p>
              </div>
              <div style={{ width: "40%", fontWeight: 600 }}>
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}%`}
                  styles={buildStyles({
                    rotation: 0.25,
                    textSize: "19px",
                    pathTransitionDuration: 0.5,
                    pathColor: `#2196F3`,
                    textColor: "#000000",
                  })}
                />
              </div>
            </div>
          </ProgressCard>
        </div>
      </FirstCont>
      <SecondCont className='w-30'></SecondCont>
    </overviewCont>
  );
}

export default Overview;
