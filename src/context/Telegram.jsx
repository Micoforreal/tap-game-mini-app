import {   createContext, useEffect, useState } from "react";
import { fetchUserData } from "../helpers/fetchUserData";




export const TelegramContext = createContext({})




export const TelegramContextProvider = ({children})=>{
    const [telegram, setTelegram] = useState(null);
  


  
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
        fetchUserData();
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