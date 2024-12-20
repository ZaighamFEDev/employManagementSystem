/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import AllTasks from "../../Others/AllTasks"
import Header from "../../Others/Header"
import CreateTask from "../../Others/CreateTask"


const AdminDashboard = ({changeUser}) => {

  return (
    <div className="px-3 md:px-10">
        <Header changeUser={changeUser} />
        <CreateTask/>
        <AllTasks />
    </div>
  )
}

export default AdminDashboard