import {
  ChevronRight,
  Globe,
  Instagram,
  Twitter,
  UserRoundPlus,
  Wallet,
  Youtube,
} from "lucide-react";
import coins2 from "../assets/coins2.png";
export default function Tasks() {
  return (
    <>
      <section className="flex flex-col items-start justify-start w-full gap-2 mt-10 max-w-[382px] mx-auto">
        <div className="flex items-center justify-start gap-1">
          <Wallet className="size-6 stroke-white" />
          <p className="text-sm font-jakarta font-bold text-[#E5E5E5] leading-none">
            Wallet
          </p>
        </div>
        <div className="w-full px-3 py-2 bg-white/5 border border-[#E5E5E5]/20 rounded-xl flex justify-start items-center gap-3">
          <Wallet className="size-6 stroke-white" />
          <div className="flex flex-col items-start justify-start w-full gap-2">
            <p className="text-xs font-medium text-[#FAFAFA] font-jakarta">
              Enter your solana wallet address
            </p>
            <input
              type="text"
              name="sol"
              id="sol"
              className="max-w-[266px] w-full bg-white/5 border border-[#6B46C1]/20 px-3 py-2 text-[#E5E5E5] text-xs font-jakarta font-semibold rounded"
              placeholder="Enter wallet address"
            />
            <div className="flex items-center justify-center gap-2">
              <img src={coins2} alt="coins" className="object-contain size-6" />
              <p className="text-sm font-bold leading-none text-white font-grotesk">
                500
              </p>
            </div>
          </div>
          <input
            type="checkbox"
            name="check"
            id="check"
            className="size-5 border border-[#DACAFE]/20 rounded"
          />
        </div>
      </section>
      <section className="flex flex-col items-start justify-start w-full gap-2 mt-8">
        <div className="flex items-center justify-start gap-2">
          <UserRoundPlus className="size-6 stroke-white" />
          <p className="text-sm font-bold text-[#E5E5E5] font-jakarta">
            Follow $Ex 90 on Socials
          </p>
        </div>
        {/* socials follow */}
        <div className="flex items-center justify-between w-full px-3 py-2 bg-white/5 border border-[#E5E5E5]/20 rounded-xl">
          <div className="flex items-center justify-start gap-4">
            <Instagram className="size-8 stroke-[#DACAFE]" />
            <div className="flex flex-col items-start justify-start gap-4">
              <p className="text-sm font-medium text-white font-grotesk">
                Follow $Ex 90 on Tiktok
              </p>
              <div className="flex items-center justify-center gap-2">
                <img
                  src={coins2}
                  alt="coins"
                  className="object-contain size-5"
                />
                <p className="text-sm font-bold leading-none text-white font-grotesk">
                  500
                </p>
              </div>
            </div>
          </div>
          <ChevronRight className="size-6 stroke-[#60A5FA]" />
        </div>
        <div className="flex items-center justify-between w-full px-3 py-2 bg-white/5 border border-[#E5E5E5]/20 rounded-xl">
          <div className="flex items-center justify-start gap-4">
            <Instagram className="size-8 stroke-[#DACAFE]" />
            <div className="flex flex-col items-start justify-start gap-4">
              <p className="text-sm font-medium text-white font-grotesk">
                Join $Ex 90 Telegram community
              </p>
              <div className="flex items-center justify-center gap-2">
                <img
                  src={coins2}
                  alt="coins"
                  className="object-contain size-5"
                />
                <p className="text-sm font-bold leading-none text-white font-grotesk">
                  500
                </p>
              </div>
            </div>
          </div>
          <ChevronRight className="size-6 stroke-[#60A5FA]" />
        </div>
        <div className="flex items-center justify-between w-full px-3 py-2 bg-white/5 border border-[#E5E5E5]/20 rounded-xl">
          <div className="flex items-center justify-start gap-4">
            <Instagram className="size-8 stroke-[#DACAFE]" />
            <div className="flex flex-col items-start justify-start gap-4">
              <p className="text-sm font-medium text-white font-grotesk">
                Follow $Ex 90 on Instagram
              </p>
              <div className="flex items-center justify-center gap-2">
                <img
                  src={coins2}
                  alt="coins"
                  className="object-contain size-5"
                />
                <p className="text-sm font-bold leading-none text-white font-grotesk">
                  500
                </p>
              </div>
            </div>
          </div>
          <ChevronRight className="size-6 stroke-[#60A5FA]" />
        </div>
        <div className="flex items-center justify-between w-full px-3 py-2 bg-white/5 border border-[#E5E5E5]/20 rounded-xl">
          <div className="flex items-center justify-start gap-4">
            <Twitter className="size-8 stroke-[#DACAFE]" />
            <div className="flex flex-col items-start justify-start gap-4">
              <p className="text-sm font-medium text-white font-grotesk">
                Follow $Ex 90 on X
              </p>
              <div className="flex items-center justify-center gap-2">
                <img
                  src={coins2}
                  alt="coins"
                  className="object-contain size-5"
                />
                <p className="text-sm font-bold leading-none text-white font-grotesk">
                  500
                </p>
              </div>
            </div>
          </div>
          <ChevronRight className="size-6 stroke-[#60A5FA]" />
        </div>
        <div className="flex items-center justify-between w-full px-3 py-2 bg-white/5 border border-[#E5E5E5]/20 rounded-xl">
          <div className="flex items-center justify-start gap-4">
            <Youtube className="size-8 stroke-[#DACAFE]" />
            <div className="flex flex-col items-start justify-start gap-4">
              <p className="text-sm font-medium text-white font-grotesk">
                Subscribe to $Ex 90 on Youtube
              </p>
              <div className="flex items-center justify-center gap-2">
                <img
                  src={coins2}
                  alt="coins"
                  className="object-contain size-5"
                />
                <p className="text-sm font-bold leading-none text-white font-grotesk">
                  500
                </p>
              </div>
            </div>
          </div>
          <ChevronRight className="size-6 stroke-[#60A5FA]" />
        </div>
        <div className="flex items-center justify-between w-full px-3 py-2 bg-white/5 border border-[#E5E5E5]/20 rounded-xl">
          <div className="flex items-center justify-start gap-4">
            <Globe className="size-8 stroke-[#DACAFE]" />
            <div className="flex flex-col items-start justify-start gap-4">
              <p className="text-sm font-medium text-white font-grotesk">
                Subscribe to $Ex 90 on Youtube
              </p>
              <div className="flex items-center justify-center gap-2">
                <img
                  src={coins2}
                  alt="coins"
                  className="object-contain size-5"
                />
                <p className="text-sm font-bold leading-none text-white font-grotesk">
                  500
                </p>
              </div>
            </div>
          </div>
          <ChevronRight className="size-6 stroke-[#60A5FA]" />
        </div>
      </section>
    </>
  );
}
