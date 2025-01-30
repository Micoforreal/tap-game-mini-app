import axios from "axios"
import { useContext } from "react";
import { UserContext } from "../context/User";

export const fetchUserData = async ({id,setUserData}) => {
    
    // const {setUserData} = useContext(UserContext)
    try {
      const postData= {
        telegramId:id
      }
  
        const {data} = await axios.post('https://af5e-102-91-103-230.ngrok-free.app/api/user/init',postData);

          setUserData(data.user); 
          localStorage.setItem('token', JSON.stringify(data.token))
          console.log('your profile is ready')
         
        
      } catch (error) {
        console.error('Could Not get User Data:', error);
      }
    
  };
  