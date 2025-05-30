// components/TargetCard.tsx
import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


type TargetCardProps = {
  achieved: number; // e.g., 234000
  target: number;   // e.g., 500000
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
    <div className="">
      <div className="flex justify-between items-start">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Target</h2>
        <div className="flex flex-col items-end">
          <button
            onClick={onCreateClick}
            className="border border-blue-500 text-blue-500 px-4 py-1 rounded-md text-sm flex items-center gap-1"
          >
            <span className="text-lg">＋</span> Create Target
          </button>
          <button
            onClick={onReportClick}
            className="text-sm text-blue-400 underline mt-1"
          >
            view target report
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center my-6">
        <div className="w-28 h-28">
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
              textColor: '#22c55e',
              pathColor: '#6366f1',
              trailColor: '#e5e7eb',
              textSize: '18px',
              strokeLinecap: 'round',
            })}
          />
          <div className="text-center mt-1 text-gray-500 text-sm">Achieved</div>
        </div>
      </div>

      <div className="flex justify-between px-4">
        <div className="text-center">
          <div className="text-green-600 font-bold text-lg">${(achieved / 1000).toFixed(0)}k</div>
          <div className="text-sm text-gray-500">Achieved Revenue</div>
        </div>
        <div className="text-center">
          <div className="text-indigo-600 font-bold text-lg">${(target / 1000).toFixed(0)}K</div>
          <div className="text-sm text-gray-500">Target Revenue</div>
        </div>
      </div>
    </div>
  );
};

export default TargetCard;