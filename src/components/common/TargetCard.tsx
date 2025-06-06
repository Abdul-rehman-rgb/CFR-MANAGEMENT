import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import OutlineBtn from "../ui/button/OutLine";
import { FiPlus } from "react-icons/fi";
import HeadingTwo from "../ui/heading/HeadingTwo";
import HeadingOne from "../ui/heading/HeadinhOne";
import SubHeading from "../ui/heading/SubHeading";

type TargetCardProps = {
  achieved: number;
  target: number;
  onCreateClick?: () => void;
  onReportClick?: () => void;
};

const TargetCard: React.FC<TargetCardProps> = ({
  achieved,
  target,
  onCreateClick,
  onReportClick,
}) => {
  const percentage = Math.round((achieved / target) * 100);

  return (
    <div className="bg-white dark:bg-[#0D0D0D] rounded-xl pl-2 w-full py-1">
      {/* Header */}
      <div className="flex flex-row justify-between items-start mb-1 gap-2 lg:flex-row">
        <HeadingTwo text="Target" />
        <div className="flex flex-col items-start sm:items-end space-y-1">
          <OutlineBtn
            BtnName="Create Target"
            icon={FiPlus}
            onClick={onCreateClick}
            className="rounded-[6px] text-[9px]"
          />
          <button
            onClick={onReportClick}
            className="text-[9px] text-[#5D5FEF] underline"
          >
            View target report
          </button>
        </div>
      </div>

      {/* Progress */}
      <div className="flex justify-center items-center mb-1">
        <div className="w-20 h-20 max-sm:w-28 max-sm:h-28">
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
              textColor: "#22c55e",
              pathColor: "#6366f1",
              trailColor: "#e5e7eb",
              textSize: "26px",
              strokeLinecap: "round",
            })}
          />
          {/* <div className="text-center mt-1 text-gray-500 text-xs sm:text-sm">Achieved</div> */}
        </div>
      </div>

      {/* Revenue Stats */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 px-2 sm:px-4">
        <div className="text-center">
          <HeadingOne
            text={`$${(achieved / 1000).toFixed(0)}k`}
            className="text-[#0CB91D] text-[20px]"
          />
          <SubHeading text="Achieved Revenue" />
        </div>
        <div className="text-center">
          <HeadingOne
            text={`$${(target / 1000).toFixed(0)}k`}
            className="text-[#5D5FEF] text-[20px]"
          />
          <SubHeading text="Target Revenue" />
        </div>
      </div>
    </div>
  );
};

export default TargetCard;
