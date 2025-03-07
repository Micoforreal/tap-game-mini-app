import { NavLink, Outlet } from "react-router-dom";
import coins from "../assets/coins.svg";
import game from "../assets/game.svg";
import users from "../assets/users.svg";
import gift from "../assets/gift.svg";
import meme from "../assets/meme.svg";
export default function RootLayout() {
  const navProperty = {
    isActive:
      "flex flex-col items-center justify-center gap-1 px-3 py-2 font-medium border-primary shadow-sm shadow-[#C5B6E9]/20 border-2 rounded-md text-white",
    isPaasive:
      "text-white/50 border-none flex flex-col items-center justify-center gap-1 font-medium",
  };
  const homeNav = {
    isActive:
      "bg-[#2A1E4F] border border-[#E5E5E5] py-3 px-2 size-14 rounded-full flex flex-col justify-center items-center gap-0 font-grotesk text-lg font-bold text-white leading-none shadow-sm shadow-[#B5A0E7]/25",
    isPassive:
      "border-none py-3 px-2 size-14 rounded-full flex flex-col justify-center items-center gap-0 font-grotesk text-lg font-bold text-white leading-none",
  };
  return (
    <section className="relative w-full">
      <header className="bg-gradient-to-b from-[#36265A] to-[#1F1B28] w-full max-w-[640px] h-[105px] flex justify-center items-center fixed bottom-0 left-1/2 -translate-x-1/2 z-30">
        <nav className="flex items-center justify-center max-w-fit w-full gap-4 px-6 py-2 rounded-full bg-white/5 border border-[#6B46C1]/40">
          <NavLink
            to={"/earn"}
            className={({ isActive }) =>
              isActive ? navProperty.isActive : navProperty.isPaasive
            }
          >
            <img src={coins} alt="coins" className="object-contain size-5" />
            <p className="text-xs leading-none font-jakarta">Earn</p>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? navProperty.isActive : navProperty.isPaasive
            }
            to={"/casino"}
          >
            <img src={game} alt="game" className="object-contain size-5" />
            <p className="text-xs leading-none font-jakarta">Casino</p>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? homeNav.isActive : homeNav.isPassive
            }
            to={"/home"}
          >
            <p>$Ex</p>
            <p>69</p>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? navProperty.isActive : navProperty.isPaasive
            }
            to={"/gang"}
          >
            <img src={users} alt="user" className="object-contain size-5" />
            <p className="text-xs leading-none font-jakarta">Gang</p>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? navProperty.isActive : navProperty.isPaasive
            }
            to={"/meme"}
          >
            <img src={meme} alt="meme" className="object-contain size-5" />
            <p className="text-xs leading-none font-jakarta whitespace-nowrap">
              Meme Ai
            </p>
          </NavLink>
        </nav>
      </header>

      <main className="w-full min-h-screen bg-transparent pb-28">
        <Outlet />
      </main>
    </section>
  );
}
