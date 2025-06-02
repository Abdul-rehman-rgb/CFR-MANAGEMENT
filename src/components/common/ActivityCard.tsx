import HeadingTwo from "../ui/heading/HeadingTwo";
import ProfileImg from '../../icons/profile.svg'

const ActivityCard = () => {
  return (
    <div className="bg-white h-[450px] rounded-lg p-6 sm:p-6 flex flex-col dark:text-white dark:bg-[#0D0D0D]">
      <div className="mb-3">
        <HeadingTwo
          text="Recent Activities
"
          className="text-[20px] font-bold tracking-tight"
        />
      </div>
      {/* Scrollable area */}
      <div className="flex-1 overflow-y-auto pr-2">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="mb-4 flex w-full flex-col gap-2 rounded-2xl bg-[#F9F9FF] px-4 py-3 sm:px-6 sm:py-4 dark:bg-[#141414]/50 dark:text-white"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={ProfileImg}
                  alt="User"
                  className="h-8 w-8 rounded-full object-cover"
                />
                <div className="flex items-center gap-1 text-sm font-semibold text-[#1C1F4A] dark:text-white">
                  <span>John Doe</span>
                  <span className="font-normal text-gray-400">• Admin</span>
                </div>
              </div>
              <span className="text-sm font-normal text-gray-400">
                10 mins ago
              </span>
            </div>

            <p className="text-[14px] sm:text-base font-medium text-[#1C1F4A] dark:text-white">
              Updated stock for Product X.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityCard;
