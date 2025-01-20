import { CircleDollarSign, Copy, UsersRound } from "lucide-react";
import coins2 from "../assets/coins2.png";

export default function Gang() {
  return (
    <section className="relative flex flex-col items-start justify-start w-full px-4 pt-5">
      <div className="flex items-start justify-start w-full gap-4">
        <div className="text-3xl font-light text-white font-adlam">
          <p>$ EX</p>
          <p className="ml-10 leading-none">69</p>
        </div>
        <p className="text-3xl font-medium text-white font-grotesk">GanG</p>
      </div>
      <section className="flex flex-col items-start justify-start w-full gap-3 mt-16 max-w-[382px] mx-auto">
        <div className="inline-flex items-center w-full gap-4">
          <CircleDollarSign className="size-8 stroke-white" />
          <p className="text-base font-bold leading-none text-white font-jakarta">
            Daily Gang Points
          </p>
        </div>
        <div className="rounded-xl w-full border border-[#E5E5E5]/30 p-3 bg-white/5 flex flex-col justify-start items-start gap-4">
          <p className="text-sm text-[#E4DEEF] font-jakarta font-normal">
            You earn 15% share of the total daily tapping coins your Gang
            Members collect everyday
          </p>
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center justify-center gap-1">
              <img src={coins2} alt="coins" className="object-contain size-6" />
              <p className="text-base font-bold text-white font-grotesk">0</p>
            </div>
            <button className="bg-primary px-5 py-2 text-sm font-jakarta font-medium text-[#E5E5E5] outline-none rounded-full shadow shadow-[#694798]">
              CLAIM
            </button>
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col justify-start items-start gap-3 mt-6 max-w-[382px] mx-auto">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center justify-start gap-2">
            <UsersRound className="size-8 stroke-white" />
            <p className="text-base font-bold text-white font-jakarta">
              Gang Members
            </p>
          </div>
          <p className="text-lg font-bold text-white font-grotesk">0</p>
        </div>
        <section className="w-full h-60"></section>
      </section>
      <section className="w-full max-w-[382px] flex flex-col justify-start items-start gap-3 mx-auto">
        <p className="text-sm font-bold text-white font-jakarta">
          Tap together, Earn together
        </p>
        <div className="rounded-xl w-full border border-[#E5E5E5]/30 p-3 bg-white/5 flex justify-start items-center gap-2">
          <p className="text-sm font-medium text-white font-jakarta">
            Invite friends using your link and you'll both receive 1000 coins
            instantly + 24 hours of 2x multiplier boost. Start sharing!
          </p>
          <Copy className="stroke-accent size-12" />
        </div>
      </section>
    </section>
  );
}
