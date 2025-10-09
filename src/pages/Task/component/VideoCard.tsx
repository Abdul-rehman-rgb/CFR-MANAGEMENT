import React from "react";
import { Play, FileText, FileSpreadsheet, File } from "lucide-react";

const VideoCard = () => {
  return (
    <div className="bg-[#F1F5F9] rounded-2xl p-4 w-[250px] shadow-sm">
      <div className="relative rounded-xl overflow-hidden">
        <img
          src="https://via.placeholder.com/400x250?text=Training+Preview"
          alt="Training Preview"
          className="w-full h-[150px] object-cover"
        />
        <div className="absolute inset-0 bg-[#5A5FEF]/20 flex items-center justify-center">
          <div className="bg-[#5A5FEF] text-white text-xs px-3 py-1 rounded-full absolute top-3 left-3">
            In Progress
          </div>
          <div className="bg-white/80 p-3 rounded-full backdrop-blur-sm">
            <Play className="w-5 h-5 text-[#5A5FEF]" />
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-col space-y-2">
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-semibold text-gray-800">
            Training Name
          </h3>
          <span className="text-xs text-[#5A5FEF] font-semibold bg-[#E8E9FF] px-2 py-1 rounded-lg">
            04:05:01
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-xs font-medium text-green-700 bg-green-100 px-2 py-0.5 rounded-lg">
            Basic
          </span>
          <div className="flex gap-2">
            <div className="bg-red-100 p-1.5 rounded-md">
              <FileText className="w-4 h-4 text-red-500" />
            </div>
            <div className="bg-green-100 p-1.5 rounded-md">
              <FileSpreadsheet className="w-4 h-4 text-green-500" />
            </div>
            <div className="bg-blue-100 p-1.5 rounded-md">
              <File className="w-4 h-4 text-blue-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
