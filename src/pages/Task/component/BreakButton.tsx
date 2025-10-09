import { useState } from 'react';

const BreakButton = ({ isBreakTimerActive, breakTimeRemaining, formatTime, handleStartBreak, onExtraBreak }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const breakOptions = [30, 25, 20, 15, 10, 5];

  return (
    <div className="relative inline-block w-full max-w-[200px] sm:max-w-[180px]">
      <button
        onClick={() => !isBreakTimerActive && setIsDropdownOpen(!isDropdownOpen)}
        disabled={isBreakTimerActive}
        className={`w-full text-[14px] font-medium px-4 h-9 rounded-xl transition-all duration-300 hover:-translate-y-0.5 ${
          isBreakTimerActive
            ? "bg-gray-400 cursor-not-allowed text-white"
            : "bg-[#27C840] hover:bg-white hover:text-[#27C840] text-white"
        }`}
      >
        {isBreakTimerActive ? `Break: ${formatTime(breakTimeRemaining)}` : "Break"}
      </button>

      {isDropdownOpen && !isBreakTimerActive && (
        <ul className="absolute left-0 right-0 top-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10 w-full">
          {breakOptions.map((min) => (
            <li
              key={min}
              onClick={() => {
                handleStartBreak(min * 60);
                setIsDropdownOpen(false);
              }}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm sm:text-base"
            >
              {min} Minutes
            </li>
          ))}
          <li
            onClick={() => {
              onExtraBreak();
              setIsDropdownOpen(false);
            }}
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm sm:text-base"
          >
            Extra Break
          </li>
        </ul>
      )}
    </div>
  );
};

export default BreakButton;
