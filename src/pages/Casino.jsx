import React, { useState, useEffect } from "react";
import TopHeader from "../components/TopHeader";
import { Gift, Ticket, DollarSign, Trophy, Star, Zap } from "lucide-react";
import coins2 from "../assets/coins2.png";
import "./style_casino.css";
import axios from "axios";
import { handleSpinReward } from "../helpers/handlers";

export default function Casino() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [spinResult, setSpinResult] = useState(null);
  const [availableTickets, setAvailableTickets] = useState(5);
  const [winnings, setWinnings] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [reelPositions, setReelPositions] = useState([0, 0, 0]);
  const [recentWinners, setRecentWinners] = useState([
    { name: "Alien", title: "Legend", amount: 50, time: "2 minutes ago" },
    { name: "CryptoKing", title: "Master", amount: 120, time: "5 minutes ago" },
    { name: "LuckyDragon", title: "Novice", amount: 30, time: "8 minutes ago" }
  ]);
  
  // Slot machine symbols
  const symbols = [
    { icon: <Star className="size-6 text-yellow-400" />, value: 1, color: "#FFD700" },
    { icon: <DollarSign className="size-6 text-green-400" />, value: 2, color: "#4CAF50" },
    { icon: <Zap className="size-6 text-blue-400" />, value: 3, color: "#2196F3" },
    { icon: <Trophy className="size-6 text-purple-400" />, value: 5, color: "#9C27B0" },
    { icon: <Gift className="size-6 text-red-400" />, value: 10, color: "#F44336" }
  ];
  
  // Handle spin
  const handleSpin = () => {
    if (isSpinning || availableTickets <= 0) return;
    
    setIsSpinning(true);
    setShowResult(false);
    setAvailableTickets(prev => prev - 1);
    
    // Generate random positions for each reel
    const newPositions = reelPositions.map(() => {
      // Number of full rotations plus random position
      const symbolCount = symbols.length;
      const rotations = 4 + Math.floor(Math.random() * 2); // 4-5 rotations
      return Math.floor(Math.random() * symbolCount) + rotations * symbolCount;
    });
    
    setReelPositions(newPositions);
    
    // Calculate results after spin animation
    setTimeout(() => {
      // Get the final symbols that landed
      const finalSymbols = newPositions.map(pos => symbols[pos % symbols.length]);
      
      // Calculate winnings based on matched symbols
      let multiplier = 0;
      let winMessage = "";
      
      // Check for three of a kind
      if (finalSymbols[0].value === finalSymbols[1].value && finalSymbols[1].value === finalSymbols[2].value) {
        multiplier = finalSymbols[0].value * 3;
        winMessage = "JACKPOT! TRIPLE MATCH!";
      } 
      // Check for two of a kind
      else if (
        finalSymbols[0].value === finalSymbols[1].value || 
        finalSymbols[1].value === finalSymbols[2].value || 
        finalSymbols[0].value === finalSymbols[2].value
      ) {
        multiplier = Math.max(finalSymbols[0].value, finalSymbols[1].value, finalSymbols[2].value);
        winMessage = "NICE! DOUBLE MATCH!";
      } 
      // No matches
      else {
        // Small consolation prize
        multiplier = Math.max(finalSymbols[0].value, finalSymbols[1].value, finalSymbols[2].value) / 5;
        winMessage = "TRY AGAIN!";
      }
      
      const winAmount = Math.floor(multiplier * 10);
      
      setSpinResult({
        symbols: finalSymbols,
        winAmount,
        message: winMessage
      });
      
      setWinnings(prev => prev + winAmount);
      setShowResult(true);
      
      // Add to recent winners if won something significant
      if (winAmount > 5) {
        const winnerNames = ["CryptoWizard", "LuckyTiger", "GoldenDragon", "FortuneFinder", "JackpotHunter"];
        const titles = ["Novice", "Master", "Legend", "Pro", "Beginner"];
        
        setRecentWinners(prev => [{
          name: winnerNames[Math.floor(Math.random() * winnerNames.length)],
          title: titles[Math.floor(Math.random() * titles.length)],
          amount: winAmount,
          time: "just now"
        }, ...prev.slice(0, 2)]);
      }
      
      setTimeout(() => {
        setIsSpinning(false);
      }, 1000);

      
    }, 3100);




  };
  useEffect(()=>{
    if (isSpinning === false && spinResult !== null) {
      
      setTimeout(() => {
        handleSpinReward(winnings)
      }, 500);
    }

  },[isSpinning])
  
  return (
    <section className="relative flex flex-col items-start justify-start w-full min-h-screen bg-gradient-to-b from-[#1A1A2E] to-[#121212]">
      <TopHeader />
      <div className="size-[320px] rounded-full bg-[#FC9853]/25 blur-[150px] z-0 absolute -top-24 left-1/2 -translate-x-1/2"></div>
      
      <p className="w-full mt-10 text-3xl font-bold text-center text-white font-grotesk">
        VIP Casino
      </p>
      
      <div className="absolute top-20 right-4 flex flex-col items-center bg-black/30 px-3 py-2 rounded-lg border border-[#60A5FA]/30">
        <p className="text-yellow-400 font-bold text-xl font-grotesk">{winnings}</p>
        <p className="text-xs text-gray-300">Coins</p>
      </div>
      
      <section className="w-full max-w-[350px] mx-auto flex flex-col justify-start items-center gap-3 bg-[#EBE3FD] bg-opacity-[4%] p-4 border border-[#60A5FA]/20 rounded-[32px] mt-9 relative overflow-hidden backdrop-blur-sm">
        {/* Glow effects */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>
        
        {/* Slot machine container */}
        <div className="relative w-full h-48 my-4 bg-gradient-to-b from-gray-900 to-gray-800 rounded-xl border-4 border-yellow-600 shadow-lg overflow-hidden">
          {/* Slot machine display */}
          <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-r from-gray-700 to-gray-800 flex items-center justify-center">
            <p className="text-sm font-bold text-yellow-400">CRYPTO SLOTS</p>
          </div>
          
          {/* Reels container */}
          <div className="flex justify-around items-center h-full pt-10 pb-2 px-4">
            {[0, 1, 2].map((reelIndex) => (
              <div key={reelIndex} className="relative w-[80px] h-[80px] bg-black rounded-lg overflow-hidden border-2 border-gray-700">
                {/* Reel strip */}
                <div
                  className="absolute top-0 left-0 w-full slot-reel"
                  style={{
                    height: `${symbols.length * 80}px`,
                    transform: `translateY(-${(reelPositions[reelIndex] * 80) % (symbols.length * 80)}px)`,
                    transition: isSpinning ? `transform ${2 + reelIndex * 0.5}s cubic-bezier(0.1, 0.7, 0.1, 1)` : 'none'
                  }}
                >
                  {/* Repeat symbols twice to create continuous loop */}
                  {[...symbols, ...symbols].map((symbol, symbolIndex) => (
                    <div
                      key={symbolIndex}
                      className="flex items-center justify-center w-full h-[80px]"
                      style={{ backgroundColor: symbol.color }}
                    >
                      {symbol.icon}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Pull lever */}
          <div className="absolute right-[-2px] top-[40%] h-24 w-8 flex flex-col items-center">
            <div className="w-3 h-12 bg-gradient-to-b from-red-600 to-red-800 rounded-t-full"></div>
            <div className="w-6 h-6 rounded-full bg-red-600 border-2 border-gray-200"></div>
          </div>
        </div>
        
        {/* Result display */}
        {showResult && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/70 z-40 animate-fadeIn">
            <div className="bg-gradient-to-r from-purple-700 to-blue-700 p-6 rounded-2xl flex flex-col items-center transform animate-popIn">
              <h3 className="text-white font-bold text-2xl mb-3">{spinResult.message}</h3>
              <div className="flex gap-2 mb-4">
                {spinResult.symbols.map((symbol, index) => (
                  <div key={index} className="p-3 rounded-lg" style={{ backgroundColor: symbol.color }}>
                    {symbol.icon}
                  </div>
                ))}
              </div>
              <p className="text-white text-4xl font-bold mb-1">{spinResult.winAmount}</p>
              <p className="text-yellow-200 text-sm">Coins Added</p>
              <button 
                onClick={() => setShowResult(false)} 
                className="mt-4 px-6 py-2 bg-white text-purple-800 rounded-full font-bold text-sm"
              >
                AWESOME!
              </button>
            </div>
          </div>
        )}
        
        <p className="text-sm font-medium font-jakarta text-[#E4DEEF] text-center leading-tight">
          Pull the lever to spin! Get matching symbols to win big. Each spin costs 1 ticket. Triple match for JACKPOT!
        </p>
        
        <div className="flex items-center justify-between w-full mt-4">
          <p className="text-base font-medium font-jakarta text-[#cccccc]">
            Tickets Available{" "}
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
          disabled={isSpinning || availableTickets <= 0}
          className="w-full py-3 text-sm font-bold text-white rounded-full shadow font-jakarta bg-gradient-to-r from-purple-600 to-blue-600 shadow-blue-900/50 disabled:opacity-50 hover:from-purple-700 hover:to-blue-700 transition-all"
        >
          {isSpinning ? "SPINNING..." : availableTickets <= 0 ? "BUY TICKETS" : "SPIN NOW"}
        </button>
      </section>
      
      <section className="w-full max-w-[350px] grid grid-cols-3 gap-4 mt-8 mx-auto">
        <div className="w-full border border-[#EBEBEB]/30 p-3 flex flex-col justify-center items-center gap-1 rounded-lg bg-gradient-to-b from-[#1E1E30] to-[#15152A]">
          <div className="flex items-center justify-center gap-2">
            <Ticket className="size-5 stroke-purple-400" />
            <p className="text-xl font-bold text-white font-grotesk">{availableTickets}</p>
          </div>
          <p className="text-xs font-jakarta font-medium text-[#E5E5E5] leading-none">
            Tickets
          </p>
        </div>
        <div className="w-full border border-[#EBEBEB]/30 p-3 flex flex-col justify-center items-center gap-1 rounded-lg bg-gradient-to-b from-[#1E1E30] to-[#15152A]">
          <div className="flex items-center justify-center gap-2">
            <DollarSign className="size-5 stroke-yellow-400" />
            <p className="text-xl font-bold text-white font-grotesk">{winnings}</p>
          </div>
          <p className="text-xs font-jakarta font-medium text-[#E5E5E5] leading-none">
            Coins
          </p>
        </div>
        <div className="w-full border border-[#EBEBEB]/30 p-3 flex flex-col justify-center items-center gap-1 rounded-lg bg-gradient-to-b from-[#1E1E30] to-[#15152A]">
          <div className="flex items-center justify-center gap-2">
            <Star className="size-5 stroke-accent" />
            <p className="text-xl font-bold text-white font-grotesk">3</p>
          </div>
          <p className="text-xs font-jakarta font-medium text-[#E5E5E5] leading-none">
            Jackpots
          </p>
        </div>
      </section>
      
      <p className="w-full text-center text-white/80 font-medium text-sm mt-6 mb-2">Recent Winners</p>
      
      <section className="w-full max-w-[350px] mx-auto flex flex-col gap-2 mb-8">
        {recentWinners.map((winner, index) => (
          <div key={index} className="w-full border border-[#60A5FA]/30 rounded-[16px] flex justify-between items-center px-3 py-2 bg-black/25">
            <div className="flex items-center justify-start gap-[6px]">
              <div className="size-8 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold text-xs">
                {winner.name.charAt(0)}
              </div>
              <div className="flex flex-col items-start justify-start">
                <p className="text-xs leading-none font-jakarta font-bold text-[#E5E5E5]">
                  {winner.name}
                </p>
                <p className="text-[8px] leading-none font-jakarta font-bold text-[#E5E5E5]/60">
                  {winner.title}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-end justify-start">
              <div className="flex items-center justify-center gap-1">
                <p className="text-xs font-bold text-yellow-400 font-jakarta">Won +{winner.amount}</p>
                <img src={coins2} alt="coins" className="object-contain size-5" />
              </div>
              <p className="text-[8px] font-jakarta font-light text-white/70">
                {winner.time}
              </p>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
}