import axios from "axios"
import { useContext } from "react";
import { UserContext } from "../context/User";
import { BASE_URL } from "./constants";
import toast from "react-hot-toast";

export const fetchUserData = async ({id,setUserData}) => {
    const token =  localStorage.getItem("token");
    
    try {
      const postData= {
        telegramId:id
      }
  
        const {data} = await axios.post(`${BASE_URL}api/user/init`,postData);

        console.log(data)
          setUserData(data.user); 
          if (!token) {
            
              localStorage.setItem('token', JSON.stringify(data.token))
          }
          console.log('your profile is ready')
         
        
      } catch (error) {
        console.error('Could Not get User Data:', error);
        toast.error('unable to connect account')
      }
    
  };
  