import React from 'react';
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

const Task = ({ taskText, enterEditMode, deleteTask }) => {
  return (
    <div className="task">
      <div className="text">{taskText}</div>
      <div className="icons">
        <BiEdit className='icon' onClick={enterEditMode} />
        <AiFillDelete className='icon' onClick={deleteTask} />
      </div>
    </div>
  );
};

export default Task;
