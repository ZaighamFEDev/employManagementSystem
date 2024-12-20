/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
import { useContext, useEffect } from "react"
import { AuthContext } from "../context/AuthProvider"
import { setLocalStorage } from "../utils/LocalStorage";

const AllTasks = () => {
  const [userData, setUserData] = useContext(AuthContext);
useEffect(() => {
 setLocalStorage()
}, [userData])


  return (
    < div className="bg-[#1C1C1C] md:px-5 mt-5 py-2">
    <div className="flex items-center justify-between px-1 md:px-3 py-1 bg-gray-600 rounded-md mb-2">
           <h2 className="text-sm md:text-xl w-1/5 ">Emp Names</h2>
           <p className="text-sm md:text-xl w-1/5 ">New Tasks</p>
           <h1 className="text-sm md:text-xl w-1/5 ">Active Tasks</h1>
           <p className="text-sm md:text-xl w-1/5 ">Complete Tasks</p>
           <p className="text-sm md:text-xl w-1/5 ">Failed Tasks</p>
       </div>

    <div className="no-scrollbar flex flex-col gap-2 py-3 h-[190px] overflow-auto">
        {userData.employees.map((user, key)=>{
           return   <div key={key} className="flex items-center justify-between px-3 py-1 border-[1.5px] border-green-400 rounded-md">
           <h2 className="text-sm md:text-lg w-1/5 ">{user.firstName}</h2>
           <h2 className="text-sm md:text-lg w-1/5  text-blue-500">{user.taskCounts.newTask}</h2>
           <h2 className="text-sm md:text-lg w-1/5  text-yellow-500">{user.taskCounts.active}</h2>
           <h2 className="text-sm md:text-lg w-1/5  text-green-500">{user.taskCounts.completed}</h2>
           <h2 className="text-sm md:text-lg w-1/5  text-red-600">{user.taskCounts.failed}</h2>
       </div>
        })}
        
    </div>
    </div>
  )
}

export default AllTasks;