import React, { useState } from "react";
import TopHeader from "../components/TopHeader";
import casinoWheel from "../assets/casino-wheel.png";
import { Gift, Ticket } from "lucide-react";
import coins2 from "../assets/coins2.png";
import "./casino.css"; // Add a CSS file for animations

export default function Casino() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [spinResult, setSpinResult] = useState(null);
  const [availableTickets, setAvailableTickets] = useState(0);

  // Simulate a spin
  const handleSpin = () => {
    if (isSpinning) return; // Prevent multiple spins
    setIsSpinning(true);

    // Simulate a delay for the spin animation
    setTimeout(() => {
      const result = Math.floor(Math.random() * 6) + 1; // Random result between 1 and 6
      setSpinResult(result);
      setIsSpinning(false);

      // Update tickets or other rewards based on the result
      setAvailableTickets((prev) => prev + result);
    }, 3000); // 3 seconds for the spin animation
  };

  return (
    <section className="relative flex flex-col items-start justify-start w-full">
      <TopHeader />
      <div className="size-[320px] rounded-full bg-[#FC9853]/25 blur-[150px] z-0 absolute -top-24 left-1/2 -translate-x-1/2"></div>
      <p className="w-full mt-10 text-3xl font-bold text-center text-white font-grotesk">
        It's Game Time
      </p>
      <section className="w-full max-w-[350px] mx-auto flex flex-col justify-start items-center gap-3 bg-[#EBE3FD] bg-opacity-[2%] p-3 border border-[#60A5FA]/20 rounded-[32px] mt-9">
        <div className={`wheel-container ${isSpinning ? "spin" : ""}`}>
          <img src={casinoWheel} alt="wheel" className="wheel" />
        </div>
        <p className="text-sm font-medium font-jakarta text-[#E4DEEF] text-center leading-tight">
          Spin the wheel to win instant rewards! Each spin has a chance to
          multiply your earnings, boost your tap power, or win special prizes.
        </p>
        <div className="flex items-center justify-between w-full mt-4">
          <p className="text-base font-medium font-jakarta text-[#cccccc]">
            Available Tickets{" "}
            <span className="text-accent font-grotesk">{availableTickets}</span>
          </p>
          <div className="flex items-center justify-center gap-2">
            <Gift className="size-5 stroke-accent" />
            <p className="text-base font-bold text-[#cccccc] font-jakarta">
              Prizes
            </p>
          </div>
        </div>
        <button
          onClick={handleSpin}
          disabled={isSpinning}
          className="w-full py-2 text-sm font-bold text-white rounded-full shadow font-jakarta bg-full bg-primary shadow-primary disabled:opacity-50"
        >
          {isSpinning ? "Spinning..." : "SPIN"}
        </button>
      </section>
      <section className="w-full max-w-[350px] grid grid-cols-3 gap-8 mt-10 mx-auto">
        <div className="w-full border border-[#EBEBEB]/30 py-1 flex flex-col justify-center items-center gap-1 rounded-lg bg-white/5">
          <div className="flex items-center justify-center gap-2">
            <Ticket className="size-6 stroke-primary" />
            <p className="text-xl font-bold text-white font-grotesk">0</p>
          </div>
          <p className="text-base font-jakarta font-medium text-[#E5E5E5] leading-none">
            Tickets
          </p>
        </div>
        <div className="w-full border border-[#EBEBEB]/30 py-1 flex flex-col justify-center items-center gap-1 rounded-lg bg-white/5">
          <div className="flex items-center justify-center gap-2">
            <Ticket className="size-6 stroke-white" />
            <p className="text-xl font-bold text-white font-grotesk">0</p>
          </div>
          <p className="text-base font-jakarta font-medium text-[#E5E5E5] leading-none">
            Tickets
          </p>
        </div>
        <div className="w-full border border-[#EBEBEB]/30 py-1 flex flex-col justify-center items-center gap-1 rounded-lg bg-white/5">
          <div className="flex items-center justify-center gap-2">
            <Ticket className="size-6 stroke-accent" />
            <p className="text-xl font-bold text-white font-grotesk">0</p>
          </div>
          <p className="text-base font-jakarta font-medium text-[#E5E5E5] leading-none">
            Tickets
          </p>
        </div>
      </section>
      <section className="w-full max-w-[350px] mx-auto border border-[#60A5FA] rounded-[16px] flex justify-between items-center px-3 py-2 bg-black/25 mt-8">
        <div className="flex items-center justify-start gap-[6px]">
          <div className="size-8 rounded-full bg-[#D9D9D9]"></div>
          <div className="flex flex-col items-center justify-start gap-2">
            <p className="text-xs leading-none font-jakarta font-bold text-[#E5E5E5]">
              Alien
            </p>
            <p className="text-[8px] leading-none font-jakarta font-bold text-[#E5E5E5]">
              Legend
            </p>
          </div>
        </div>
        <div className="flex flex-col items-end justify-start gap-2">
          <div className="flex items-center justify-center gap-1">
            <p className="text-xs font-bold text-white font-jakarta">Won +50</p>
            <img src={coins2} alt="coins" className="object-contain size-6" />
          </div>
          <p className="text-[8px] font-jakarta font-light text-white">
            2 minutes ago
          </p>
        </div>
      </section>
    </section>
  );
}