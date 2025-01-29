import axios from "axios"
import { useContext } from "react";
import { UserContext } from "../context/User";

export const fetchUserData = async (id) => {
    
    const {setUserData} = useContext(UserContext)
    try {
      const postData= {
        telegramId:id
      }
  
        const response = await axios.post('https://af5e-102-91-103-230.ngrok-free.app/api/user/init',postData);
        if  (response.status === 200) {
          setUserData(response.data); 
        }
      } catch (error) {
        console.error('Could Not get User Data:', error);
      }
    
  };
  