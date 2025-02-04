
import { Copy, Gamepad2, Heart, RotateCcw, Skull, Smile } from "lucide-react";

export default function Meme() {
  return (
    <section className="flex flex-col items-center justify-start w-full px-4 pt-5 pb-10">
      <p className="text-3xl font-bold leading-none text-white font-grotesk">
        Meme Generator
      </p>
      <p className="text-[#E4DEEF] font-jakarta text-sm font-medium leading-snug max-w-[382px] w-full text-center mt-4">
        Enter a prompt and choose your preferred style to generate your
        mind-blowing memes
      </p>
      <section className="w-full max-w-[382px] bg-[#D9D9D9]/10 border border-[#60A5FA]/30  p-4 rounded-3xl flex flex-col justify-center items-end gap-6 mt-12">
        <p className="text-sm font-semibold font-jakarta text-[#E5E5E5]">
          Realistic meme of a cute otter zebra mouse in a field at sunset, tall
          grass, macro 35mm film
        </p>
        <div className="bg-[#FFFFFF]/40 border border-[#D9D9D9]/30 rounded-full py-1 px-2 flex justify-center items-center gap-2">
          <Copy className="size-4 stroke-[#1A1A1A]" />
          <RotateCcw className="size-4 stroke-[#1A1A1A]" />
        </div>
      </section>
      <section className="flex flex-col items-start justify-start w-full gap-6 mt-7">
        <p className="text-sm font-jakarta font-medium text-[#E4DEEF]">
          Select a style
        </p>
        <section className="flex flex-wrap items-center justify-start w-full gap-3">
          <button className="items-center justify-start gap-2 text-black stroke-black flex bg-accent border border-[#F7F7F7]/5 rounded-full py-2 px-4 outline-none">
            <Smile className="size-5" />
            <p className="text-xs font-semibold font-jakarta">Classic</p>
          </button>
          <button className="items-center justify-start gap-2 text-white flex bg-[#F7F7F7]/5 border border-white/5 rounded-full py-2 px-4 outline-none">
            <Skull className="size-5 stroke-white" />
            <p className="text-xs font-semibold font-jakarta">Dark</p>
          </button>
          <button className="items-center justify-start gap-2 text-white flex bg-[#F7F7F7]/5 border border-white/5 rounded-full py-2 px-4 outline-none">
            <Heart className="size-5 stroke-white" />
            <p className="text-xs font-semibold font-jakarta">Cute</p>
          </button>
          <button className="items-center justify-start gap-2 text-white flex bg-[#F7F7F7]/5 border border-white/5 rounded-full py-2 px-4 outline-none">
            <Smile className="size-5 stroke-white" />
            <p className="text-xs font-semibold font-jakarta">Funny</p>
          </button>
          <button className="items-center justify-start gap-2 text-white flex bg-[#F7F7F7]/5 border border-white/5 rounded-full py-2 px-4 outline-none">
            <Gamepad2 className="size-5 stroke-white" />
            <p className="text-xs font-semibold font-jakarta">Gaming</p>
          </button>
        </section>
        <section className="w-full max-w-[350px] h-[280px] border-2 border-primary mx-auto rounded-[40px] bg-gray-400"></section>
      </section>
    </section>
  );
}
















