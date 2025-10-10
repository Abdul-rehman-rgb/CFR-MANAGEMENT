import React from "react";

const SearchInput = () => {
  return (
    <div className="relative w-full">
      <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.1337 13.3662L11.9606 10.1931C12.6162 9.205 13 8.02187 13 6.75C13 3.30375 10.1962 0.5 6.75 0.5C3.30375 0.5 0.5 3.30375 0.5 6.75C0.5 10.1962 3.30375 13 6.75 13C8.02187 13 9.205 12.6162 10.1931 11.9606L13.3662 15.1337C13.8537 15.6219 14.6462 15.6219 15.1337 15.1337C15.6219 14.6456 15.6219 13.8544 15.1337 13.3662ZM2.375 6.75C2.375 4.3375 4.3375 2.375 6.75 2.375C9.1625 2.375 11.125 4.3375 11.125 6.75C11.125 9.1625 9.1625 11.125 6.75 11.125C4.3375 11.125 2.375 9.1625 2.375 6.75Z"
            fill="#5D5FEF"
          />
        </svg>
      </span>
      <input
        type="text"
        placeholder="Search orders, tasks, inventory, and more..."
        className="w-full max-w-[383px] sm:max-w-[300px] md:max-w-[383px] pl-10 pr-3 py-2 bg-[#F9FAFB] dark:bg-[#161616] text-black dark:text-[#A9A9CD] rounded-[15px] border-none focus:outline-none focus:shadow-md transition-all duration-200 ease-in-out font-normal"
      />
    </div>
  );
};

export default SearchInput;
