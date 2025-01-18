import startedImg from "../assets/started.png";
export default function GetStarted() {
  return (
    <section className="relative flex flex-col items-start justify-end w-full gap-0 px-6 py-8 overflow-x-hidden text-white min-h-dvh">
      <div className="size-[242px] rounded-full bg-[#A13B00]/15 blur-3xl shadow-inner shadow-[#271C41] absolute top-10 -right-16 pointer-events-none z-0" />
      <div className="size-[242px] rounded-full bg-[#6DCE45]/15 blur-3xl shadow-inner shadow-[#271C41] absolute top-[45%] -left-16 pointer-events-none z-0" />
      <p className="text-6xl font-normal font-adlam">$ EX</p>
      <p className="mt-5 text-6xl font-normal ml-28 font-adlam">69</p>
      <img
        src={startedImg}
        alt="vector"
        className="object-contain mx-auto size-[450px]"
      />
      <p className="text-lg font-normal text-center font-jakarta max-w-[382px] mx-auto mt-8">
        Can you break the Pills Global Record and raise your fame?
      </p>
      <button className="w-full py-3 text-base font-semibold text-white rounded-full bg-primary font-jakarta mt-9">
        Let's Get You Started
      </button>
    </section>
  );
}
