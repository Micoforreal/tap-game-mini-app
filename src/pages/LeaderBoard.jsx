import { ArrowDown, ArrowLeft } from "lucide-react";
import coins2 from "../assets/coins2.png";
import {Link} from  'react-router-dom'
import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../helpers/constants";

export default function LeaderBoard() {
  const [leaderboard, setLeaderboard]= useState();


  useEffect(()=>{
    const fetch = async () => {
      const res = await axios.get(`${BASE_URL}api/leaderboard/`);
      if(res?.data){
        setLeaderboard(res.data)
      }

    }

    fetch()
  },[])

  return (
    <section className="relative flex flex-col items-start justify-start w-full gap-12 pt-5 bg1">
      <div className="size-[300px] bg-[#FC9853]/35 blur-[250px] absolute -top-32 left-[50%] -translate-x-[50%] pointer-events-none" />
      <div className="flex items-start justify-between w-full gap-2 px-4">
        <Link to={'/home'}>
        <ArrowLeft className="stroke-white" />
        </Link>
        <div className="text-3xl font-light text-white font-adlam">
          <p>$ EX</p>
          {/* <p className="ml-10 leading-none">69</p> */}
        </div>
        <p className="text-3xl font-medium text-white font-grotesk">
          Leaderboard
        </p>
      </div>
      <section className="flex items-start justify-between w-full max-w-[370px] mx-auto gap-2 px-4 ">
        {leaderboard?.topUsers?.map((user,index)=>(

          <div className={`relative ${index ===0 && 'left-32 bottom-9' } ${index ===1 && "right-32"} flex flex-col items-center justify-start gap-1 `}>
          <div className={`relative z-20 bg-white border-4 rounded-full size-20 ${index===0 && 'border-primary size-24 '  }`}>
          {user?.profilePic?
      (

        <img src={user?.profilePic} alt="lead" className=" rounded-full" />
      ):( 
        <div className="text-white bg-[#6B46C1] rounded-full w-full h-full font-semibold  flex justify-center items-center ">
        <span>
          {user.firstName.charAt(0)}
          </span>

          <span>
            {user.lastName.charAt(0)}
          </span>
        </div>
      )}
         <span className={`absolute right-0 flex items-center justify-center text-xs font-bold ${index===0?'text-white  bg-primary ':'bg-white'} rounded-full size-6 font-grotesk -top-2`}>
              {index +1}
            </span>
          </div>
          <p className="text-lg font-bold leading-none text-white font-grotesk">
          {user?.firstName}
          </p>
          <p className="text-[#AAAAAA] font-jakarta text-xs leading-none">
            21mins
          </p>
          <div className="flex items-center justify-center gap-1">
            <p className="text-xs font-bold text-white font-jakarta"> {user?.coins}</p>
            <img src={coins2} alt="coins" className="object-contain size-6" />
          </div>
          <div className="bg-[#FF9951]/20 w-20 h-40 absolute top-6 blur-xl pointer-events-none" />
        </div>
        ))}

      </section>
      <section className="w-11/12 mx-auto max-w-[382px] flex flex-col justify-start items-start gap-3 h-[calc(100vh-400px)] overflow-y-auto pb-5">
        {leaderboard?.otherUsers?.map((user, i) => {
            return (
              <section
                key={i}
                className="w-full border border-[#60A5FA] rounded-[16px] flex justify-between items-center px-3 py-2 bg-black/25"
              >
                <div className="flex items-center justify-start gap-[6px]">
                  <p className="text-[#9F9AAC] text-base font-bold font-grotesk">
                    {i + 4}
                  </p>
                  <div className="size-8 rounded-full bg-[#D9D9D9]">

                 
                 
                  {user?.profilePic?
      (

        <img src={user.profilePic} alt="user" className=" rounded-full" />
      ):( 
        <div className="text-white bg-[#6B46C1] rounded-full w-full h-full font-semibold text-sm  flex justify-center items-center ">
        <span>
          {user?.firstName?.charAt(0)}
          </span>

          <span>
            {user?.lastName?.charAt(0)}
          </span>
        </div>
      )}
                  </div>
                  <div className="flex flex-col items-center justify-start gap-2">
                    <p className="text-xs leading-none font-jakarta font-bold text-[#E5E5E5]">
                  {user?.firstName}
                    </p>
                    <p className="text-[8px] leading-none font-jakarta font-bold text-[#E5E5E5]">
                      Legend
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-start gap-2">
                  <div className="flex items-center justify-center gap-1">
                    <p className="text-xs font-bold text-white font-jakarta">
                     {user?.coins}
                    </p>
                    <img
                      src={coins2}
                      alt="coins"
                      className="object-contain size-6"
                    />
                  </div>
                  <p className="text-[8px] font-jakarta font-light text-white">
                    30mins
                  </p>
                </div>
              </section>
            );
          })}
      </section>
      <section className="w-full bg-gradient-to-b from-[#1F1838]/50 to-[#201B2B] py-8 flex justify-center items-center fixed bottom-0 left-[50%] -translate-x-[50%] max-w-[640px] z-20">
        <section className="border-2 border-[#E4DEEF] py-2 px-[14px] rounded-full flex justify-center items-center gap-4 shadow-inner shadow-[#7F97B5]/40 bg-[#1A1A1A]">
          <div className="bg-white border rounded-full size-12 border-primary"></div>
          <div className="flex flex-col items-start justify-start gap-[9px]">
            <p className="text-base font-jakarta font-semibold text-[#E5E5E5] leading-none">
              YOU
            </p>
            <p className="text-2xl font-bold leading-none font-grotesk text-accent">
              #98
            </p>
          </div>
          <ArrowDown className="ml-3 size-5 stroke-white" />
        </section>
      </section>
    </section>
  );
}
