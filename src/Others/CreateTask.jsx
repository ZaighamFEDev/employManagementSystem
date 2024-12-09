// /* eslint-disable react-hooks/rules-of-hooks */
// /* eslint-disable no-undef */
// /* eslint-disable no-unused-vars */
// import { useContext, useState } from "react"
// import { AuthContext } from "../context/AuthProvider";

// const CreateTask = () => {
//     const [userData,setUserData] = useContext(AuthContext);
//     const [taskTitle, setTaskTitle] = useState('')
//     const [taskDate, setTaskDate] = useState('')
//     const [taskCategory, setTaskCategory] = useState('')
//     const [taskDesc, setTaskDesc] = useState('')
//     const [assignTo, setAssignTo] = useState('')
//     const [newTask, setNewTask] = useState('')


//     const handleSubmit = (e) => {
//         e.preventDefault();

//         setNewTask({taskTitle,taskCategory,taskDate,taskDesc,assignTo,active:false,newTask:true,
//             completed:false,failed:false})

//         const data = userData;
//         console.log("1111111",data)
        
        
//         data.employees.forEach((employee)=>{
//             if(assignTo == employee.firstName){
//                 employee.tasks.push(newTask)
//                 employee.taskCounts.newTask += 1
//                 // console.log("done")
//                 // console.log("doneww", newTask)
//                 // console.log("111",employee.tasks)
//             }
//         })
        
//         setUserData(data)
//         console.log("2222",data)
        
//         setAssignTo('')
//         setTaskCategory('')
//         setTaskDate('')
//         setTaskDesc('')
//         setTaskTitle('')
//     }



//     return (

//         <form onSubmit={(e) => {
//             handleSubmit(e)
//         }} className=" bg-[#1C1C1C] rounded-xl flex gap-20">
//             <div className="w-1/2 flex flex-col gap-1 px-5 py-3">
//                 <div className="flex flex-col gap-[2px]">
//                     <p className="text-base text-zinc-300">Task Title</p>
//                     <input value={taskTitle} onChange={(e) => {
//                         setTaskTitle(e.target.value)
//                     }} className="border-[1.5px] border-zinc-300 bg-transparent text-sm outline-0 py-1 px-2 rounded-md" type="text" placeholder="Make a UI design" />
//                 </div>
//                 <div className="flex flex-col gap-[2px]">
//                     <p className="text-base text-zinc-300">Date</p>
//                     <input value={taskDate} onChange={(e) => {
//                         setTaskDate(e.target.value)
//                     }} className="border-[1.5px] border-zinc-300 bg-transparent text-sm outline-0 py-1 px-2 rounded-md" type="Date" placeholder="Make a UI design" />
//                 </div>
//                 <div className="flex flex-col gap-[2px]">
//                     <p className="text-base text-zinc-300">Assign To</p>
//                     <input value={assignTo} onChange={(e) => {
//                         setAssignTo(e.target.value)
//                     }} className="border-[1.5px] border-zinc-300 bg-transparent text-sm outline-0 py-1 px-2 rounded-md" type="text" placeholder="Employee name" />
//                 </div>
//                 <div className="flex flex-col gap-[2px]">
//                     <p className="text-base text-zinc-300">Category</p>
//                     <input value={taskCategory} onChange={(e) => {
//                         setTaskCategory(e.target.value)
//                     }} className="border-[1.5px] border-zinc-300 bg-transparent text-sm outline-0 py-1 px-2 rounded-md" type="text" placeholder="design, dev, etc." />
//                 </div>

//             </div>
//             <div className="w-1/2 px-5 py-3 flex flex-col justify-between">
//                 <div className="w-full clear-start flex flex-col gap-[2px]">
//                     <p className="text-base">Descripion</p>
//                     <textarea value={taskDesc} onChange={(e) => {
//                         setTaskDesc(e.target.value)
//                     }} className="w-full px-4 outline-0 py-3 bg-transparent border-2 border-green-400 rounded-xl " name="text" id="" rows={5}></textarea>
//                 </div>
//                 <button className="bg-green-400 w-full px-3 py-2 rounded-md">Create Task</button>
//             </div>
//         </form>
//     )
// }

// export default CreateTask



import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskCategory, setTaskCategory] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const [assignTo, setAssignTo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      taskTitle,
      taskCategory,
      taskDate,
      taskDesc,
      active: false,
      newTask: true,
      completed: false,
      failed: false,
    };

    // Create a copy of userData for immutability
    const updatedUserData = { ...userData };

    let taskAdded = false;

    updatedUserData.employees.forEach((employee) => {
      if (assignTo.trim().toLowerCase() === employee.firstName.toLowerCase()) {
        employee.tasks.push(newTask);
        employee.taskCounts.newTask += 1;
        taskAdded = true;
      }
    });

    if (!taskAdded) {
      alert("Employee not found. Please check the name.");
      return;
    }

    setUserData(updatedUserData);
    localStorage.setItem("employees", JSON.stringify(updatedUserData)); // Save to local storage

    // Reset form fields
    setTaskTitle("");
    setTaskDate("");
    setTaskCategory("");
    setTaskDesc("");
    setAssignTo("");

    alert("Task created successfully!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#1C1C1C] rounded-xl flex gap-20"
    >
      <div className="w-1/2 flex flex-col gap-1 px-5 py-3">
        <div className="flex flex-col gap-[2px]">
          <p className="text-base text-zinc-300">Task Title</p>
          <input
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            className="border-[1.5px] border-zinc-300 bg-transparent text-sm outline-0 py-1 px-2 rounded-md"
            type="text"
            placeholder="Make a UI design"
          />
        </div>
        <div className="flex flex-col gap-[2px]">
          <p className="text-base text-zinc-300">Date</p>
          <input
            value={taskDate}
            onChange={(e) => setTaskDate(e.target.value)}
            className="border-[1.5px] border-zinc-300 bg-transparent text-sm outline-0 py-1 px-2 rounded-md"
            type="date"
          />
        </div>
        <div className="flex flex-col gap-[2px]">
          <p className="text-base text-zinc-300">Assign To</p>
          <input
            value={assignTo}
            onChange={(e) => setAssignTo(e.target.value)}
            className="border-[1.5px] border-zinc-300 bg-transparent text-sm outline-0 py-1 px-2 rounded-md"
            type="text"
            placeholder="Employee name"
          />
        </div>
        <div className="flex flex-col gap-[2px]">
          <p className="text-base text-zinc-300">Category</p>
          <input
            value={taskCategory}
            onChange={(e) => setTaskCategory(e.target.value)}
            className="border-[1.5px] border-zinc-300 bg-transparent text-sm outline-0 py-1 px-2 rounded-md"
            type="text"
            placeholder="design, dev, etc."
          />
        </div>
      </div>
      <div className="w-1/2 px-5 py-3 flex flex-col justify-between">
        <div className="flex flex-col gap-[2px]">
          <p className="text-base">Description</p>
          <textarea
            value={taskDesc}
            onChange={(e) => setTaskDesc(e.target.value)}
            className="w-full px-4 outline-0 py-3 bg-transparent border-2 border-green-400 rounded-xl"
            rows={5}
          ></textarea>
        </div>
        <button className="bg-green-400 w-full px-3 py-2 rounded-md">
          Create Task
        </button>
      </div>
    </form>
  );
};

export default CreateTask;
