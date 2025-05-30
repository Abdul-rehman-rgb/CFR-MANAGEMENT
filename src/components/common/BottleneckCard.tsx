import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
// import { FaExclamationCircle } from "react-icons/fa";
import { FaExclamationCircle } from '../../icons';


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
    <div className=" p-4 rounded-xl w-full">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-semibold text-blue-900">{title}</p>
          <h2 className="text-xl font-bold text-red-700">{issue}</h2>
        </div>
        {icon && <div className="text-4xl">{icon}</div>}
      </div>

      <div className="mt-4">
        <h3 className="text-2xl font-bold text-blue-900">{orderCount} Orders</h3>
        <p className="text-sm text-red-500">{status}</p>
      </div>

      <button
        onClick={onClick}
        className="mt-4 bg-blue-900 text-white px-4 py-2 rounded-full hover:bg-blue-800 transition"
      >
        {buttonLabel}
      </button>
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
