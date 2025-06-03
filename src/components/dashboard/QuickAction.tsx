import { FiPlus } from "react-icons/fi";
import ColorFull from "../ui/button/ColorFull";
import HeadingFour from "../ui/heading/HeadingFour";

export default function QuickAction() {
  return (
    <div className="QuickActionMain px-4 py-4">

      <HeadingFour text="Quick Actions" />

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {/* Quick Action Buttons */}
        <ColorFull
          text="Add new order"
          bgColor="bg-[#5D5FEF]"
          textColor="text-white"
          fontSize="text-[12px]"
          icon={FiPlus}
        />
        <ColorFull
          text="Add new order"
          bgColor="bg-[#5D5FEF]"
          textColor="text-white"
          fontSize="text-[12px]"
          icon={FiPlus}
        />
        <ColorFull
          text="Add new order"
          bgColor="bg-[#5D5FEF]"
          textColor="text-white"
          fontSize="text-[12px]"
          icon={FiPlus}
        />
      </div>
    </div>
  );
}
