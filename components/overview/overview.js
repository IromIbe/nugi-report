/* eslint-disable @next/next/no-img-element */
import React from "react";
import { OverviewCont, FirstCont, SecondCont } from "./overview.style";
import ProgressCard from "./progressCard";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ViewReports from "./viewReports";
import ProjectCalendar from "./calender/calendar";
import TodoList from "./todoList";
import Link from "next/dist/client/link";
function Overview() {
  const percentage = 95;
  const numbered = 60;

  return (
    <OverviewCont className='flex'>
      <FirstCont className=''>
        <div className='heading pb-10'>
          <h1 className='text-black font-bold text-3xl pb-2'>Hello, Rebecca</h1>
          <p className='text-base font-normal text-gray-500'>Welcome Back!</p>
        </div>
        <div className='card flex justify-between mb-12'>
          <ProgressCard>
            <div className='flex-col flex md:flex-row justify-center items-center'>
              <img src='/assets/thunder.svg' alt='' className='' />
              <div className='text sm:pl-1 md:pl-2 lg:pl-5 pl-5'>
                <p className='md:text-lg lg:text-xl text-[#2196F3]'>
                  16 days!!!
                </p>
                <span className='text-sm text-[#A6D5FA]'>Let’s keep it up</span>
              </div>
            </div>
          </ProgressCard>
          <ProgressCard>
            <div className='flex-col flex  md:flex-row justify-center items-center'>
              <div className='text flex justify-center items-center'>
                <p className='text-lg text-black sm:pr-1 md:pr-0 lg:pr-1 pr-3 font-medium'>
                  This week
                </p>
              </div>
              <div
                style={{ width: "80px", fontWeight: 600 }}
                className='md:pl-2'
              >
                <CircularProgressbar
                  value={numbered}
                  //   maxValue={1}
                  text={`${numbered / 20}/5`}
                  styles={buildStyles({
                    rotation: 0.25,
                    textSize: "19px",
                    trailColor: "#F9F9F9",
                    pathTransitionDuration: 0.5,
                    pathColor: `#2196F3`,
                    textColor: "#000000",
                  })}
                />
              </div>
            </div>
          </ProgressCard>
          <ProgressCard>
            <div className='flex-col flex  md:flex-row justify-center items-center'>
              <div className='text flex justify-center items-center'>
                <p className='text-lg text-black sm:pr-2 md:pr-0 lg:pr-1 pr-5 font-medium'>
                  Total Reports
                </p>
              </div>
              <div
                style={{ width: "80px", fontWeight: 600 }}
                className='md:pl-2'
              >
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}%`}
                  styles={buildStyles({
                    rotation: 0.25,
                    textSize: "19px",
                    trailColor: "#F9F9F9",
                    pathTransitionDuration: 0.5,
                    pathColor: `#2196F3`,
                    textColor: "#000000",
                  })}
                />
              </div>
            </div>
          </ProgressCard>
        </div>
        <div className='view-reports'>
          <ViewReports />
          <span className='flex justify-end items-end pt-4 text-[#686B6F] text-base font-normal'>
            View all
          </span>
        </div>
      </FirstCont>
      <SecondCont className=' px-5'>
        <div className='flex flex-col'>
          <div className='flex justify-center items-center mt-12 mb-14'>
            <Link href='/dashboard/add_report'>
              <button className='add  text-white  font-bold text-tiny flex justify-center items-center py-3 px-4'>
                <span className='mr-2'>
                  <img src='/assets/add-icon.svg' alt='' />
                </span>{" "}
                Add Report
              </button>
            </Link>
          </div>

          <div className='calender w-full pt-4 px-3 mt-2'>
            <ProjectCalendar />
          </div>

          <TodoList />
        </div>
      </SecondCont>
    </OverviewCont>
  );
}

export default Overview;
