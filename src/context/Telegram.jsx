import {   createContext, useEffect, useState } from "react";
import { fetchUserData } from "../helpers/fetchUserData";

import { UserContext } from "../context/User";


export const TelegramContext = createContext({})




export const TelegramContextProvider = ({children})=>{
    const [telegram, setTelegram] = useState(null);
    const {setUserData} = useContext(UserContext)
  


  
    useEffect(() => {
        if (window?.Telegram?.WebApp) {
          const tg = window.Telegram.WebApp;
          tg.ready();
          tg.expand();
          setTelegram(tg);
        }
      }, []);



      useEffect(() => {
        if(telegram?.initDataUnsafe?.user){
            fetchUserData(telegram.initDataUnsafe.user.id,setUserData);
        } else{
          console.log("You are currently not using telegram ")
        }
      }, [telegram]);
    
    
return(
        <TelegramContext.Provider value={{telegram}}>
            {children}
        </TelegramContext.Provider>
      )
}