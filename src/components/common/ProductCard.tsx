import React from "react";
import HeadingOne from "../ui/heading/HeadinhOne";
import IconWrapper from "./IconWrapper";
import { Link } from "react-router";

type ProductCardProps = {
  title: string;
  amount: string;
  subtitle: string;
  icon?: React.ReactNode; // can be React element like an icon component or <img />
  iconBgColor?: string; // optional background color class for icon container
  iconWrapperClassName?: string;
  navigateTo?: string;
};

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  amount,
  subtitle,
  icon,
  iconBgColor,
  iconWrapperClassName,
  navigateTo,
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
          <p className="text-sm text-black/40 dark:text-white font-medium">
            {title}
          </p>
          <HeadingOne fontSize="text-[24px]" text={amount} />
            <div className="flex flex-row">
              <div>
              <p className="text-[10px] font-regular text-black/40 dark:text-white">
                {subtitle}
              </p>
            </div>
            <div>
              <Link
                to={navigateTo}
                className="text-[10px] font-regular text-black/40 dark:text-white"
              >
                View All
              </Link>
            </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default ProductCard;
