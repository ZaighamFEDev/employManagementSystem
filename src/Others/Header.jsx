/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const Header = ({data, changeUser}) => {

  const logOutUser = () =>{
    localStorage.setItem("loggedIn", "");
    // window.location.reload()
    changeUser('')
  }
  return (
    <div className="w-full flex justify-between items-center py-5 ">
        <div>
            <p className="text-sm">Hello,</p>
            <h1 className="text-2xl font-semibold">{data?(data.firstName): "Admin"} </h1>
        </div>
        <div>
            <button onClick={logOutUser} className="px-4 py-2 bg-red-700 rounded-md
            ">Log Out</button>
        </div>
    </div>
  )
}

export default Header