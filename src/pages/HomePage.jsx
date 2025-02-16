import { useContext, useEffect, useState } from "react";
import { Database, KeyRound, Ticket } from "lucide-react";
import rank from "../assets/rank.svg";
import TopHeader from "../components/TopHeader";
import coins2 from "../assets/coins2.png";
import tapImg from "../assets/tapImg.png";
import { toast } from "react-hot-toast";
import { UserContext } from "../context/User";
import { TelegramContext } from "../context/Telegram";
import { fetchUserData } from "../helpers/fetchUserData";
import {Link} from 'react-router-dom'
import { handleTapReward } from "../helpers/handlers";
const TAPS_PER_LEVEL = 3000;

export default function HomePage() {
  const { userData, setUserData } = useContext(UserContext);
  const { telegram } = useContext(TelegramContext);
  const [isClicking, setIsClicking] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [tapAnimation, setTapAnimation] = useState(false);
  let clickTimeout;

  // useEffect(() => {
  //   const fetch = async () => {
  //     if (telegram?.initDataUnsafe?.user) {
  //       const res = await fetchUserData({
  //         id: telegram.initDataUnsafe.user.id,
  //         setUserData,
  //       });
  //     }
  //   };
  //   fetch();
  // }, [telegram]);

  const calculateProgress = (taps) => {
    const progress = (taps % TAPS_PER_LEVEL) / (TAPS_PER_LEVEL / 100);
    return Math.min(progress, 100);
  };

  const handleCardClick = (e) => {
    clearInterval(clickTimeout);
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    card.style.transform = `perspective(1000px) rotateX(${
      -y / 10
    }deg) rotateY(${x / 10}deg)`;

    const ripple = document.createElement("div");
    ripple.className = `
      absolute 
      inset-0 
      animate-ping 
      rounded-full 
      border-4 
      border-blue-400/30 
      z-0
    `;

    card.appendChild(ripple);

    // Update user data with new tap
    setUserData((prev) => {
      const newTaps = prev.rank + 1;
      const currentLevel = Math.floor(prev.rank / TAPS_PER_LEVEL);
      const newLevel = Math.floor(newTaps / TAPS_PER_LEVEL);

      // Check for level up
      if (newLevel > currentLevel) {
        toast.success(`Level Up! You reached level ${newLevel + 1}!`, {
          duration: 2000,
          icon: "🎉",
        });
        setTapAnimation(true);
        setTimeout(() => setTapAnimation(false), 1000);
      }

      return {
        ...prev,
        coins: prev.coins + 1,
        rank: newTaps,
        experience: calculateProgress(newTaps),
      };
    });

    setClickCount((prev) => prev + 1);

    setTimeout(() => {
      card.style.transform = "";
      ripple.remove();
      setIsClicking(false);
    }, 100);
  };

  useEffect(() => {
    if (isClicking === false && clickCount > 0) {
      clickTimeout = setTimeout(() => {
        handleTapReward({coin:userData.coins,tapCount:clickCount})
       
        setClickCount(0);
      }, 1000);
    }
  }, [isClicking]);

  const currentLevel = Math.floor(userData.rank / TAPS_PER_LEVEL);
  const progress = calculateProgress(userData.rank);
  const remainingTaps = TAPS_PER_LEVEL - (userData.rank % TAPS_PER_LEVEL);

  return (
    <section className="relative flex flex-col items-start justify-start w-full gap-9">
      <TopHeader />

      <section className="w-[95%] max-w-[334px] mx-auto grid grid-cols-3 gap-4">
        <div className="w-full border border-[#EBEBEB]/30 rounded-lg py-2 flex flex-col justify-center items-center gap-1 bg-white/5 cursor-pointer">
          <div className="flex items-center justify-center gap-2 cursor-pointer">
            <Ticket className="stroke-accent" />
            <p className="text-xl font-bold text-white font-grotesk">
              {userData.tickets}
            </p>
          </div>
          <p className="text-base font-medium text-white font-jakarta">
            Tickets
          </p>
        </div>
        <div className="w-full border border-[#EBEBEB]/30 rounded-lg py-2 flex flex-col justify-center items-center gap-1 bg-white/5 cursor-pointer">
          <div className="flex items-center justify-center gap-2">
            <KeyRound className="stroke-accent" />
            <p className="text-xl font-bold text-white font-grotesk">
              {userData.keys}
            </p>
          </div>
          <p className="text-base font-medium text-white font-jakarta">Keys</p>
        </div>
        <div className="w-full border border-[#EBEBEB]/30 rounded-lg py-2 flex flex-col justify-center items-center gap-1 bg-white/5 cursor-pointer">
          <div className="flex items-center justify-center gap-2">
            <img src={rank} alt="rank" className="size-6" />
            <p className="text-xl font-bold text-white font-grotesk">
              {currentLevel + 1}
            </p>
          </div>
          <p className="text-base font-medium text-white font-jakarta">Level</p>
        </div>
      </section>

      <section className="relative flex flex-col items-center justify-start w-11/12 gap-2 m-auto">
        <div className="flex items-center justify-center gap-0">
          <p className="text-2xl font-bold text-white font-grotesk">
            {userData.coins}
          </p>
          <img src={coins2} alt="coins" className="object-contain size-12" />
        </div>

        <div className="size-[320px] bg-[#F97316]/15 rounded-full blur-[120px] absolute bottom-4" />

        <div
          className={`
            relative 
            border-8 
            border-[#60A5FA]/50 
            rounded-full 
            transition-all duration-200
            active:scale-95
            cursor-pointer
            scale-100
            ${tapAnimation ? "animate-bounce" : ""}
          `}
          onClick={(e) => {
            handleCardClick(e);
            setIsClicking(true);
          }}
        >
          <div
            className={`
            absolute 
            inset-0 
            bg-blue-400/20 
            rounded-full 
            transition-all duration-200
            ${isClicking ? "opacity-50 scale-95" : "opacity-0 scale-100"}
          `}
          />
          <img
            src={tapImg}
            alt="tap"
            className="relative z-10 pointer-events-none"
            draggable="false"
          />
        </div>
      </section>

      <section className="flex flex-col items-start justify-start gap-1 max-w-[350px] w-11/12 mx-auto">
        <div className="flex items-center justify-between w-full">
          <p className="text-sm font-bold text-white font-grotesk">
            Level {currentLevel + 1}
          </p>
          <div className="flex items-center gap-2">
            <p className="text-sm font-bold text-white font-grotesk">
              {Math.floor(progress)}/100 XP
            </p>
            <p className="text-xs text-white/60">
              ({remainingTaps} taps to next level)
            </p>
          </div>
        </div>
        <div className="w-full bg-[#A3A0AC] h-2 rounded-full overflow-hidden">
          <div
            className="h-full transition-all duration-300 rounded-full bg-primary"
            style={{
              width: `${progress}%`,
              transition: "width 0.3s ease-in-out",
            }}
          />
        </div>
      </section>

      <section className="w-full max-w-[350px] mx-auto">
        <div className="p-2 bg-white/5 border border-[#F97316]/50 rounded-md w-fit">
      <Link to={'/leaderboard'}>
          <Database className="stroke-white" />
        
      </Link>
        </div>
      </section>
    </section>
  );
}
