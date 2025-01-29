import axios from "axios"
import { toast } from "react-hot-toast";
import { useContext } from "react";
import { UserContext } from "../context/User";
import { TelegramContext } from "../context/Telegram";

export const handleTapReward = async () => {
    const {setUserData} = useContext(UserContext)
    const {telegram}= useContext(TelegramContext)
  

    try {
      const response = await fetch('https://af5e-102-91-103-230.ngrok-free.app/api/user/tap', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) throw new Error('Tap failed');

      const data = await response.json();
      
      // Update user data with new values
      setUserData(prev => ({
        ...prev,
        ...data.user
      }));

      // Show reward toast
      toast.success(`+${data.rewards.coins} coins!`);

      if (telegram?.hapticFeedback) {
        telegram.hapticFeedback.notificationOccurred('success');
      }
    } catch (error) {
      console.error('Error processing tap:', error);
      toast.error('Failed to process tap');
      if (telegram?.hapticFeedback) {
        telegram.hapticFeedback.notificationOccurred('error');
      }
    }
  };
