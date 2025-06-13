import React from "react";

const TransitBtn = ({ text }) => {
  return (
    <button className="px-4 py-2 text-[14px] font-semibold text-[#2794DD] border border-[#2794DD]/15 bg-[#2794DD]/15 rounded hover:border hover:border-[#2794DD] hover:bg-white hover: text-[#2794DD] transition">
      {text}
    </button>
  );
};

export default TransitBtn;
