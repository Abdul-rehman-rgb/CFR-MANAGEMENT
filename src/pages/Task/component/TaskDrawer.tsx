import { useState } from "react";
import { X, Link, Paperclip } from "lucide-react";
import user from "../../../../public/images/user/user-38.png";

interface TaskDrawerProps {
  onClose?: () => void;
}

export default function TaskDrawer({ onClose }: TaskDrawerProps) {
  const [activeTab, setActiveTab] = useState("comments");

  return (
    <div className="fixed right-0 top-0 w-[400px] h-screen bg-white shadow-lg flex flex-col p-4 border-l border-gray-200 z-[100000]">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <button className="flex items-center gap-2 px-3 py-1 border rounded-lg text-sm hover:bg-gray-50">
          ✓ Mark Complete
        </button>
        <div className="flex items-center gap-2 text-gray-500">
          <Link size={18} className="cursor-pointer" />
          <Paperclip size={18} className="cursor-pointer" />
          <X size={18} className="cursor-pointer" onClick={onClose} />
        </div>
      </div>

      <h2 className="text-lg font-semibold mb-4">Task name will go here</h2>

      <div className="mb-2">
        <p className="text-sm text-gray-500">Assignee</p>
        <div className="flex items-center gap-2 mt-1">
          <img src={user} alt="user" className="w-6 h-6 rounded-full" />
          <span className="text-sm font-medium text-[#131330]">John Doe</span>
        </div>
      </div>

      <div className="mb-2">
        <p className="text-sm text-gray-500">Priority</p>
        <span className="text-xs bg-[#FF695B26] text-[#FF695B] px-2 py-1 rounded">
          High
        </span>
      </div>

      <div className="mb-4">
        <p className="text-sm text-gray-500">Description</p>
        <textarea
          className="w-full mt-1 p-2 border rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#5D5FEF]"
          placeholder="What is the task about"
          rows={3}
        ></textarea>
      </div>

      <div className="flex items-center gap-6 border-b pb-2 mb-3">
        <button
          onClick={() => setActiveTab("comments")}
          className={`text-sm ${
            activeTab === "comments"
              ? "font-semibold text-[#5D5FEF] border-b-2 border-[#5D5FEF]"
              : "text-gray-500"
          }`}
        >
          Comments
        </button>
        <button
          onClick={() => setActiveTab("activity")}
          className={`text-sm ${
            activeTab === "activity"
              ? "font-semibold text-[#5D5FEF] border-b-2 border-[#5D5FEF]"
              : "text-gray-500"
          }`}
        >
          All Activity
        </button>
        <span className="ml-auto text-xs text-gray-400">Oldest</span>
      </div>

      {/* Comments Section */}
      <div className="flex-1 overflow-y-auto space-y-3">
        <div className="flex items-start gap-2">
          <img src={user} alt="user" className="w-6 h-6 rounded-full" />
          <div>
            <p className="text-sm font-medium">Shariq Sr. Designer</p>
            <p className="text-sm text-gray-600">create this task</p>
            <span className="text-xs text-gray-400">40 min ago</span>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <img src={user} alt="user" className="w-6 h-6 rounded-full" />
          <div>
            <p className="text-sm font-medium">Shariq Sr. Designer</p>
            <p className="text-sm text-gray-600">
              I am working on logo branding research
            </p>
            <span className="text-xs text-gray-400">40 min ago</span>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <img src={user} alt="user" className="w-6 h-6 rounded-full" />
          <div>
            <p className="text-sm font-medium">Shariq Sr. Designer</p>
            <p className="text-sm text-gray-600">
              I am working on logo branding
            </p>
            <span className="text-xs text-gray-400">40 min ago</span>
          </div>
        </div>
      </div>

      {/* Add Comment */}
      <div className="mt-4 flex items-center gap-2">
        <img src={user} alt="user" className="w-8 h-8 rounded-full" />
        <input
          type="text"
          placeholder="Add a comment"
          className="flex-1 border rounded-full px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#5D5FEF]"
        />
      </div>
    </div>
  );
}
