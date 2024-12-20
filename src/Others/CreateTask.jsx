import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [category, setTaskCategory] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const [assignTo, setAssignTo] = useState("")

  const [currentDate, setCurrentDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      taskTitle,
      category,
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

  useEffect(() => {
    // Get today's date in YYYY-MM-DD format
    const today = new Date().toISOString().split('T')[0];
    setCurrentDate(today);  // Set the state to the current date
  }, []);
console.log("userData",userData)
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#1C1C1C] rounded-xl md:flex gap-20 pt-2 pb-3 md:pt-0 md:pb-0"
    >
      <div className="md:w-1/2 flex flex-col gap-1 px-5 md:py-3">
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
          <p className="text-base text-zinc-300">Task submission deadline: before this date</p>
          <input
            value={taskDate}
            onChange={(e) => setTaskDate(e.target.value)}
            className="border-[1.5px] border-zinc-300 bg-transparent text-sm outline-0 py-1 px-2 rounded-md"
            type="date" 
        id="date" 
        name="date" 
        min={currentDate} 
        max="2025-12-31"
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
            value={category}
            onChange={(e) => setTaskCategory(e.target.value)}
            className="border-[1.5px] border-zinc-300 bg-transparent text-sm outline-0 py-1 px-2 rounded-md"
            type="text"
            placeholder="design, dev, etc."
          />
        </div>
      </div>
      <div className="md:w-1/2 px-5 py-1 md:py-3 flex flex-col justify-between">
        <div className="flex flex-col gap-[2px]">
          <p className="text-base text-zinc-300">Description</p>
          <textarea
            value={taskDesc}
            onChange={(e) => setTaskDesc(e.target.value)}
            className="w-full px-4 outline-0 py-3 bg-transparent border-2 border-green-400 rounded-xl"
            rows={5}
          ></textarea>
        </div>
        <button className="bg-green-400 w-full mt-2 md:mt-0 px-3 py-2 rounded-md">
          Create Task
        </button>
      </div>
    </form>
  );
};

export default CreateTask;
