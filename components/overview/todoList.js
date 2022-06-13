import React from "react";
import styled from "styled-components";

const TodoCont = styled.div`
  .todos {
    font-family: "Montserrat", sans-serif;
    .item {
      border-radius: 10px;
    }
  }
`;

const todo = [
  { task: "How to create gradients", time: "10am - 12:30 am" },
  { task: "How to create gradients", time: "10am - 12:30 am" },
  { task: "How to create gradients", time: "10am - 12:30 am" },
];

function TodoList() {
  return (
    <TodoCont className='w-full pt-10 flex flex-col'>
      <div className='title flex justify-between items-end pb-6'>
        <h3 className='text-[#686B6F] text-base font-semibold leading-4'>
          To-Do List
        </h3>
        <span className='text-[#2196F3] font-semibold text-tiny leading-3'>
          View all{" "}
        </span>
      </div>
      <div className='todos'>
        {todo.map((todo, idx) => (
          <>
            <div
              className='item bg-[#F9F9F9] py-4 pl-4 flex mb-4 justify-start items-center'
              key={idx}
            >
              <img src='/assets/todo.svg' alt='' />
              <div className='flex justify-center items-start pl-3 flex-col'>
                <h5 className='text-[#686B6F] leading-5 font-medium text-tiny mb-3'>
                  {todo.task}
                </h5>
                <span className='text-[#C4C4C4] text-sm leading-3'>
                  {todo.time}
                </span>
              </div>
            </div>
          </>
        ))}
      </div>
    </TodoCont>
  );
}

export default TodoList;
