import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
// import { FaExclamationCircle } from "react-icons/fa";
import { FaExclamationCircle } from "../../icons";
import HeadingTwo from "../ui/heading/HeadingTwo";
import HeadingOne from "../ui/heading/HeadinhOne";

type CardProps = {
  title: string;
  issue: string;
  orderCount: number;
  status: string;
  buttonLabel: string;
  onClick: () => void;
  icon?: React.ReactNode;
};

const BottleneckCard = ({
  title,
  issue,
  orderCount,
  status,
  buttonLabel,
  onClick,
  icon,
}: CardProps) => {
  return (
    <div className="p-4 rounded-xl w-full bg-[#FFC7C8] space-y-4 h-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        {/* Left Side - Info */}
        <div className="flex flex-col gap-2">
          <p className="text-base text-[16px] sm:text-lg font-semibold text-[#151D48] dark:text-orange-400">
            {title}
          </p>
          <HeadingTwo
            className="text-[24px] sm:text-2xl font-bold text-red-700"
            text={issue}
          />
        </div>

        {/* Right Side - Icon */}
        {icon && (
          <div className="text-4xl sm:text-5xl text-red-600">{icon}</div>
        )}
      </div>

      <div className="flex flex-row justify-between">
        <div>
          <HeadingOne
            text={orderCount + " Orders"}
            colorClass="text-[#151D48]"
            fontSize="text-[32px]"
          />
          <p className="text-[16px] text-[#AE0003]">{status}</p>
        </div>
        <div>
          <button
            onClick={onClick}
            className="mt-4 bg-[#151D48] text-[12px] text-white px-[12px] py-[12px] rounded-[12px] hover:bg-blue-800 transition"
          >
            {buttonLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

const BottleneckCardCarousel = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    slides: { perView: 1, spacing: 16 },
  });

  const cards: CardProps[] = [
    {
      title: "Biggest Bottleneck Today!",
      issue: "Delayed Shipments",
      orderCount: 12,
      status: "Delayed",
      buttonLabel: "Contact supplier!",
      onClick: () => alert("Contact supplier"),
      icon: <FaExclamationCircle className="text-red-600 text-5xl" />,
    },
    {
      title: "Pending Approvals",
      issue: "Unapproved Orders",
      orderCount: 5,
      status: "Pending",
      buttonLabel: "Review Now",
      onClick: () => alert("Review Now"),
      icon: <FaExclamationCircle className="text-yellow-500 text-5xl" />,
    },
  ];

  return (
    <div ref={sliderRef} className="keen-slider">
      {cards.map((card, idx) => (
        <div className="keen-slider__slide px-2" key={idx}>
          <BottleneckCard {...card} />
        </div>
      ))}
    </div>
  );
};

export default BottleneckCardCarousel;
