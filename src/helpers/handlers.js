import axios from "axios"
import { toast } from "react-hot-toast";
import { useContext } from "react";
import { UserContext } from "../context/User";
import { TelegramContext } from "../context/Telegram";
import { BASE_URL } from "./constants";

export const handleTapReward = async ({coin,tapCount}) => {

    try {
      const token = await localStorage.getItem("token");
      const configs ={
        headers:{
        "Content-Type": "application/json",
        Authorization:`Bearer ${JSON.parse(token)}`
    }}
      const {data}= await axios.post(`${BASE_URL}api/user/tap`,{coin,tapCount},configs);      

      // Show reward toast
      toast.success(`+${data.rewards.coins} coins!`);


    } catch (error) {
      console.error('Error processing tap:', error);
      // toast.error('Failed to process tap');

    }
  };
