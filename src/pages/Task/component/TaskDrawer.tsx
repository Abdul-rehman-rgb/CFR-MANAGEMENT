import { useState } from "react";
import { X, Link, Paperclip, GitBranch } from "lucide-react";
import user from "../../../../public/images/user/user-38.png";
import mgsIcon from "../../../../public/images/task/msg.png";
import Checked from "../../../../public/images/task/checked.png";

const comments = [
  {
    id: 1,
    user: "Shariq Sr. Designer",
    message: "create this task",
    time: "40 min ago",
    avatar: user,
  },
  {
    id: 2,
    user: "Shariq Sr. Designer",
    message: "I am working on logo branding research",
    time: "40 min ago",
    avatar: user,
  },
  {
    id: 3,
    user: "Shariq Sr. Designer",
    message: "I am working on logo branding",
    time: "40 min ago",
    avatar: user,
  },
];

interface TaskDrawerProps {
  onClose?: () => void;
}

export default function TaskDrawer({ onClose }: TaskDrawerProps) {
  const [activeTab, setActiveTab] = useState("comments");

  return (
    <div className="fixed right-0 top-0 w-full md:w-[560px] h-screen bg-white dark:bg-[#0D0D0D] shadow-lg flex flex-col p-4 border-l border-gray-200 dark:border-gray-700 z-[100000]">
      <div className="flex items-center justify-between mb-4">
        <button className="flex items-center gap-2 px-3 py-1 border rounded-lg text-[14px] font-medium text-[#333333] dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700">
          <img src={Checked} alt="check icon" /> Mark Complete
        </button>
        <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
          <Link size={18} className="cursor-pointer" />
          <Paperclip size={18} className="cursor-pointer" />
          <GitBranch size={18} className="cursor-pointer" />
          <X size={18} className="cursor-pointer" onClick={onClose} />
        </div>
      </div>

      {/* 👇 Add this line here */}
      <hr className="border-t border-[#CCCCCC] dark:border-gray-600 mb-4" />

      <h2 className="text-[20px] font-medium text-[#131330] dark:text-white mb-4">
        Task name will go here
      </h2>

      <div className="mb-2 flex flex-row justify-between">
        <p className="text-[12px] text-[#8C8C8C] dark:text-gray-400 font-medium">
          Assignee
        </p>
        <div className="flex items-center gap-2 mt-1">
          <img src={user} alt="user" className="w-6 h-6 rounded-full" />
          <span className="text-[14px] font-medium text-[#131330] dark:text-white">
            John Doe
          </span>
        </div>
      </div>

      <div className="mb-2 flex flex-row justify-between">
        <p className="text-[12px] text-[#8C8C8C] dark:text-gray-400 font-medium">
          Priority
        </p>
        <span className="text-[11px] font-semibold bg-[#FF695B26] text-[#FF695B] px-2 py-1 rounded">
          High
        </span>
      </div>

      <div className="mb-4">
        <p className="text-[12px] text-[#8C8C8C] dark:text-gray-400 font-medium">
          Description
        </p>
        <textarea
          className="w-full mt-1 p-2 border border-[#73779140] dark:border-gray-600 rounded-[8px] text-[14px] font-medium text-[#8C8C8C] dark:text-gray-300 bg-white dark:bg-[#1a1a1a] focus:outline-none focus:ring-1 focus:ring-[#5D5FEF]"
          placeholder="What is the task about"
          rows={3}
        ></textarea>
      </div>

      <div className="flex items-center gap-6 border-b border-gray-200 dark:border-gray-600 pb-2 mb-3">
        <button
          onClick={() => setActiveTab("comments")}
          className={`text-sm ${
            activeTab === "comments"
              ? "font-semibold text-[16px] font-medium text-[#151D48] dark:text-white border-b-2 border-[#5D5FEF]"
              : "text-[#151D48CC] dark:text-gray-400 text-[16px] font-medium"
          }`}
        >
          Comments
        </button>
        <button
          onClick={() => setActiveTab("activity")}
          className={`text-sm ${
            activeTab === "activity"
              ? "font-semibold text-[16px] font-medium text-[#151D48] dark:text-white border-b-2 border-[#5D5FEF]"
              : "text-[#151D48CC] dark:text-gray-400 text-[16px] font-medium"
          }`}
        >
          All Activity
        </button>

        <span className="ml-auto text-[12px] font-medium text-[#00000066] dark:text-gray-500 flex items-center gap-1">
          <img src={mgsIcon} alt="icon" className="w-4 h-4" />
          Oldest
        </span>
      </div>
      <div className="flex-1 overflow-y-auto space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="flex items-start justify-between">
            <div className="flex items-start gap-2">
              <img
                src={comment.avatar}
                alt="user"
                className="w-6 h-6 rounded-full"
              />
              <div>
                <p className="text-[12px] font-medium text-[#0D0D0D] dark:text-white">
                  {comment.user}
                </p>
                <p className="text-[12px] font-medium text-[#8C8C8C] dark:text-gray-400">
                  {comment.message}
                </p>
              </div>
            </div>
            <span className="text-[10px] text-[#00000080] dark:text-gray-500 font-medium">
              {comment.time}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-2">
        <img src={user} alt="user" className="w-8 h-8 rounded-full" />
        <input
          type="text"
          placeholder="Add a comment"
          className="flex-1 border border-gray-300 dark:border-gray-600 rounded-[8px] bg-[#FFFFFF] dark:bg-[#1a1a1a] px-3 py-2 text-sm text-black dark:text-white focus:outline-none focus:ring-1 focus:ring-[#5D5FEF]"
        />
      </div>
    </div>
  );
}
