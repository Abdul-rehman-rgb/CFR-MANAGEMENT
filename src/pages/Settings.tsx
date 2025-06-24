import React, { useState } from "react";
import HeadingFour from "../components/ui/heading/HeadingFour";
import UnderlineButton from "../components/ui/button/UnderlineButton";
import HeadingThree from "../components/ui/heading/HeadingThree";
import HeadingTwo from "../components/ui/heading/HeadingTwo";
import Paragragh from "../components/ui/Paragrapg";
import Button from "../components/ui/button/Button";
import FeedbackTable from "./Tables/FeedbackTable";
import UserRoles from "./Tables/UserRoles";
import HeadingOne from "../components/ui/heading/HeadinhOne";
import SearchInput from "../components/form/SearchInput";
import Export from "../components/ui/button/Export";
import { FiDownload, FiFilter, FiPlus } from "react-icons/fi";
import ColorFull from "../components/ui/button/ColorFull";

const SystemPreferences: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "preferences" | "roles" | "workflow"
  >("preferences");

  // States for System Preferences tab
  const [emailNotif, setEmailNotif] = useState(true);
  const [smsNotif, setSmsNotif] = useState(true);
  const [inAppNotif, setInAppNotif] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [language, setLanguage] = useState("English");
  const [currency, setCurrency] = useState("Dollar");

  return (
    <>
      <HeadingFour text="Help Center" />

      <div className="dark:bg-[#0D0D0D] mt-4">
        {/* Tabs and Save/Cancel Buttons */}
        <div className="flex justify-between items-center mb-8 mx-auto">
          <div className="flex space-x-8">
            <UnderlineButton
              Children="System Preferences"
              className={
                activeTab === "preferences"
                  ? "border-b-2 border-[#5D5FEF] text-[#5D5FEF]"
                  : "text-[#23235F]"
              }
              onClick={() => setActiveTab("preferences")}
            />
            <UnderlineButton
              Children="User Roles & Permissions"
              className={
                activeTab === "roles"
                  ? "border-b-2 border-[#5D5FEF] text-[#5D5FEF]"
                  : "text-[#23235F]"
              }
              onClick={() => setActiveTab("roles")}
            />
            <UnderlineButton
              Children="Workflow Configuration"
              className={
                activeTab === "workflow"
                  ? "border-b-2 border-[#5D5FEF] text-[#5D5FEF]"
                  : "text-[#23235F]"
              }
              onClick={() => setActiveTab("workflow")}
            />
          </div>
          <div className="flex space-x-3">
            <Button size="md" variant="outline" className="my-2">
              Cancel
            </Button>
            <Button size="md" variant="primary" className="my-2">
              Save
            </Button>
          </div>
        </div>

        {/* === Tab Content Section === */}
        {activeTab === "preferences" && (
          <div className="space-y-6 mx-auto">
            <div className="dark:bg-[#0D0D0D] mt-4">
              <div className="space-y-6 mx-auto">
                {/* Notification Section */}
                <div className="bg-white rounded-2xl dark:bg-[#000] p-4">
                  <div className="">
                    <HeadingTwo
                      text={"Notification"}
                      className="text-[20px] font-semibold"
                    />
                    <Paragragh
                      para={"Customize How You Stay Informed and Connected"}
                      color="text-[#23235F]"
                      className="font-regular mb-2 mt-2"
                    />
                  </div>
                  <div className="flex items-center justify-between py-2 border-t border-gray-100">
                    <div>
                      <HeadingThree
                        text={"Get Notification by Email"}
                        color="text-black"
                      />
                      <Paragragh
                        para={
                          "Get every update of your bets and account via email."
                        }
                        color="text-[#23235F]"
                        className="font-regular mb-2 mt-2"
                      />
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
                      <HeadingThree
                        text={"SMS Notification"}
                        color="text-black"
                      />

                      <Paragragh
                        para={
                          "Get every update of your bets and account via email."
                        }
                        color="text-[#23235F]"
                        className="font-regular mb-2 mt-2"
                      />
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
                      <HeadingThree
                        text={"In App Notification"}
                        color="text-black"
                      />

                      <Paragragh
                        para={
                          "Get every update of your bets and account via email."
                        }
                        color="text-[#23235F]"
                        className="font-regular mb-2 mt-2"
                      />
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
                <div className="bg-white rounded-2xl p-4 dark:bg-[#000]">
                  <div>
                    <HeadingTwo
                      text={"Theme"}
                      className="text-[20px] font-semibold"
                    />
                    <Paragragh
                      para={"Customize how the system looks and feels."}
                      color="text-[#23235F]"
                      className="font-regular mb-2 mt-2"
                    />
                  </div>
                  <div className="flex items-center justify-between py-3 border-t border-gray-100">
                    <HeadingThree text={"Light Theme"} color="text-black" />

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
                    <HeadingThree text={"Dark Theme"} color="text-black" />

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
                <div className="bg-white rounded-2xl p-4 dark:bg-[#000]">
                  <div>
                    <HeadingTwo
                      text={"Language & Currency"}
                      className="text-[20px] font-semibold"
                    />
                    <Paragragh
                      para={"Set your preferred language & Currency."}
                      color="text-[#23235F]"
                      className="font-regular mb-2 mt-2"
                    />
                  </div>
                  <div className="flex items-center justify-between py-3 border-t border-gray-100">
                    <div>
                      <HeadingThree text={"Language"} color="text-black" />

                      <Paragragh
                        para={
                          "Set your preferred language to match your regional preferences."
                        }
                        color="text-[#23235F]"
                        className="font-regular mb-2 mt-2"
                      />
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
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-3 border-t border-gray-100">
                    <div>
                      <HeadingThree text={"Currency"} color="text-black" />

                      <Paragragh
                        para={
                          "Choose your default currency for accurate financial transactions."
                        }
                        color="text-[#23235F]"
                        className="font-regular mb-2 mt-2"
                      />
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
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "roles" && (
          <>
            <div className="col-span-1 md:col-span-4 space-y-6 bg-white p-4 sm:p-6 dark:bg-[#0D0D0D] rounded-xl">
              <div className="mb-3 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <HeadingOne text="User Roles & Permission" />
                  <Paragragh para="Real-time data on product and manage products." />
                  
                </div>

                <div className="flex flex-col sm:flex-row max-sm:flex-col sm:items-center gap-3">
                  <SearchInput />
                  <div className="flex gap-2 justify-start sm:justify-end">
                    <Export BtnName="Filter" icon={FiDownload} />
                    <Export BtnName="Export" icon={FiFilter} />
                    <ColorFull
                    text="Add New Order"
                    icon={FiPlus}
                    bgColor="bg-[#5D5FEF]"
                    textColor="text-white"
                  />
                  </div>
                </div>
              </div>

              <div>
                <UserRoles />
              </div>
            </div>
          </>
        )}

        {activeTab === "workflow" && (
          <div className="mx-auto bg-white dark:bg-[#000] p-6 rounded-xl">
            <HeadingTwo
              text="Workflow Configuration"
              className="text-[20px] font-semibold"
            />
            <FeedbackTable BtnText={"View Details"} />
          </div>
        )}
      </div>
    </>
  );
};

export default SystemPreferences;
