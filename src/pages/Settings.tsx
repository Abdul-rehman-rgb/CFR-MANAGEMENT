import React, { useState } from "react";
import HeadingFour from "../components/ui/heading/HeadingFour";
import UnderlineButton from "../components/ui/button/UnderlineButton";
import HeadingThree from "../components/ui/heading/HeadingThree";
import HeadingTwo from "../components/ui/heading/HeadingTwo";
import HeadingOne from "../components/ui/heading/HeadinhOne";
import Paragragh from "../components/ui/Paragrapg";
import Button from "../components/ui/button/Button";
import SearchInput from "../components/form/SearchInput";
import Export from "../components/ui/button/Export";
import ColorFull from "../components/ui/button/ColorFull";
import FeedbackTable from "./Tables/FeedbackTable";
import UserRoles from "./Tables/UserRoles";
import { FiArrowDown, FiDownload, FiFilter, FiPlus } from "react-icons/fi";
import flagpack from '../icons/flagpack.svg'

const SystemPreferences: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"preferences" | "roles" | "workflow">("preferences");

  const [emailNotif, setEmailNotif] = useState(true);
  const [smsNotif, setSmsNotif] = useState(true);
  const [inAppNotif, setInAppNotif] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [language, setLanguage] = useState("English");
  const [currency, setCurrency] = useState("Dollar");

  return (
    <>
      <HeadingFour text="Setting" />

      <div className="dark:bg-[#0D0D0D] mt-4">
        {/* Tabs and Buttons */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          {/* Tabs */}
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
            <UnderlineButton
              Children="System Preferences"
              className={`pb-2 border-b-2 ${
                activeTab === "preferences"
                  ? "border-[#5D5FEF] text-[#5D5FEF]"
                  : "border-transparent text-[#23235F]"
              }`}
              onClick={() => setActiveTab("preferences")}
            />
            <UnderlineButton
              Children="User Roles & Permissions"
              className={`pb-2 border-b-2 ${
                activeTab === "roles"
                  ? "border-[#5D5FEF] text-[#5D5FEF]"
                  : "border-transparent text-[#23235F]"
              }`}
              onClick={() => setActiveTab("roles")}
            />
            <UnderlineButton
              Children="Workflow Configuration"
              className={`pb-2 border-b-2 ${
                activeTab === "workflow"
                  ? "border-[#5D5FEF] text-[#5D5FEF]"
                  : "border-transparent text-[#23235F]"
              }`}
              onClick={() => setActiveTab("workflow")}
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 w-full sm:w-auto">
            <Button size="md" variant="outline" className="w-full sm:w-[138px] h-[45px]">
              Cancel
            </Button>
            <Button size="md" variant="primary" className="w-full sm:w-[138px] h-[45px]">
              Save
            </Button>
          </div>
        </div>

        {/* Preferences Tab */}
        {activeTab === "preferences" && (
          <div className="space-y-6">
            {/* Notification Section */}
            <div className="bg-white rounded-2xl dark:bg-[#000] p-4">
              <HeadingTwo text="Notification" className="text-[20px] font-semibold" />
              <Paragragh para="Customize How You Stay Informed and Connected" className="text-[#23235F] mb-4" />

              {[["Get Notification by Email", emailNotif, setEmailNotif], ["SMS Notification", smsNotif, setSmsNotif], ["In App Notification", inAppNotif, setInAppNotif]].map(
                ([label, value, setter]: any, i) => (
                  <div key={i} className="flex items-center justify-between py-3 border-t border-gray-100">
                    <div>
                      <HeadingThree text={label} color="text-black" />
                      <Paragragh para="Get every update of your bets and account via email." className="text-[#23235F]" />
                    </div>
                    <button
                      className={`w-11 h-6 rounded-full flex items-center transition-colors duration-300 ${
                        value ? "bg-[#5D5FEF]" : "bg-[#8E8E9C]"
                      }`}
                      onClick={() => setter((v: boolean) => !v)}
                    >
                      <span
                        className={`inline-block w-5 h-5 transform rounded-full bg-white shadow transition-transform duration-300 ${
                          value ? "translate-x-5" : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>
                )
              )}
            </div>

            {/* Theme Section */}
            <div className="bg-white rounded-2xl p-4 dark:bg-[#000]">
              <HeadingTwo text="Theme" className="text-[20px] font-semibold" />
              <Paragragh para="Customize how the system looks and feels." className="text-[#23235F] mb-4" />
              {["light", "dark"].map((mode) => (
                <div key={mode} className="flex items-center justify-between py-3 border-t border-gray-100">
                  <HeadingThree text={`${mode[0].toUpperCase() + mode.slice(1)} Theme`} color="text-black" />
                  <input
                    type="radio"
                    className="accent-[#5D5FEF] w-5 h-5"
                    checked={theme === mode}
                    onChange={() => setTheme(mode as "light" | "dark")}
                    name="theme"
                  />
                </div>
              ))}
            </div>

            {/* Language & Currency Section */}
            <div className="bg-white rounded-2xl p-4 dark:bg-[#000]">
              <HeadingTwo text="Language & Currency" className="text-[20px] font-semibold" />
              <Paragragh para="Set your preferred language & Currency." className="text-[#23235F] mb-4" />

              <div className="flex items-center justify-between py-3 border-t border-gray-100">
                <div>
                  <HeadingThree text="Language" color="text-black" />
                  <Paragragh para="Set your preferred language to match your regional preferences." color="text-[#23235F]" />
                </div>
                <button className="flex items-center border border-gray-200 px-4 py-2 rounded-lg bg-[#5D5FEF]/8 font-regular text-[14px] text-[#151D48] min-w-[110px]">
                  <img src={flagpack} alt="flagpack" className="mr-2" />
                   {language}
                  {/* <svg className="ml-2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg> */}
                  <FiArrowDown className="ml-2 w-4 h-4 text-gray-400" />
                </button>
              </div>

              <div className="flex items-center justify-between py-3 border-t border-gray-100">
                <div>
                  <HeadingThree text="Currency" color="text-black" />
                  <Paragragh para="Choose your default currency for accurate financial transactions." color="text-[#23235F]" />
                </div>
                <button className="flex items-center border border-gray-200 px-4 py-2 rounded-lg bg-[#5D5FEF]/8 font-regular text-[14px] text-[#151D48] min-w-[110px]">
                  <span className="mr-2 text-xl">💲</span> {currency}
                  <svg className="ml-2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Roles Tab */}
        {activeTab === "roles" && (
          <div className="space-y-6 bg-white p-4 sm:p-6 dark:bg-[#0D0D0D] rounded-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <HeadingOne text="User Roles & Permission" />
                <Paragragh para="Real-time data on product and manage products." />
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <SearchInput />
                <div className="flex gap-2">
                  <Export BtnName="Filter" icon={FiDownload} />
                  <Export BtnName="Export" icon={FiFilter} />
                  <ColorFull text="Add New Order" icon={FiPlus} bgColor="bg-[#5D5FEF]" textColor="text-white" />
                </div>
              </div>
            </div>
            <UserRoles />
          </div>
        )}

        {/* Workflow Tab */}
        {activeTab === "workflow" && (
          <div className="bg-white dark:bg-[#000] p-6 rounded-xl">
            <HeadingTwo text="Workflow Configuration" className="text-[20px] font-semibold" />
            <FeedbackTable BtnText="View Details" />
          </div>
        )}
      </div>
    </>
  );
};

export default SystemPreferences;
