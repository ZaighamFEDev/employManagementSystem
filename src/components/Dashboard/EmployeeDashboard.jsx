/* eslint-disable react/prop-types */
import Header from "../../Others/Header";
import TaskListNumbers from "../../Others/TaskListNumbers";
import Tasklist from "../../TaskList/Tasklist";

const EmployeeDashboard = ({ data, changeUser, updateTaskState }) => {
  return (
    <div className="h-screen bg-[#1C1C1C] px-3 md:px-10">
      <Header data={data} changeUser={changeUser} />
      <TaskListNumbers data={data} />
      <Tasklist
        data={data}
        onAcceptTask={(taskId) =>
          updateTaskState(taskId, { newTask: false, active: true, })
        }
        onCompleteTask={(taskId) =>
          updateTaskState(taskId, { active: false, completed: true })
        }
        onFailTask={(taskId) =>
          updateTaskState(taskId, { active: false, failed: true })
        }
      />
    </div>
  );
};

export default EmployeeDashboard;
