import line from "../assets/line.png";
import profileImg from "../assets/profileImg.png";
import thunder from "../assets/thunder.png";
export default function Profile() {
  return (
    <>
      <p className="text-base font-jakarta text-[#E4DEEF] leading-6 max-w-[382px] text-center mt-10">
        Unlock new features and gain more power by reaching higher levels. Do
        this by increasing your points
      </p>
      <section className="relative flex flex-col items-center justify-start h-fit">
        <img src={profileImg} alt="img" />
        <p className="absolute bottom-0 font-medium leading-none text-8xl font-jakarta text-white/35 smallTxt whitespace-nowrap">
          Level #1
        </p>
      </section>
      <p className="text-3xl font-bold text-white font-adlam">$Ex Amat</p>
      <div className="flex items-center justify-center gap-6 mt-4">
        <p className="text-base font-medium text-white font-jakarta">
          Required Points
        </p>
        <div className="flex items-center justify-center gap-1">
          <div className="bg-[#6B46C1] rounded-full">
            <img src={line} alt="line" className="size-6" />
          </div>
          <p className="text-lg font-medium text-white font-grotesk">500</p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-6 mt-1">
        <p className="text-base font-medium text-white font-jakarta">
          Daily Energy Limit
        </p>
        <div className="flex items-center justify-center gap-1">
          <div className="bg-[#6B46C1] rounded-full">
            <img src={thunder} alt="thunder" className="size-6" />
          </div>
          <p className="text-lg font-medium text-white font-grotesk">500</p>
        </div>
      </div>
      <section className="flex flex-col items-center justify-start gap-3 mt-14 w-full max-w-[350px]">
        <div className="px-4 py-2 bg-black/25 border border-[#60A5FA]/25 rounded-2xl flex flex-col justify-center items-center gap-2">
          <p className="text-sm font-medium leading-3 text-white font-jakarta">
            Current Points
          </p>
          <div className="flex items-center justify-center gap-1">
            <div className="bg-[#6B46C1] rounded-full">
              <img src={line} alt="line" className="size-7" />
            </div>
            <p className="text-lg font-medium text-white font-grotesk">500</p>
          </div>
        </div>
        <section className="flex flex-col items-start justify-start gap-1 max-w-[350px] w-11/12 mx-auto">
          <div className="flex items-center justify-between w-full text-sm font-bold text-white font-grotesk">
            <p>$Ex 69</p>
            <p>450</p>
          </div>
          <div className="w-full bg-[#A3A0AC] h-2 rounded-full">
            <div className="w-5/12 h-full rounded-full bg-primary" />
          </div>
        </section>
      </section>
    </>
  );
}
