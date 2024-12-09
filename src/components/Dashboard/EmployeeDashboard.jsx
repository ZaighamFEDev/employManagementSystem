/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Header from "../../Others/Header"
import TaskListNumbers from "../../Others/TaskListNumbers"
import Tasklist from "../../TaskList/Tasklist"

const EmployeeDashboard = ({data, changeUser}) => {
  // console.log("data",data)
  return (
    <div className="h-screen bg-[#1C1C1C] px-10">
    <Header data={data} changeUser={changeUser} />
    <TaskListNumbers data={data}/>
    <Tasklist data={data}/>
    </div>
  )
}

export default EmployeeDashboard