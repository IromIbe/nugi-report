/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import TodoList from "../overview/todoList";
import { ReportCont } from "./addReport.style";
import { v4 as uuidv4 } from "uuid";

function AddReport() {
  // const [active, setActive] = useState();
  const [task, setTask] = useState({ summary: "", description: "", id: "" });
  const [taskList, setTaskList] = useState([]);
  const handleChange = (e) => {
    // console.log(e.target.value, "hh");
    const { name, value } = e.target;
    setTask((prevValue) => ({ ...prevValue, [name]: value }));
  };
  const handleAddTask = (e) => {
    e.preventDefault();
    const newTask = { ...task, id: uuidv4() };
    setTask({ summary: "", description: "", id: "" });
    setTaskList((prev) => [...prev, newTask]);
    console.log(newTask, "new");
  };
  const editHandler = (id) => {
    const editableItem = taskList.find((item) => item.id === id);
    setTask(editableItem);
  };
  return (
    <ReportCont className='flex '>
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
                      onClick={() => editHandler(arrItem.id)}
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
                <div className='flex justify-end items-end'>
                  <button
                    className='add  text-white mt-5 mb-14 font-bold text-tiny flex justify-center items-center py-2 px-2'
                    onClick={handleAddTask}
                    disabled={!task.summary || !task.description}
                  >
                    <span className='mr-1 text-sm'>
                      <img src='/assets/addIcon.svg' alt='' />
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
            <form autoComplete='off'>
              <div>
                <div className='inputs'>
                  <div className='summa mt-3 mb-6'>
                    <input
                      type='text'
                      name='summary'
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
                      placeholder='Write your text here'
                    ></textarea>
                  </div>
                </div>
                <div className='send mt-6 flex justify-end items-center'>
                  <button className='save'>Send</button>
                  <button className='save-btn'>
                    <img src='/assets/send.svg' alt='' />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className='side-bar flex flex-col w-full  items-center'>
        <div className='img-high-five py-5'>
          <img src='/assets/high-five.svg' alt='' className='pb-12' />
        </div>
        <TodoList />
      </div>
    </ReportCont>
  );
}

export default AddReport;
