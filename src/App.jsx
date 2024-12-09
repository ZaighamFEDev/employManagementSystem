/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react"
import Login from "./components/Auth/Login"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage"
import { AuthContext } from "./context/AuthProvider"

function App() {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
 const [userData,setUserData] = useContext(AuthContext);
  // console.log("AuthData", authData);

  // useEffect(() => {
  //   if(authData){
  //     const loggedInUser = localStorage.getItem("loggedIn")
  //      if(loggedInUser){
  //       setUser(loggedInUser.role)
  //      }
  //   }
  // }, [authData])
  useEffect(()=>{
    const loggedInUser = localStorage.getItem("loggedIn")
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  }, [])
  


 const handleLogin = (email,password) =>{
if(email === "admin@me.com" && password === "123" ){
  setUser("admin")
  localStorage.setItem("loggedIn", JSON.stringify({role: 'admin'}))
  
} else if(userData ){
  const employee = userData.employees.find((e)=> email == e.email && password == e.password )
  if(employee){
    setUser("employee")
    setLoggedInUserData(employee)
    localStorage.setItem("loggedIn", JSON.stringify({role: 'employee', data: employee}))
  }
  
}
else{
  alert("invalid credentials")
}
}
  
  return (
    <div className="bg-black min-h-[100vh] text-white">
      {!user ? <Login handleLogin={handleLogin} /> : ""  }
      {user === "admin" ? <AdminDashboard changeUser={setUser} /> :( user == "employee" ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null )}
      
      
    </div>
  )
}

export default App