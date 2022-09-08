/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
// import TodoList from "../overview/todoList";
import { ReportCont } from "./addReport.style";
// import Link from "next/dist/client/link";
import { v4 as uuidv4 } from "uuid";
import SideReport from "../sharedComp/side-report/sideReport";
import SavedForm from "../savedForm/savedForm";

function AddReport() {
  const [saved, setSaved] = useState(false);
  const [task, setTask] = useState({ summary: "", description: "", id: "" });
  const [taskList, setTaskList] = useState([]);
  const [edit, setEdit] = useState(false);
  const handleChange = (e) => {
    // console.log(e.target.value, "hh");
    const { name, value } = e.target;
    setTask((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    const newTask = { ...task, id: uuidv4() };
    setTaskList((prev) => [...prev, newTask]);
    setTask({ summary: "", description: "", id: "" });
  };
  const editHandler = (id) => {
    const editableItem = taskList.find((item) => item.id === id);
    setTask(editableItem);
    setEdit(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSaved(true);
    // setDone({ ...done, day1: true });
  };
  return (
    <ReportCont className='flex'>
      {!saved && (
        <div className='main'>
          <div className='title'>
            <h1 className='text-[#686B6F] text-3xl font-bold'>New Report</h1>
          </div>
          <div className='dual-cont py-8 flex justify-center items-start'>
            <div className='cont-one pr-4 flex flex-col '>
              <div className='title flex justify-start items-center'>
                <h4 className='text-[#686B6F] leading-6 text-xl font-medium pr-5'>
                  Task
                </h4>
                <span className='leading-4 text-[#686B6F] font-normal text-sm'>
                  Monday. 23rd May
                </span>
              </div>
              <form autoComplete='off'>
                <div className='tab'>
                  {taskList.map((arrItem, index) => (
                    <>
                      <div
                        className='task-item'
                        key={index}
                        onClick={() => editHandler(arrItem.id, index)}
                      >
                        <input
                          type='text'
                          value={arrItem.summary}
                          disabled
                          className='my-3'
                          required
                        />
                      </div>
                    </>
                  ))}
                  {/* {edit === true ? (
                    <button onClick={updateTask}>Edit</button>
                  ) : (
                    ""
                  )} */}
                  <div className='flex justify-end items-end'>
                    <button
                      className='add  text-white mt-5 mb-14 font-semibold text-sm flex justify-center items-center py-2 px-3 leading-4'
                      onClick={handleAddTask}
                      disabled={!task.summary || !task.description}
                    >
                      <span className='mr-1'>
                        <img src='/assets/add-task.svg' alt='' />
                      </span>{" "}
                      Add Task
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className='cont-two pl-4'>
              <h1 className='text-[#686B6F] leading-6 text-xl font-medium'>
                Summary
              </h1>
              <form autoComplete='off' onSubmit={handleSubmit}>
                <div>
                  <div className='inputs'>
                    <div className='summa mt-3 mb-6'>
                      <input
                        type='text'
                        name='summary'
                        placeholder='Summary of task done'
                        value={task.summary}
                        onChange={handleChange}
                      />
                    </div>
                    <div className='description'>
                      <textarea
                        name='description'
                        value={task.description}
                        onChange={handleChange}
                        id=''
                        cols='30'
                        rows='10'
                        placeholder='Write a short description here'
                      ></textarea>
                    </div>
                  </div>
                  <div>
                    <div className='flex flex-col justify-center items-end'>
                      <button
                        className='send mt-6  flex justify-center items-center'
                        onClick={handleSubmit}
                      >
                        <span className='save flex justify-center items-center'>
                          Save
                        </span>
                        <span className='save-btn flex justify-center items-center'>
                          <img src='/assets/send.svg' alt='' />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      {saved && <SavedForm />}
      <SideReport />
    </ReportCont>
  );
}

export default AddReport;
