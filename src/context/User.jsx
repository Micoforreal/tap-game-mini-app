import {   createContext, useEffect, useState } from "react";




export const UserContext = createContext({})


export const UserContextProvider = ({children})=>{
    const [userData, setUserData] = useState({
        coins: 500,
        tickets: 0,
        keys: 2,
        rank: 1000,
        experience: 69,
        multiplier: 1,
        tapPower: 1
      });
      
      




      return(
        <UserContext.Provider value={{userData,setUserData}}>
            {children}
        </UserContext.Provider>
      )
      
}