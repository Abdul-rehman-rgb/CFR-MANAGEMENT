import React from "react";
import Button from "../ui/button/Button";
import HeadingOne from "./heading/HeadinhOne";
import profile from "../../icons/profile.svg";
import HeadingThree from "./heading/HeadingThree";
import Paragragh from "./Paragrapg";

const QuickActionFeedback = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="p-6">
      <HeadingOne text="Feedback Details" />

      <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mt-4">
        <div className="flex flex-row items-center gap-2">
          <img src={profile} alt="profile" className="w-12 h-12 rounded-full" />
          <div>
            <HeadingThree text="John Doe" color="text-[#151D48]" />
            <Paragragh className="text-[10px]" para="Admin" />
          </div>
        </div>

        <div className="flex flex-col gap-1 text-sm text-gray-600">
          <p>Category: Bug Report</p>
          <p>Status: Pending</p>
        </div>
      </div>

      {[1, 2, 3].map((i) => (
        <div key={i} className="flex flex-col bg-[#F2F2FE]/40 p-3 rounded-sm mt-4">
          <div className="space-y-2">
            <Paragragh className="text-[14px]" para="Issue Type" />
            <span className="text-[16px] font-medium text-black">Bug Report</span>
          </div>
        </div>
      ))}

      <div className="flex justify-end gap-2 mt-6">
        <Button variant="outline" size="md" className="w-full" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="primary" size="md" className="w-full" onClick={onClose}>
          Mark As Received
        </Button>
      </div>
    </div>
  );
};

export default QuickActionFeedback;
