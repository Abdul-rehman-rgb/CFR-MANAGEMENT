import React, { useState } from "react";
import HeadingThree from "../ui/heading/HeadingThree";
// import Star from '../assets/images/star.png';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Stock Alerts");

  const tabs = [
    "Stock Alerts",
    "Marketing Campaign",
    "Operational Suggestions",
  ];

  const activities = [
    {
      type: "Marketing Campaign",
      message:
        "Use targeted social media ads to boost your product visibility.",
    },
    {
      type: "Operational Suggestions",
      message:
        "Optimize your warehouse layout to improve order fulfillment time.",
    },
    {
      type: "Marketing Campaign",
      message: "Launch a flash sale campaign to reduce overstock items.",
    },
    {
      type: "Operational Suggestions",
      message: "Analyze your sales data to forecast upcoming stock needs.",
    },
    {
      type: "Marketing Campaign",
      message: "Introduce referral rewards to expand customer base.",
    },
  ];

  const filteredActivities =
    activeTab === "Stock Alerts"
      ? activities
      : activities.filter((a) => a.type === activeTab);

  return (
    <div className="h-[380px] mt-5 overflow-y-auto rounded-lg p-4 sm:p-6 bg-white dark:bg-[#0D0D0D]">
      {/* Header */}
      <div className="flex flex-col max-sm:flex-row justify-between sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
        <div className="flex items-center gap-2">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.58925 3.54002C7.08759 2.08169 9.10259 2.03752 9.69342 3.40752L9.74342 3.54085L10.4159 5.50752C10.57 5.95855 10.8191 6.37128 11.1463 6.71787C11.4735 7.06447 11.8712 7.33686 12.3126 7.51669L12.4934 7.58419L14.4601 8.25585C15.9184 8.75419 15.9626 10.7692 14.5934 11.36L14.4601 11.41L12.4934 12.0825C12.0422 12.2365 11.6293 12.4855 11.2826 12.8127C10.9359 13.1399 10.6633 13.5377 10.4834 13.9792L10.4159 14.1592L9.74425 16.1267C9.24592 17.585 7.23092 17.6292 6.64092 16.26L6.58925 16.1267L5.91759 14.16C5.76357 13.7088 5.51456 13.2959 5.18737 12.9492C4.86018 12.6025 4.46241 12.3299 4.02092 12.15L3.84092 12.0825L1.87425 11.4109C0.415087 10.9125 0.37092 8.89752 1.74092 8.30752L1.87425 8.25585L3.84092 7.58419C4.29195 7.43007 4.70468 7.18102 5.05127 6.85383C5.39787 6.52664 5.67026 6.12893 5.85009 5.68752L5.91759 5.50752L6.58925 3.54002ZM8.16675 4.07835L7.49509 6.04502C7.26041 6.73277 6.87864 7.36111 6.37637 7.88627C5.87409 8.41143 5.26338 8.82079 4.58675 9.08585L4.37842 9.16169L2.41175 9.83335L4.37842 10.505C5.06617 10.7397 5.69451 11.1215 6.21967 11.6237C6.74483 12.126 7.15419 12.7367 7.41925 13.4134L7.49509 13.6217L8.16675 15.5884L8.83842 13.6217C9.0731 12.9339 9.45486 12.3056 9.95714 11.7804C10.4594 11.2553 11.0701 10.8459 11.7468 10.5809L11.9551 10.5059L13.9218 9.83335L11.9551 9.16169C11.2673 8.92701 10.639 8.54524 10.1138 8.04297C9.58868 7.54069 9.17932 6.92998 8.91426 6.25335L8.83925 6.04502L8.16675 4.07835ZM14.8334 0.666687C14.9893 0.666687 15.1421 0.710419 15.2744 0.792913C15.4067 0.875408 15.5132 0.993356 15.5818 1.13335L15.6218 1.23085L15.9134 2.08585L16.7693 2.37752C16.9255 2.4306 17.0625 2.52887 17.1628 2.65987C17.2631 2.79087 17.3223 2.9487 17.3328 3.11337C17.3434 3.27804 17.3048 3.44213 17.2219 3.58484C17.1391 3.72756 17.0158 3.84247 16.8676 3.91502L16.7693 3.95502L15.9143 4.24669L15.6226 5.10252C15.5694 5.25871 15.4711 5.3956 15.34 5.49585C15.209 5.59609 15.0511 5.65518 14.8865 5.66562C14.7218 5.67606 14.5577 5.63739 14.4151 5.5545C14.2724 5.47161 14.1576 5.34824 14.0851 5.20002L14.0451 5.10252L13.7534 4.24752L12.8976 3.95585C12.7414 3.90277 12.6044 3.80451 12.5041 3.67351C12.4037 3.54251 12.3446 3.38467 12.334 3.22C12.3235 3.05533 12.3621 2.89125 12.4449 2.74853C12.5277 2.60582 12.6511 2.4909 12.7993 2.41835L12.8976 2.37835L13.7526 2.08669L14.0443 1.23085C14.1004 1.06621 14.2068 0.923278 14.3483 0.822103C14.4898 0.720928 14.6595 0.666583 14.8334 0.666687Z"
              fill="url(#paint0_linear_39_17300)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_39_17300"
                x1="9.04006"
                y1="0.666687"
                x2="9.04006"
                y2="17.2547"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#5D60EF" />
                <stop offset="1" stop-color="#09F8F4" />
              </linearGradient>
            </defs>
          </svg>

          {/* <h3 className="text-[16px] sm:text-[16px] font-medium text-[#737791]">
            AI Powered Suggestions
          </h3> */}
          <HeadingThree text="AI Powered Suggestions" />
        </div>
        <div>
          <span className="text-[14px] sm:text-[16px] cursor-pointer hover:underline text-[#EA7D00]">
            View All
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-4 flex flex-wrap gap-2 sm:gap-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 py-1.5 text-[11px] sm:text-[12px] md:text-[13px] font-medium capitalize rounded transition-all duration-200 ${
              activeTab === tab
                ? "text-[#5D5FEF] border-b-2 border-[#5D5FEF]"
                : "text-[#8E8E9C] hover:text-[#151D48]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Activities */}
      {filteredActivities.map((activity, index) => (
        <div
          key={index}
          className="mb-4 flex w-full flex-col gap-2 rounded-2xl px-4 py-3 sm:px-6 sm:py-4 bg-[#F9F9FF] dark:bg-[#151718]"
        >
          <span className="text-xs sm:text-sm font-normal text-gray-400">
            {activity.type}
          </span>
          <p className="text-[14px] sm:text-base text-[#151D48] dark:text-white">
            {activity.message}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Tabs;
