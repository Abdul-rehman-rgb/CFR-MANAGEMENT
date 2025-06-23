/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";

const SystemPreferences: React.FC = () => {
  // State for toggles and radios
  const [emailNotif, setEmailNotif] = useState(true);
  const [smsNotif, setSmsNotif] = useState(true);
  const [inAppNotif, setInAppNotif] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [language, setLanguage] = useState("English");
  const [currency, setCurrency] = useState("Dollar");

  return (
    <div className="bg-[#f8f8f8] py-10 px-4 dark:bg-[#0D0D0D]">
      {/* Tabs and Save/Cancel Buttons */}
      <div className="flex justify-between items-center mb-8 mx-auto">
        <div className="flex space-x-8">
          <button className="pb-2 font-semibold text-[#23235F] border-b-2 border-[#5D5FEF] dark:text-white">
            System Preferences
          </button>
          <button className="pb-2 font-medium text-gray-400 hover:text-[#23235F]">
            User Roles & Permissions
          </button>
          <button className="pb-2 font-medium text-gray-400 hover:text-[#23235F]">
            Workflow Configuration
          </button>
        </div>
        <div className="flex space-x-3">
          <button className="px-6 py-2 rounded-lg border border-[#5D5FEF] text-[#5D5FEF] font-semibold bg-white hover:bg-[#f4f4ff] transition">
            Cancel
          </button>
          <button className="px-6 py-2 rounded-lg bg-[#5D5FEF] text-white font-semibold shadow hover:bg-[#4749c9] transition">
            Save
          </button>
        </div>
      </div>

      <div className="space-y-6 mx-auto">
        {/* Notification Section */}
        <div className="bg-white rounded-2xl dark:bg-[#000] p-6 shadow">
          <div className="">
            <h2 className="font-semibold text-lg dark:text-white  text-[#23235F]">Notification</h2>
            <p className="text-gray-400 text-sm mb-4">
              Customize How You Stay Informed and Connected
            </p>
          </div>
          <div className="flex items-center justify-between py-2 border-t border-gray-100">
            <div>
              <div className="font-medium text-[#23235F] dark:text-white ">Get Notification by Email</div>
              <div className="text-gray-400 text-sm ">Get every update of your bets and account via email.</div>
            </div>
            <button
              className={`w-11 h-6 rounded-full flex items-center transition-colors duration-300 ${
                emailNotif ? "bg-[#5D5FEF]" : "bg-gray-300"
              }`}
              onClick={() => setEmailNotif((v) => !v)}
              type="button"
              aria-pressed={emailNotif}
            >
              <span
                className={`inline-block w-5 h-5 transform rounded-full bg-white shadow transition-transform duration-300 ${
                  emailNotif ? "translate-x-5" : "translate-x-1"
                }`}
              />
            </button>
          </div>
          <div className="flex items-center justify-between py-2 border-t border-gray-100">
            <div>
              <div className="font-medium text-[#23235F] dark:text-white ">SMS Notification</div>
              <div className="text-gray-400 text-sm">Get every update of your bets and account via SMS.</div>
            </div>
            <button
              className={`w-11 h-6 rounded-full flex items-center transition-colors duration-300 ${
                smsNotif ? "bg-[#5D5FEF]" : "bg-gray-300"
              }`}
              onClick={() => setSmsNotif((v) => !v)}
              type="button"
              aria-pressed={smsNotif}
            >
              <span
                className={`inline-block w-5 h-5 transform rounded-full bg-white shadow transition-transform duration-300 ${
                  smsNotif ? "translate-x-5" : "translate-x-1"
                }`}
              />
            </button>
          </div>
          <div className="flex items-center justify-between py-2 border-t border-gray-100">
            <div>
              <div className="font-medium text-[#23235F] dark:text-white ">In App Notification</div>
              <div className="text-gray-400 text-sm">Get every update of your bets and account in system.</div>
            </div>
            <button
              className={`w-11 h-6 rounded-full flex items-center transition-colors duration-300 ${
                inAppNotif ? "bg-[#5D5FEF]" : "bg-gray-300"
              }`}
              onClick={() => setInAppNotif((v) => !v)}
              type="button"
              aria-pressed={inAppNotif}
            >
              <span
                className={`inline-block w-5 h-5 transform rounded-full bg-white shadow transition-transform duration-300 ${
                  inAppNotif ? "translate-x-5" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Theme Section */}
        <div className="bg-white rounded-2xl p-6 shadow dark:bg-[#000]">
          <div>
            <h2 className="font-semibold text-lg text-[#23235F] dark:text-white">Theme</h2>
            <p className="text-gray-400 text-sm mb-4">
              Customize how the system looks and feels.
            </p>
          </div>
          <div className="flex items-center justify-between py-3 border-t border-gray-100">
            <span className="font-medium text-[#23235F] dark:text-white">Light Theme</span>
            <input
              type="radio"
              className="accent-[#5D5FEF] w-5 h-5"
              checked={theme === "light"}
              onChange={() => setTheme("light")}
              name="theme"
              aria-label="Light Theme"
            />
          </div>
          <div className="flex items-center justify-between py-3 border-t border-gray-100">
            <span className="font-medium text-[#23235F] dark:text-white">Dark Theme</span>
            <input
              type="radio"
              className="accent-[#5D5FEF] w-5 h-5"
              checked={theme === "dark"}
              onChange={() => setTheme("dark")}
              name="theme"
              aria-label="Dark Theme"
            />
          </div>
        </div>

        {/* Language & Currency Section */}
        <div className="bg-white rounded-2xl p-6 shadow dark:bg-[#000]">
          <div>
            <h2 className="font-semibold text-lg text-[#23235F] dark:text-white">Language & Currency</h2>
            <p className="text-gray-400 text-sm mb-4">
              Set your preferred language & Currency.
            </p>
          </div>
          <div className="flex items-center justify-between py-3 border-t border-gray-100">
            <div>
              <div className="font-medium text-[#23235F] dark:text-white">Language</div>
              <div className="text-gray-400 text-sm">Set your preferred language to match your regional preferences.</div>
            </div>
            <div className="relative">
              <button
                type="button"
                className="flex items-center border border-gray-200 px-4 py-2 rounded-lg shadow-sm bg-white hover:bg-gray-50 font-medium text-[#23235F] min-w-[110px]"
              >
                <span className="mr-2 text-xl">🇬🇧</span>
                {language}
                <svg
                  className="ml-2 w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between py-3 border-t border-gray-100">
            <div>
              <div className="font-medium text-[#23235F] dark:text-white">Currency</div>
              <div className="text-gray-400 text-sm">Choose your default currency for accurate financial transactions.</div>
            </div>
            <div className="relative">
              <button
                type="button"
                className="flex items-center border border-gray-200 px-4 py-2 rounded-lg shadow-sm bg-white hover:bg-gray-50 font-medium text-[#23235F] min-w-[110px]"
              >
                <span className="mr-2 text-xl">💲</span>
                {currency}
                <svg
                  className="ml-2 w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemPreferences;