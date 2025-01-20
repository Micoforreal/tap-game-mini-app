import { Banknote, Calendar } from "lucide-react";
import reward from "../assets/reward.png";

export default function Rewards() {
  return (
    <section className="flex flex-col items-center justify-start w-full bg2">
      <section className="flex justify-end w-full">
        <div className="border border-[#F97316]/50 bg-white/5 p-2 rounded-lg mt-16">
          <Calendar className="size-6 stroke-white" />
        </div>
      </section>
      <section className="flex items-center justify-center w-full mt-4">
        <div className="bg-[#D9D9D9]/10 rounded-full">
          <img
            src={reward}
            alt="reward"
            className="size-[280px] object-contain"
          />
        </div>
      </section>
      <section className="flex flex-col items-center justify-start w-full mt-12">
        <p className="text-2xl font-adlam text-[#E4DEEF] font-normal">
          Rewards Vault
        </p>
        <p className="text-base font-jakarta text-[#E4DEEF] font-normal mt-3">
          On $Ex 69, every tap pays off
        </p>
        <section className="w-full bg-black/25 border border-[#60A5FA]/25 rounded-2xl flex flex-col justify-start items-center gap-3 py-2 px-3 mt-10">
          <p className="text-sm font-medium font-jakarta text-[#E5E5E5]">
            Up to $550 Weekly prizes
          </p>
          <div className="flex items-center justify-center w-full gap-2">
            <Banknote className="stroke-accent size-6" />
            <p className="text-base font-normal text-white font-adlam">
              Daily Rewards
            </p>
          </div>
        </section>
        <section className="w-full bg-black/25 border border-[#60A5FA]/25 rounded-2xl flex flex-col justify-start items-center gap-3 py-2 px-3 mt-6">
          <p className="text-sm font-medium font-jakarta text-[#E5E5E5]">
            Up to $550 Weekly prizes
          </p>
          <div className="flex items-center justify-center w-full gap-2">
            <Banknote className="stroke-accent size-6" />
            <p className="text-base font-normal text-white font-adlam">
              Milestone Rewards
            </p>
          </div>
        </section>
      </section>
    </section>
  );
}
