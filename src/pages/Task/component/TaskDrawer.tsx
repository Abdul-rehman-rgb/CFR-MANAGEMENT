import { useState, useRef, useEffect } from "react";
import { X, Link, Paperclip, GitBranch, ChevronDown } from "lucide-react";
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

const users = [
  { name: "John Doe", image: "../../../../public/images/user/user-01.jpg" },
  { name: "Jane Smith", image: "../../../../public/images/user/user-02.jpg" },
  { name: "Alice Johnson", image: "../../../../public/images/user/user-03.jpg" },
  { name: "Bob Brown", image: "../../../../public/images/user/user-04.jpg" },
  { name: "Charlie Wilson", image: "../../../../public/images/user/user-05.jpg" },
  { name: "Diana Lee", image: "../../../../public/images/user/user-06.jpg" },
  { name: "Eve Davis", image: "../../../../public/images/user/user-07.jpg" },
  { name: "Frank Miller", image: "../../../../public/images/user/user-08.jpg" },
  { name: "Grace Garcia", image: "../../../../public/images/user/user-09.jpg" },
  { name: "Henry Martinez", image: "../../../../public/images/user/user-10.jpg" },
];

const priorities = ["High", "Medium", "Low"];

interface TaskDrawerProps {
  onClose?: () => void;
}

export default function TaskDrawer({ onClose }: TaskDrawerProps) {
  const [activeTab, setActiveTab] = useState("comments");
  const [taskName, setTaskName] = useState("Task name will go here");
  const [isEditingTaskName, setIsEditingTaskName] = useState(false);
  const [selectedAssignee, setSelectedAssignee] = useState("John Doe");
  const [isAssigneeDropdownOpen, setIsAssigneeDropdownOpen] = useState(false);
  const [selectedPriority, setSelectedPriority] = useState("High");
  const [isPriorityDropdownOpen, setIsPriorityDropdownOpen] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const assigneeRef = useRef<HTMLDivElement>(null);
  const priorityRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (assigneeRef.current && !assigneeRef.current.contains(event.target as Node)) {
        setIsAssigneeDropdownOpen(false);
      }
      if (priorityRef.current && !priorityRef.current.contains(event.target as Node)) {
        setIsPriorityDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const fileArray = Array.from(files);
      setSelectedFiles(fileArray);
      fileArray.forEach(file => {
        console.log("Selected file:", file.name);
      });
    }
  };

  const handlePaperclipClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="fixed right-0 top-0 w-full md:w-[560px] h-screen bg-white dark:bg-[#0D0D0D] shadow-lg flex flex-col p-4 border-l border-gray-200 dark:border-gray-700 z-[100000]">
      <div className="flex items-center justify-between mb-4">
        <button className="flex items-center gap-2 px-3 py-1 border rounded-lg text-[14px] font-medium text-[#333333] dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700">
          <img src={Checked} alt="check icon" /> Mark Complete
        </button>
        <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
          <Link size={18} className="cursor-pointer" />
          <Paperclip size={18} className="cursor-pointer" onClick={handlePaperclipClick} />
          <X size={18} className="cursor-pointer" onClick={onClose} />
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileSelect}
            multiple
            className="hidden"
          />
        </div>
      </div>

      <hr className="border-t border-[#CCCCCC] dark:border-gray-600 mb-4" />

      {isEditingTaskName ? (
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          onBlur={() => setIsEditingTaskName(false)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setIsEditingTaskName(false);
            }
          }}
          className="text-[20px] font-medium text-[#131330] dark:text-white mb-4 bg-transparent border-none outline-none focus:ring-0 w-full"
          autoFocus
        />
      ) : (
        <h2
          className="text-[20px] font-medium text-[#131330] dark:text-white mb-4 cursor-pointer"
          onClick={() => setIsEditingTaskName(true)}
        >
          {taskName}
        </h2>
      )}

      <div className="mb-2 flex flex-row justify-between">
        <p className="text-[12px] text-[#8C8C8C] dark:text-gray-400 font-medium">
          Assignee
        </p>
        <div className="relative" ref={assigneeRef}>
          <div
            className="flex items-center gap-2 mt-1 cursor-pointer"
            onClick={() => setIsAssigneeDropdownOpen(!isAssigneeDropdownOpen)}
          >
            <img src={user} alt="user" className="w-6 h-6 rounded-full" />
            <span className="text-[14px] font-medium text-[#131330] dark:text-white">
              {selectedAssignee}
            </span>
            <ChevronDown size={14} className="text-[#131330] dark:text-white" />
          </div>
          {isAssigneeDropdownOpen && (
            <div className="absolute right-0 top-full mt-1 bg-white dark:bg-[#1a1a1a] border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg z-[99999] w-48 max-h-48 overflow-y-auto">
              {users.map((userItem) => (
                <div
                  key={userItem.name}
                  onClick={() => {
                    setSelectedAssignee(userItem.name);
                    setIsAssigneeDropdownOpen(false);
                  }}
                  className="flex items-center gap-3 p-3 hover:bg-gray-100 dark:hover:bg-[#2a2a2a] cursor-pointer"
                >
                  <img src={userItem.image} alt={userItem.name} className="w-8 h-8 rounded-full" />
                  <span className="text-sm text-black dark:text-white">{userItem.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="mb-2 flex flex-row justify-between">
        <p className="text-[12px] text-[#8C8C8C] dark:text-gray-400 font-medium">
          Priority
        </p>
        <div className="relative" ref={priorityRef}>
          <div
            className="flex items-center gap-1 cursor-pointer"
            onClick={() => setIsPriorityDropdownOpen(!isPriorityDropdownOpen)}
          >
            <span className={`text-[11px] font-semibold px-2 py-1 rounded ${
              selectedPriority === "High" ? "bg-[#FF695B26] text-[#FF695B]" :
              selectedPriority === "Medium" ? "bg-[#FFA50026] text-[#FFA500]" :
              "bg-[#00800026] text-[#008000]"
            }`}>
              {selectedPriority}
            </span>
            <ChevronDown size={14} className="text-[#131330] dark:text-white" />
          </div>
          {isPriorityDropdownOpen && (
            <div className="absolute right-0 top-full mt-1 bg-white dark:bg-[#1a1a1a] border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg z-[99999] w-24">
              {priorities.map((priority) => (
                <div
                  key={priority}
                  onClick={() => {
                    setSelectedPriority(priority);
                    setIsPriorityDropdownOpen(false);
                  }}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-[#2a2a2a] cursor-pointer text-sm text-black dark:text-white"
                >
                  {priority}
                </div>
              ))}
            </div>
          )}
        </div>
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

      {selectedFiles.length > 0 && (
        <div className="mb-4">
          <p className="text-[12px] text-[#8C8C8C] dark:text-gray-400 font-medium mb-2">
            Attached Files
          </p>
          <div className="space-y-2">
            {selectedFiles.map((file, index) => (
              <div key={index} className="flex items-center gap-2 p-2 bg-gray-50 dark:bg-[#1a1a1a] rounded-lg">
                <Paperclip size={14} className="text-gray-500 dark:text-gray-400" />
                <span className="text-sm text-[#131330] dark:text-white">{file.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}

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
