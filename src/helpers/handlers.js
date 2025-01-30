import axios from "axios"
import { toast } from "react-hot-toast";
import { useContext } from "react";
import { UserContext } from "../context/User";
import { TelegramContext } from "../context/Telegram";
import { BASE_URL } from "./constants";

export const handleTapReward = async ({coin,tapCount}) => {
    // const {setUserData} = useContext(UserContext)
    // const {telegram}= useContext(TelegramContext)
  

    try {
      const token = await localStorage.getItem("token");
      // console.log(token)


      const configs ={
        headers:{
        "Content-Type": "application/json",
        Authorization:`Bearer ${JSON.parse(token)}`
    }}
      const response = await axios.post(`${BASE_URL}api/user/tap`,{coin,tapCount},configs);

      if (!response.ok) throw new Error('Tap failed');

      const {data} =  response;
      
      // Update user data with new values
    //   setUserData(prev => ({
    //     ...prev,
    //     ...data.user
    //   }));

      // Show reward toast
      toast.success(`+${data.rewards.coins} coins!`);

    //   if (telegram?.hapticFeedback) {
    //     telegram.hapticFeedback.notificationOccurred('success');
    //   }
    } catch (error) {
      console.error('Error processing tap:', error);
      toast.error('Failed to process tap');
    //   if (telegram?.hapticFeedback) {
    //     telegram.hapticFeedback.notificationOccurred('error');
    //   }
    }
  };
