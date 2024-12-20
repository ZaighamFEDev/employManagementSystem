import { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { AuthContext } from "./context/AuthProvider";

function App() {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [userData, setUserData] = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedIn");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email === "admin@me.com" && password === "123") {
      setUser("admin");
      localStorage.setItem("loggedIn", JSON.stringify({ role: "admin" }));
    } else if (userData) {
      const employee = userData.employees.find(
        (e) => email === e.email && password === e.password
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedIn",
          JSON.stringify({ role: "employee", data: employee })
        );
      }
    } else {
      alert("Invalid credentials");
    }
  };

  const updateTaskState = (taskTitle, newState) => {
    setLoggedInUserData((prevData) => {
      const updatedTasks = prevData.tasks.map((task) =>
        task.taskTitle === taskTitle ? { ...task, ...newState } : task
      );
  
      const taskCounts = {
        active: updatedTasks.filter((task) => task.active).length,
        newTask: updatedTasks.filter((task) => task.newTask).length,
        completed: updatedTasks.filter((task) => task.completed).length,
        failed: updatedTasks.filter((task) => task.failed).length,
      };
  
      // Update local storage
      const employeeData = JSON.parse(localStorage.getItem("employee"));
      if (employeeData) {
        employeeData.tasks = updatedTasks;
        employeeData.taskCounts = taskCounts;
        localStorage.setItem("employee", JSON.stringify(employeeData));
      }
  
      // Update context (userData) to reflect changes globally
      setUserData((prevContextData) => {
        if (prevContextData) {
          const updatedEmployees = prevContextData.employees.map((employee) =>
            employee.id === prevData.id
              ? { ...employee, tasks: updatedTasks, taskCounts }
              : employee
          );
  
          return { ...prevContextData, employees: updatedEmployees };
        }
        return prevContextData;
      });
  
      return { ...prevData, tasks: updatedTasks, taskCounts };
    });
  };
  
  
console.log("loggedInUserData",loggedInUserData)
  return (
    <div className="bg-black min-h-[100vh] text-white">
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === "admin" ? (
        <AdminDashboard data={loggedInUserData} changeUser={setUser} />
      ) : user === "employee" ? (
        <EmployeeDashboard
          changeUser={setUser}
          data={loggedInUserData}
          updateTaskState={updateTaskState}
        />
      ) : null}
    </div>
  );
}

export default App;
