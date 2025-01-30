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
import { fetchUserData } from "../helpers/fetchUserData";

export default function HomePage() {
  const [isPressed, setIsPressed] = useState(false);
  const {userData,setUserData}= useContext(UserContext)
  const {telegram}= useContext(TelegramContext)
  const [isClicking, setIsClicking] = useState();
  const pointsToAdd = 1;
  
  const[u,setU] = useState('')
  const [clickCount, setClickCount] = useState(0);
  let clickTimeout 


  // useEffect(()=>{
  //   if (telegram?.initDataUnsafe?.user?.id) {
  //     const res = fetchUserData(telegram.initDataUnsafe.user.id);
  //   setU(res)
  //   }

  // },[])


  
  useEffect(() => {
    const fetch = async () => {
      
      if(telegram?.initDataUnsafe?.user){
        const res = await fetchUserData({id:telegram.initDataUnsafe.user.id,setUserData});
 
      } 
      
    }

    fetch()
  }, [telegram]);
  
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

  const handleCardClick = (e)=>{
    clearInterval(clickTimeout)
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left  - rect.width / 2;
    const y = e.clientY - rect.top  - rect.height / 2;
    card.style.transform = `perspective(1000px) rotateX(${-y / 10}deg) rotateY(${x / 10}deg)`;
    

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
  setUserData((prevUser)=>({
    ...prevUser,
    coins:prevUser.coins + pointsToAdd
  }))

    setTimeout(() => {
      card.style.transform = '';
      ripple.remove()
      setClickCount((total)=>total+1)
      setIsClicking(false)
    }, 100);


}
  useEffect(()=>{
    if (!isClicking) {
      
      clickTimeout= setTimeout(() => {
     handleTapReward({coin:userData.coins,tapCount:clickCount})
        
      }, 3000);
    }  
  },[isClicking])
  

  // userData = userData[0]
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
            Tickets {u?"jj":"f"}
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
      <section className="relative flex flex-col m-auto items-center justify-start w-11/12 gap-2">
        <div className="flex items-center justify-center gap-2">
          <p className="text-xl font-bold text-white font-grotesk">
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
            transition-transform duration-200
            active:scale-95
            cursor-pointer
            scale-100
           
          `}
          onClick={(e)=>{handleCardClick(e)
            setIsClicking(true)
      
           


          }
            
          }
          // onTouchStart={handleTapStart}
          // onTouchEnd={handleTapEnd}
          // onMouseDown={handleTapStart}
          // onMouseUp={handleTapEnd}
          // onMouseLeave={() => setIsPressed(false)}
        >
          <div className={`
            absolute 
            inset-0 
            bg-blue-400/20 
            rounded-full 
            transition-opacity duration-200
            opacity-0
            
           
          `} />
          <img 
            src={tapImg} 
            alt="tap" 
            className="relative z-10 pointer-events-none"
            draggable="false"
          />
          
          {/* {isPressed && (
            <div className="
              absolute 
              inset-0 
              animate-ping 
              rounded-full 
              border-4 
              border-blue-400/30
              z-0
            " />
          )} */}
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