/* eslint-disable react/prop-types */
    import { useContext, useState } from "react";
    import { AuthContext } from "../context/AuthProvider";

    const AddUser = ({setModel}) => {
    const [userData, setUserData] = useContext(AuthContext);
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
  const emailExists = userData.employees.some(
    (employee) => employee.email === email
  );

  if (emailExists) {
    alert("This email is already registered!");
    return; 
  }
        const newUser = {
        id: userData.employees.length + 1,
        firstName,
        email,
        password,
        tasks: [],
        taskCounts: {
            active: 0,
            newTask: 0,
            completed: 0,
            failed: 0,
        },
        };

        const updatedUserData = { ...userData };
       
        updatedUserData.employees.push(newUser);

        setUserData(updatedUserData);
        localStorage.setItem("employees", JSON.stringify(updatedUserData)); 
        setFirstName("");
        setEmail("");
        setPassword("");

        alert("User added successfully!");
    };

    const handleClose = () =>{
        setModel(false)
    }
    return (
        <div className="flex flex-col w-[80%] bg-black p-5 rounded-md">
        <div className=" w-full flex justify-between items-center ">
            <div>
                <p className="text-xl">Add User</p>
            </div>
            
            
                <button  onClick={handleClose} className="px-4 py-2 bg-zinc-400    00 rounded-md
                ">Close</button>
        </div>
        <form
        onSubmit={handleSubmit}
        className=" rounded-xl flex gap-20 "
        >

        <div className="w-full flex flex-col gap-1 py-3">
            <div className="flex flex-col gap-[2px]">
            <p className="text-base text-zinc-300">First Name</p>
            <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="border-[1.5px] border-zinc-300 bg-transparent text-sm outline-0 py-1 px-2 rounded-md"
                type="text"
                placeholder="Enter first name"
                required
            />
            </div>
            <div className="flex flex-col gap-[2px]">
            <p className="text-base text-zinc-300">Email</p>
            <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-[1.5px] border-zinc-300 bg-transparent text-sm outline-0 py-1 px-2 rounded-md"
                type="email"
                placeholder="Enter email"
                required
            />
            </div>
            <div className="flex flex-col gap-[2px]">
            <p className="text-base text-zinc-300">Password</p>
            <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-[1.5px] border-zinc-300 bg-transparent text-sm outline-0 py-1 px-2 rounded-md"
                type="password"
                placeholder="Enter password"
                required
            />
            </div>
            <button className="bg-green-400 w-full px-3 py-2 rounded-md mt-4">
            Add User
            </button>
        </div>
        </form>
        </div>
    );
    };

    export default AddUser;
