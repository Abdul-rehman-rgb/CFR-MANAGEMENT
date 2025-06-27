import React from "react";
import HeadingOne from "../ui/heading/HeadinhOne";
import IconWrapper from "./IconWrapper";

type InventoryCardProps = {
  title: string;
  amount: string;
  subtitle: string;
  chart: React.ReactNode;
  icon?: React.ReactNode;           // can be React element like an icon component or <img />
  iconBgColor?: string;             // optional background color class for icon container
  iconWrapperClassName?: string;
  showExport?: boolean;        // This can also be removed if no longer needed
  showDateRange?: boolean;
  showRefresh?: boolean;
  showCustomize?: boolean;
  //dateRange: Range;
};

const InventoryCard: React.FC<InventoryCardProps> = ({
  title,
  amount,
  subtitle,
  chart,
  icon,
  iconBgColor,
  iconWrapperClassName,  // <-- added here
  
}) => {
  return (
    <div className="rounded-xl w-full space-y-4 sm:space-y-0 p-4 bg-white dark:bg-[#0D0D0D]">
      {/* Icon */}
      <div>
        <IconWrapper bgColor={iconBgColor} className={iconWrapperClassName}>
          {icon}
        </IconWrapper>
      </div>

      {/* Left Content */}
      <div className="flex flex-row justify-between">
        <div className="space-y-4">
          <p className="text-[12px] text-black/40 dark:text-white font-medium">
            {title}
          </p>
          <HeadingOne fontSize="text-[24px]" text={amount} fontWeight="font-semibold" />
          <p className="text-[10px] font-regular text-black/40 dark:text-white">
            {subtitle}
          </p>
        </div>
        {/* Right Chart */}
        <div className="flex flex-col items-end justify-end">
          <div className="w-full">{chart}</div>
        </div>
      </div>
    </div>
  );
};

export default InventoryCard;
