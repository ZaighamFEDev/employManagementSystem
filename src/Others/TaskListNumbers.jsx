/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useMemo } from 'react';

const TaskListNumbers = ({ data }) => {
 
  return (
    <div className="flex gap-3 justify-between">
      <div className="bg-blue-600 h-[150px] w-full flex flex-col justify-center p-5 rounded-lg">
        <p className="text-3xl">{data.taskCounts.newTask}</p>
        <p className="text-xl">New Task</p>
      </div>
      <div className="bg-green-600 h-[150px] w-full flex flex-col justify-center p-5 rounded-lg">
        <p className="text-3xl">{data.taskCounts.completed}</p>
        <p className="text-xl">Completed</p>
      </div>
      <div className="bg-yellow-600 h-[150px] w-full flex flex-col justify-center p-5 rounded-lg">
        <p className="text-3xl">{data.taskCounts.active}</p>
        <p className="text-xl">Accepted</p>
      </div>
      <div className="bg-red-600 h-[150px] w-full flex flex-col justify-center p-5 rounded-lg">
        <p className="text-3xl">{data.taskCounts.failed}</p>
        <p className="text-xl">Failed</p>
      </div>
    </div>
  );
};

export default TaskListNumbers;
