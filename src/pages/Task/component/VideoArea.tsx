import React, { useState } from "react";
import { Play, FileText, FileSpreadsheet, File } from "lucide-react";
import { TrainingData } from "./trainings";
import videoFallback from "../../../../public/images/task/video.jpg";

const statusColors: { [key: string]: string } = {
  Completed: "bg-[#27C840]",
  "In Progress": "bg-[#5A5FEF]",
  PDF: "bg-[#EF4444]",
};

const bgColors: { [key: string]: string } = {
  Completed: "bg-[#AEAEB2]/15",
  "In Progress": "bg-[#F7FCF5]",
  PDF: "bg-[#F1F5F9]",
};

const VideoArea = ({ data }: { data: TrainingData }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div
      className={`${
        bgColors[data.status] || "bg-[#F1F5F9]"
      } rounded-2xl p-4 w-full transition relative overflow-hidden ${
        data.status === "Completed" ? "opacity-75" : ""
      }`}
    >
      <div className="relative rounded-xl overflow-hidden">
        {isPlaying && data.type === "video" ? (
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            className="w-full h-[150px] rounded-xl"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onError={() => setIsPlaying(false)}
          />
        ) : (
          <div
            className="relative h-[150px] w-full overflow-hidden cursor-pointer"
            onClick={() => data.type === "video" && setIsPlaying(true)}
          >
            <img
              src={data.thumbnail}
              alt="thumb"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = videoFallback;
              }}
            />

            {data.type === "video" && (
              <div className="absolute inset-0 flex items-center justify-center bg-[#5A5FEF]/20">
                <div
                  className={`absolute top-3 left-3 ${
                    statusColors[data.status] || "bg-[#5A5FEF]"
                  } text-white text-[11px] font-semibold px-3 py-1 rounded-[6px]`}
                >
                  {data.status}
                </div>
                <div className="bg-white/80 p-3 rounded-full backdrop-blur-sm">
                  <Play className="w-5 h-5 text-[#5A5FEF]" />
                </div>
              </div>
            )}

            {data.type === "pdf" && (
              <div className="absolute inset-0 flex items-center justify-center bg-white">
                <img
                  src={data.thumbnail}
                  alt="pdf icon"
                  className="w-12 h-12 object-contain"
                  onError={(e) => {
                    e.currentTarget.src = videoFallback;
                  }}
                />
              </div>
            )}
          </div>
        )}
      </div>

      <div className="mt-4 flex flex-col space-y-2">
        <div className="flex justify-between items-center">
          <h3 className="text-[16px] font-semibold text-[#0D0D0D] dark:text-white">{data.title}</h3>
          <span className="text-xs text-[#000] font-semibold bg-[#E8E9FF] px-2 py-1 rounded-lg">
            {data.duration}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-xs font-medium text-green-700 bg-green-100 px-2 py-0.5 rounded-lg">
            {data.label}
          </span>
          {data.status !== "Completed" && (
            <div className="flex gap-2">
              <div className="bg-red-100 p-1.5 rounded-md cursor-pointer hover:scale-105 transition">
                <FileText className="w-4 h-4 text-red-500" />
              </div>
              <div className="bg-green-100 p-1.5 rounded-md cursor-pointer hover:scale-105 transition">
                <FileSpreadsheet className="w-4 h-4 text-green-500" />
              </div>
              <div className="bg-blue-100 p-1.5 rounded-md cursor-pointer hover:scale-105 transition">
                <File className="w-4 h-4 text-blue-500" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoArea;
