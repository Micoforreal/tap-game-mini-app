import {
  BadgeCheck,
  Globe,
  MailOpen,
  Radio,
  Volume2,
  Bell,
  Volume,
  VolumeX,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

// Reusable SettingItem Component
const SettingItem = ({ icon, label, value, onChange, isToggle = false }) => {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center gap-4">
        {icon}
        <p className="text-base font-medium text-white font-jakarta">{label}</p>
      </div>
      {isToggle ? (
        <button
          onClick={onChange}
          className={`w-10 h-6 flex items-center rounded-full p-1 transition-colors ${
            value ? "bg-primary" : "bg-gray-500"
          }`}
        >
          <div
            className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
              value ? "translate-x-4" : "translate-x-0"
            }`}
          />
        </button>
      ) : (
        <p className="text-base font-medium text-gray-400 font-jakarta">
          {value}
        </p>
      )}
    </div>
  );
};

// Reusable SectionHeader Component
const SectionHeader = ({ icon, title }) => (
  <div className="flex items-center justify-start gap-3 mt-10">
    {icon}
    <p className="text-sm font-bold text-white font-grotesk">{title}</p>
  </div>
);

export default function Settings() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [volume, setVolume] = useState(50);

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
  };

  return (
    <section className="relative flex flex-col items-start justify-start w-full px-4 pt-5 pb-24">
      {/* Header */}
      <div className="flex items-start justify-start w-full gap-4">
        <div className="text-3xl font-light text-white font-adlam">
          <p>$ EX</p>
          <p className="ml-10 leading-none">69</p>
        </div>
        <p className="text-3xl font-medium text-white font-grotesk">Settings</p>
      </div>

      {/* User Interface Section */}
      <section className="w-full max-w-[382px] mx-auto">
        <SectionHeader
          icon={<BadgeCheck className="size-6 stroke-white" />}
          title="User Interface"
        />
        <div className="w-full px-4 py-3 bg-white/5 border border-[#60A5FA]/15 rounded-xl flex flex-col justify-start items-start gap-6 mt-4">
          <SettingItem
            icon={<Bell className="size-6 stroke-white" />}
            label="Notifications"
            value={notificationsEnabled}
            onChange={() => setNotificationsEnabled(!notificationsEnabled)}
            isToggle
          />
          <SettingItem
            icon={<Volume2 className="size-6 stroke-white" />}
            label="Sound"
            value={soundEnabled}
            onChange={() => setSoundEnabled(!soundEnabled)}
            isToggle
          />
          <SettingItem
            icon={<Volume className="size-6 stroke-white" />}
            label="Volume"
            value={
              <input
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={handleVolumeChange}
                className="w-24 accent-primary"
              />
            }
          />
        </div>
      </section>

      {/* Miscellaneous Section */}
      <section className="w-full max-w-[382px] mx-auto">
        <SectionHeader
          icon={<BadgeCheck className="size-6 stroke-white" />}
          title="Miscellaneous"
        />
        <div className="w-full px-4 py-3 bg-white/5 border border-[#60A5FA]/15 rounded-xl flex flex-col justify-start items-start gap-6 mt-4">
          <Link to="https://example.com" target="_blank" className="w-full">
            <SettingItem
              icon={<Globe className="size-6 stroke-white" />}
              label="Visit Website"
            />
          </Link>
          <Link
            to="https://t.me/publicchannel"
            target="_blank"
            className="w-full"
          >
            <SettingItem
              icon={<Radio className="size-6 stroke-white" />}
              label="Join Public Channel"
            />
          </Link>
          <Link to="mailto:support@example.com" className="w-full">
            <SettingItem
              icon={<MailOpen className="size-6 stroke-white" />}
              label="Contact Support"
            />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <section className="flex items-center justify-start gap-2 mt-20">
        <p className="text-sm font-normal text-white font-adlam">$Ex 69</p>
        <p className="text-sm font-medium text-white font-jakarta">
          © 2025 All Rights Reserved
        </p>
      </section>

      {/* Close Button */}
      <Link
        to="/"
        className="w-11/12 max-w-[600px] fixed bottom-4 left-[50%] -translate-x-[50%]"
      >
        <button className="w-full py-3 text-lg font-bold text-white transition-colors rounded-full bg-primary font-jakarta hover:bg-primary/90">
          CLOSE
        </button>
      </Link>
    </section>
  );
}
