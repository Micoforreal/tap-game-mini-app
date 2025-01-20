import { BadgeCheck, Globe, MailOpen, Radio } from "lucide-react";

export default function Settings() {
  return (
    <section className="relative flex flex-col items-start justify-start w-full px-4 pt-5 pb-24">
      <div className="flex items-start justify-start w-full gap-4">
        <div className="text-3xl font-light text-white font-adlam">
          <p>$ EX</p>
          <p className="ml-10 leading-none">69</p>
        </div>
        <p className="text-3xl font-medium text-white font-grotesk">Settings</p>
      </div>
      <section className="w-full max-w-[382px] mx-auto flex flex-col justify-start items-start gap-3">
        <div className="flex items-center justify-start gap-3 mt-20">
          <BadgeCheck className="size-6 stroke-white" />
          <p className="text-sm font-bold text-white font-grotesk">
            User Interface
          </p>
        </div>
        <div className="w-full px-4 py-3 bg-white/5 border border-[#60A5FA]/15 rounded-xl flex flex-col justify-start items-start gap-6">
          <div className="flex items-center justify-between w-full">
            <p className="text-base font-medium text-white font-jakarta">
              Notifications
            </p>
          </div>
          <div className="flex items-center justify-between w-full">
            <p className="text-base font-medium text-white font-jakarta">
              Sound
            </p>
          </div>
          <div className="flex items-center justify-between w-full">
            <p className="text-base font-medium text-white font-jakarta">
              Volume
            </p>
          </div>
          <div className="flex items-center justify-between w-full">
            <p className="text-base font-medium text-white font-jakarta">
              Volume
            </p>
          </div>
        </div>
      </section>
      <section className="w-full max-w-[382px] mx-auto flex flex-col justify-start items-start gap-3">
        <div className="flex items-center justify-start gap-3 mt-20">
          <BadgeCheck className="size-6 stroke-white" />
          <p className="text-sm font-bold text-white font-grotesk">
            Miscelleneous
          </p>
        </div>
        <div className="w-full px-4 py-3 bg-white/5 border border-[#60A5FA]/15 rounded-xl flex flex-col justify-start items-start gap-6">
          <div className="flex items-center justify-start w-full gap-4">
            <Globe className="size-6 stroke-white" />
            <p className="text-base font-medium text-white font-jakarta">
              Visit Website
            </p>
          </div>
          <div className="flex items-center justify-start w-full gap-4">
            <Radio className="size-6 stroke-white" />
            <p className="text-base font-medium text-white font-jakarta">
              Join Public Channel
            </p>
          </div>
          <div className="flex items-center justify-start w-full gap-4">
            <MailOpen className="size-6 stroke-white" />
            <p className="text-base font-medium text-white font-jakarta">
              Contact Support
            </p>
          </div>
        </div>
      </section>
      <section className="flex items-center justify-start gap-2 mt-52">
        <p className="text-sm font-normal text-white font-adlam">$Ex 69</p>
        <p className="text-sm font-medium text-white font-jakarta">
          © 2025 All Rights Reserved
        </p>
      </section>
      <button className="w-11/12 max-w-[640px] bg-primary text-white text-lg font-jakarta font-bold rounded-full py-3 fixed bottom-4 left-[50%] -translate-x-[50%]">
        CLOSE
      </button>
    </section>
  );
}
