import React from "react";
import HeadingOne from "../../../components/ui/heading/HeadinhOne";

type ReportCardProps = {
  title: string;
  amount: string;
  subtitle: string;
  chart: React.ReactNode;
  icon?: React.ReactNode; // can be React element like an icon component or <img />
  iconBgColor?: string; // optional background color class for icon container
  iconWrapperClassName?: string;
  showExport?: boolean; // This can also be removed if no longer needed
  showDateRange?: boolean;
  showRefresh?: boolean;
  showCustomize?: boolean;
  //dateRange: Range;
};

const ReportCard: React.FC<ReportCardProps> = ({
  title,
  amount,
  subtitle,
  icon,
  chart,
}) => {
  return (
    <div className="rounded-xl w-full space-y-4 sm:space-y-0 p-4 bg-white dark:bg-[#0D0D0D] flex flex-row max-sm:justify-between sm:justify-between">
      {/* Left Content */}
      <div className="flex flex-row justify-between sm:justify-between">
        <div className="space-y-4">
          <p className="text-[14px] text-black/40 dark:text-white font-medium">
            {title}
          </p>
          <HeadingOne fontSize="text-[24px]" text={amount} />
          <p className="text-[10px] font-regular text-[#2B2B2B]/50 dark:text-white flex">
            {icon}
            {subtitle}
          </p>
        </div>
      </div>
      {/* Right Chart */}
      <div className="flex items-center">{chart}</div>
    </div>
  );
};

export default ReportCard;
