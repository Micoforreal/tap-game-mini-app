import trophy from "../assets/trophy.png";
import coins2 from "../assets/coins2.png";
import { KeyRound } from "lucide-react";
export default function DailyReward() {
  return (
    <section className="fixed z-40 w-full max-w-[640px] h-screen mx-auto bg-[#1A1A1A]/50 backdrop-blur-sm top-0 left-[50%] -translate-x-[50%] flex justify-center items-center">
      <section className="w-11/12 h-[calc(100vh-100px)] bg-[#1A1A1A] rounded-[40px] flex flex-col justify-start items-start gap-9 px-4 py-9 shadow-md shadow-[#BAAADF]/20">
        <p className="text-5xl font-bold font-grotesk text-accent">#1</p>
        <img
          src={trophy}
          alt="trophy"
          className="w-[300px] object-contain mx-auto"
        />
        <div className="flex flex-col items-center justify-center w-full gap-2 leading-none text-center font-grotesk">
          <p className="text-3xl font-bold text-white">Daily Rewards</p>
          <p className="text-lg font-jakarta text-[#DCD1F3] leading-none">
            Log into game in repetitive days to win awards
          </p>
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center justify-center gap-1">
            <img src={coins2} alt="coins" className="object-contain size-11" />
            <p className="text-xl font-bold text-white font-grotesk">500</p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <KeyRound className="stroke-accent size-10" />
            <p className="text-2xl font-bold text-white font-grotesk">2</p>
          </div>
        </div>
        <button className="px-8 py-2 mx-auto text-2xl font-bold text-white rounded-full outline-none bg-primary">
          CLAIM
        </button>
      </section>
    </section>
  );
}
