import { useContext, useEffect, useState } from "react";
import { Database, KeyRound, Ticket } from "lucide-react";
import rank from "../assets/rank.svg";
import TopHeader from "../components/TopHeader";
import coins2 from "../assets/coins2.png";
import tapImg from "../assets/tapImg.png";
import DailyReward from "../components/DailyReward";
import { toast } from "react-hot-toast";
import axios from "axios"
import { UserContext } from "../context/User";
import { TelegramContext } from "../context/Telegram";
import { handleTapReward } from "../helpers/handlers";

export default function HomePage() {
  const [isPressed, setIsPressed] = useState(false);
  const {userData}= useContext(UserContext)
  const {telegram}= useContext(TelegramContext)
 
  const handleTapStart = () => {
    setIsPressed(true);
    // if (telegram?.hapticFeedback) {
    //   telegram.hapticFeedback.impactOccurred('medium');
    // }
  };

  const handleTapEnd = () => {
    setIsPressed(false);
    handleTapReward();
  };


  
  return (
    <section className="relative flex flex-col items-start justify-start w-full gap-9">
      <TopHeader />
      <section className="w-[95%] max-w-[334px] mx-auto grid grid-cols-3 gap-4">
        <div className="w-full border border-[#EBEBEB]/30 rounded-lg py-1 flex flex-col justify-center items-center gap-1 bg-white/5">
          <div className="flex items-center justify-center gap-2">
            <Ticket className="stroke-accent" />
            <p className="text-xl font-bold text-white font-grotesk">
              {userData.tickets}
            </p>
          </div>
          <p className="text-base font-medium text-white font-jakarta">
            Tickets 
          </p>
        </div>
        <div className="w-full border border-[#EBEBEB]/30 rounded-lg py-1 flex flex-col justify-center items-center gap-1 bg-white/5">
          <div className="flex items-center justify-center gap-2">
            <KeyRound className="stroke-accent" />
            <p className="text-xl font-bold text-white font-grotesk">
              {userData.keys}
            </p>
          </div>
          <p className="text-base font-medium text-white font-jakarta">Keys</p>
        </div>
        <div className="w-full border border-[#EBEBEB]/30 rounded-lg py-1 flex flex-col justify-center items-center gap-1 bg-white/5">
          <div className="flex items-center justify-center gap-2">
            <img src={rank} alt="rank" className="size-6" />
            <p className="text-xl font-bold text-white font-grotesk">
              {userData.rank}
            </p>
          </div>
          <p className="text-base font-medium text-white font-jakarta">Rank</p>
        </div>
      </section>
      <section className="relative flex flex-col items-center justify-start w-11/12 gap-2">
        <div className="size-[320px] bg-[#F97316]/15 rounded-full blur-[120px] absolute bottom-4" />
        <div className="flex items-center justify-center gap-2">
          <img src={coins2} alt="coins" className="object-contain size-12" />
          <p className="text-xl font-bold text-white font-grotesk">
            {userData.coins}
          </p>
        </div>
        
        <div 
          className={`
            relative 
            border-8 
            border-[#60A5FA]/50 
            rounded-full 
            transition-transform duration-200
            active:scale-95
            cursor-pointer
            ${isPressed ? 'scale-95' : 'scale-100'}
          `}
          onTouchStart={handleTapStart}
          onTouchEnd={handleTapEnd}
          onMouseDown={handleTapStart}
          onMouseUp={handleTapEnd}
          onMouseLeave={() => setIsPressed(false)}
        >
          <div className={`
            absolute 
            inset-0 
            bg-blue-400/20 
            rounded-full 
            transition-opacity duration-200
            ${isPressed ? 'opacity-100' : 'opacity-0'}
          `} />
          <img 
            src={tapImg} 
            alt="tap" 
            className="relative z-10 pointer-events-none"
            draggable="false"
          />
          
          {isPressed && (
            <div className="
              absolute 
              inset-0 
              animate-ping 
              rounded-full 
              border-4 
              border-blue-400/30
              z-0
            " />
          )}
        </div>
      </section>

      <section className="flex flex-col items-start justify-start gap-1 max-w-[350px] w-11/12 mx-auto">
        <div className="flex items-center justify-between w-full text-sm font-bold text-white font-grotesk">
          <p>Level {Math.floor(userData.rank / 1000)}</p>
          <p>{userData.experience}/100 XP</p>
        </div>
        <div className="w-full bg-[#A3A0AC] h-2 rounded-full">
          <div 
            className="h-full rounded-full bg-primary transition-all duration-300" 
            style={{ width: `${userData.experience}%` }}
          />
        </div>
      </section>
      
      <section className="w-full max-w-[350px] mx-auto">
        <div className="p-2 bg-white/5 border border-[#F97316]/50 rounded-md w-fit">
          <Database className="stroke-white" />
        </div>
      </section>
    </section>
  );
}