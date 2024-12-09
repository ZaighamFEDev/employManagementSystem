// /* eslint-disable react/prop-types */

// import { createContext, useEffect, useState } from "react"
// import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";

// export const AuthContext = createContext();


// const AuthProvider = ({children}) => {

//     const [userData, setUserData] = useState(null);

//     useEffect(() => {
//         setLocalStorage()
//       const {employees, admin} = getLocalStorage();
//       setUserData({employees, admin})
//     }, [])
    
//     console.log("",userData)

//   return (
//         <AuthContext.Provider value={[userData,setUserData]}>
//         {children}
//         </AuthContext.Provider>
//   )
// }

// export default AuthProvider


/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(() => {
    // Initialize state from local storage or set default data
    const localData = getLocalStorage();
    if (localData) {
      return localData;
    } else {
      const defaultData = { employees: [], admin: {} }; // Replace with your default structure
      setLocalStorage(defaultData);
      return defaultData;
    }
  });

  useEffect(() => {
    // Save updated userData to local storage whenever it changes
    if (userData) {
      setLocalStorage(userData);
    }
  }, [userData]);

  console.log("Current User Data:", userData);

  return (
    <AuthContext.Provider value={[userData, setUserData]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
