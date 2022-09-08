/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { SavedCont } from "./savedForm.style";
import dynamic from "next/dynamic";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const Checkmark = dynamic(
  () => {
    return import("react-checkmark").then((mod) => mod.Checkmark);
  },
  { ssr: false }
);
// import { Checkmark } from "react-checkmark";

// import Modal from "../sharedComp/modal/modal";

function SavedForm() {
  const percentage = 80;
  const days = [
    {
      day: "Mo",
      status: true,
    },
    {
      day: "Tu",
      status: true,
    },
    {
      day: "We",
      status: false,
    },
    {
      day: "Th",
      status: true,
    },
    {
      day: "Fr",
      status: true,
    },
  ];
  // const [openModal, setOpenModal] = useState(false);
  const friday = new Date();
  let publishDay = friday.getDay();

  console.log(publishDay === 5 ? "thursday" : "not friday");
  return (
    <SavedCont className='flex flex-col'>
      <div className='flex flex-col items-center'>
        <div className='heading pt-9 mt-11 mb-8'>
          <h1 className='text-[#686B6F] text-2xl font-bold  leading-10'>
            Report Saved
          </h1>
        </div>

        <div className='progress-bar'>
          <div style={{ width: "220px" }}>
            <CircularProgressbarWithChildren
              value={percentage}
              circleRatio={0.8}
              // counterClockwise={true}
              styles={buildStyles({
                rotation: 0.599,

                pathTransitionDuration: 0.5,
                pathColor: "#FFB400",

                trailColor: "#F9F9F9",
                // backgroundColor: "#FFB400",
              })}
            >
              <img
                src='/assets/streak.svg'
                alt='doge'
                className='flex justify-center items-center mt-9'
              />
              <div className='text mt-9'>
                <span className='text-[#2196F3] font-semibold text-base leading-6 '>
                  16 days!!!
                </span>
              </div>
            </CircularProgressbarWithChildren>
          </div>
        </div>
        <div className='sub-text'>
          <p className='text-[#B9B9C3] text-tiny leading-6 font-medium'>
            Build your streak by reporting everyday
          </p>
        </div>
        <div className='days flex mt-3 justify-between'>
          {days.map((day, idx) => (
            <div
              key={idx}
              className='p-3 single flex flex-col justify-center items-center'
            >
              <span className=' text-[#B9B9C3] text-sm leading-5 font-semibold'>
                {day.day}
              </span>
              {!day.status ? (
                <div className='image mt-3'></div>
              ) : (
                <div className=' mt-3 flex flex-col justify-end'>
                  <Checkmark size='34px' color='#2196f3' />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {publishDay === 2 && (
        <div className='publish flex justify-end items-center mt-9 pt-9'>
          <div className='flex justify-between'>
            <button className='save m-2 px-6   text-[#2196F3] text-tiny font-semibold leading-5 bg-white'>
              Save
            </button>
            <button
              className='m-2 px-6 hover:bg-[#1c7dca] text-white text-tiny font-semibold leading-5 bg-[#2196F3]'
              // onClick={() => setOpenModal(true)}
            >
              Publish
            </button>
          </div>
        </div>
      )}
      {/* {openModal && (
        <Modal handleClose={setOpenModal}>
          <h1>heyy</h1>
        </Modal>
      )} */}
    </SavedCont>
  );
}

export default SavedForm;
