import { useState } from "react";
import Inventory from "../components/Inventory";
import Profile from "../components/Profile";

export default function Account() {
  const [isProfile, setIsProfile] = useState(true);
  const buttonState = {
    active:
      "w-[144px] py-2 bg-white/10 border border-[#60A5FA]/30 rounded-lg text-base font-jakarta font-bold text-accent outline-none",
    passive:
      "w-[144px] py-2 text-base font-jakarta font-bold text-white outline-none",
  };

  return (
    <section className="relative flex flex-col items-center justify-start w-full px-4 pt-5 pb-24">
      <section className="max-w-[300px] w-full flex justify-start items-start gap-3">
        <button
          className={isProfile ? buttonState.active : buttonState.passive}
          onClick={() => setIsProfile(true)}
        >
          Profile
        </button>
        <button
          className={!isProfile ? buttonState.active : buttonState.passive}
          onClick={() => setIsProfile(false)}
        >
          Inventory
        </button>
      </section>
      {isProfile ? <Profile /> : <Inventory />}
      <button className="w-11/12 max-w-[600px] bg-primary text-white text-lg font-jakarta font-bold rounded-full py-3 fixed bottom-4 left-[50%] -translate-x-[50%]">
        CLOSE
      </button>
    </section>
  );
}
