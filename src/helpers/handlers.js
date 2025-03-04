import axios from "axios"
import { toast } from "react-hot-toast";
import { BASE_URL } from "./constants";



const token = localStorage.getItem("token");
const configs ={
  headers:{
  "Content-Type": "application/json",
  Authorization:`Bearer ${JSON.parse(token)}`
}}



export const handleTapReward = async ({coin,tapCount}) => {

    try {
    
      const {data}= await axios.post(`${BASE_URL}api/user/tap`,{coin,tapCount},configs);      

      // Show reward toast
      toast.success(`+${data.rewards.coins} coins!`);


    } catch (error) {
      console.error('Error processing tap:', error);
      // toast.error('Failed to process tap');

    }
  };


  export const handleSpinReward = async (point) => {
    try {
      
      axios.post(`${BASE_URL}api/user/spin-reward`, {points:point},configs)
   
      
    } catch (error) {
      toast.error("something went while proccessing your reward")
      
    }
  }