import { BadgeCheck, Copy, Gift, KeyRound, Ticket } from "lucide-react";
import coins2 from "../assets/coins2.png";
import rank from "../assets/rank.svg";
export default function Inventory() {
  return (
    <section className="flex flex-col items-start justify-start w-full mt-12">
      <div className="flex items-center justify-start gap-3">
        <BadgeCheck className="size-8 stroke-white" />
        <p className="text-2xl font-bold text-white font-grotesk">Assets</p>
      </div>
      <div className="flex flex-col items-center justify-start gap-2 mx-auto">
        <p className="mt-4 text-sm font-light text-white font-jakarta">
          Account Balance
        </p>
        <div className="flex items-center justify-center gap-1">
          <img src={coins2} alt="coins" className="object-contain size-12" />
          <p className="text-3xl font-bold text-white font-jakarta">+5200</p>
        </div>
      </div>
      <div className="w-full max-w-[382px] mx-auto flex flex-col justify-start items-start gap-6 mt-12">
        <div className="flex items-center justify-between w-full">
          <p className="text-xs font-jakarta text-[#E4DEEF] font-medium">
            User ID
          </p>
          <div className="inline-flex gap-2 text-base font-semibold text-white font-jakarta">
            <p>365182786</p>
            <Copy className="stroke-accent size-5" />
          </div>
        </div>
        <div className="flex items-center justify-between w-full">
          <p className="text-xs font-jakarta text-[#E4DEEF] font-medium">
            Join Date
          </p>
          <p className="inline-flex gap-2 text-base font-semibold text-white font-jakarta">
            12.01.2024
          </p>
        </div>
        <div className="flex items-center justify-between w-full">
          <p className="text-xs font-jakarta text-[#E4DEEF] font-medium">
            Total Tasks Completed
          </p>
          <p className="inline-flex gap-2 text-base font-semibold text-white font-jakarta">
            0
          </p>
        </div>
      </div>
      <section className="w-full max-w-[350px] mx-auto grid grid-cols-3 gap-5 mt-14">
        <div className="w-full border border-[#EBEBEB]/30 h-14 flex justify-center items-center gap-2 rounded-lg bg-white/5">
          <Gift className="size-6 stroke-accent" />
          <p className="text-xl font-bold text-white font-grotesk">0</p>
        </div>
        <div className="w-full border border-[#EBEBEB]/30 h-14 flex justify-center items-center gap-2 rounded-lg bg-white/5">
          <KeyRound className="size-6 stroke-accent" />
          <p className="text-xl font-bold text-white font-grotesk">2</p>
        </div>
        <div className="w-full border border-[#EBEBEB]/30 h-14 flex justify-center items-center gap-2 rounded-lg bg-white/5">
          <img src={rank} alt="rank" className="size-6" />
          <p className="text-xl font-bold text-white font-grotesk">+1k</p>
        </div>
        <div className="w-full border border-[#EBEBEB]/30 h-14 flex justify-center items-center gap-2 rounded-lg bg-white/5">
          <Ticket className="size-6 stroke-primary" />
          <p className="text-xl font-bold text-white font-grotesk">0</p>
        </div>
        <div className="w-full border border-[#EBEBEB]/30 h-14 flex justify-center items-center gap-2 rounded-lg bg-white/5">
          <Ticket className="size-6 stroke-white" />
          <p className="text-xl font-bold text-white font-grotesk">0</p>
        </div>
        <div className="w-full border border-[#EBEBEB]/30 h-14 flex justify-center items-center gap-2 rounded-lg bg-white/5">
          <Ticket className="size-6 stroke-accent" />
          <p className="text-xl font-bold text-white font-grotesk">0</p>
        </div>
      </section>
      <div className="flex items-center justify-start gap-3 mt-8">
        <BadgeCheck className="size-8 stroke-white" />
        <p className="text-2xl font-bold text-white font-grotesk">
          Profile Badges
        </p>
      </div>
      <div className="text-base font-light font-jakarta text-[#CCCCCC] w-full text-center my-6">
        No items
      </div>
      <div className="flex items-center justify-start gap-3 mt-8">
        <BadgeCheck className="size-8 stroke-white" />
        <p className="text-2xl font-bold text-white font-grotesk">
          Profile Badges
        </p>
      </div>
      <div className="text-base font-light font-jakarta text-[#CCCCCC] w-full text-center my-6">
        No items
      </div>
    </section>
  );
}
