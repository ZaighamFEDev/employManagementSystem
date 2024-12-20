/* eslint-disable no-unused-vars */

import { useState } from "react";
import AddUser from "./AddUser";

/* eslint-disable react/prop-types */
const Header = ({data, changeUser}) => {
const [model, setModel] = useState(false)
  const logOutUser = () =>{
    localStorage.setItem("loggedIn", "");
    changeUser('')
  }
  return (
    <>
    <div className="w-full flex justify-between items-center py-5 ">
        <div>
            <p className="text-sm">Hello,</p>
            <h1 className="text-xl md:text-2xl font-semibold">{data?(data.firstName): "Admin"} </h1>
        </div>
        <div className="flex flex-col-reverse md:flex-row gap-2">
          {!data?
            <button onClick={()=> setModel(prev=> !prev)} className="py-1 px-2 md:px-4 md:py-2 bg-blue-700 rounded-md
            ">Add User</button>: null
          }
            <button onClick={logOutUser} className="py-1 px-2 md:px-4 md:py-2 bg-red-700 rounded-md
            ">Log Out</button>
        </div>
    </div>
{model &&
    <div className="fixed z-[9999] h-screen justify-center backdrop-blur-sm flex items-center w-full">
      <AddUser setModel ={setModel} />
    </div>
     }
    </>
  )
}

export default Header