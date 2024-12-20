/* eslint-disable react/prop-types */

import { createContext, useEffect, useState } from "react"
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";

export const AuthContext = createContext();


const AuthProvider = ({children}) => {

    const [userData, setUserData] = useState(null);

    useEffect(() => {
        setLocalStorage()
      const {employees, admin} = getLocalStorage();
      setUserData({employees, admin})
    }, [])
    
    // console.log("",userData)

  return (
        <AuthContext.Provider value={[userData,setUserData]}>
        {children}
        </AuthContext.Provider>
  )
}

export default AuthProvider
