import { Database, KeyRound, Ticket } from "lucide-react";
import rank from "../assets/rank.svg";
import TopHeader from "../components/TopHeader";
import coins2 from "../assets/coins2.png";
import tapImg from "../assets/tapImg.png";
import DailyReward from "../components/DailyReward";

export default function HomePage() {
  return (
    <section className="relative flex flex-col items-start justify-start w-full gap-9">
      <TopHeader />
      <section className="w-[95%] max-w-[334px] mx-auto grid grid-cols-3 gap-4">
        <div className="w-full border border-[#EBEBEB]/30 rounded-lg py-1 flex flex-col justify-center items-center gap-1 bg-white/5">
          <div className="flex items-center justify-center gap-2">
            <Ticket className="stroke-accent" />
            <p className="text-xl font-bold text-white font-grotesk">0</p>
          </div>
          <p className="text-base font-medium text-white font-jakarta">
            Tickets
          </p>
        </div>
        <div className="w-full border border-[#EBEBEB]/30 rounded-lg py-1 flex flex-col justify-center items-center gap-1 bg-white/5">
          <div className="flex items-center justify-center gap-2">
            <KeyRound className="stroke-accent" />
            <p className="text-xl font-bold text-white font-grotesk">2</p>
          </div>
          <p className="text-base font-medium text-white font-jakarta">Keys</p>
        </div>
        <div className="w-full border border-[#EBEBEB]/30 rounded-lg py-1 flex flex-col justify-center items-center gap-1 bg-white/5">
          <div className="flex items-center justify-center gap-2">
            <img src={rank} alt="rank" className="size-6" />
            <p className="text-xl font-bold text-white font-grotesk">+1k</p>
          </div>
          <p className="text-base font-medium text-white font-jakarta">Rank</p>
        </div>
      </section>
      <section className="relative flex flex-col items-center justify-start w-11/12 gap-2">
        <div className="size-[320px] bg-[#F97316]/15 rounded-full blur-[120px] absolute bottom-4" />
        <div className="flex items-center justify-center gap-2">
          <img src={coins2} alt="coins" className="object-contain size-12" />
          <p className="text-xl font-bold text-white font-grotesk">500</p>
        </div>
        <div className="relative border-8 border-[#60A5FA]/50 rounded-full">
          <img src={tapImg} alt="tap" />
        </div>
      </section>
      <section className="flex flex-col items-start justify-start gap-1 max-w-[350px] w-11/12 mx-auto">
        <div className="flex items-center justify-between w-full text-sm font-bold text-white font-grotesk">
          <p>$Ex 69</p>
          <p>450</p>
        </div>
        <div className="w-full bg-[#A3A0AC] h-2 rounded-full">
          <div className="w-5/12 h-full rounded-full bg-primary" />
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
