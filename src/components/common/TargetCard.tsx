/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { SetStateAction, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import OutlineBtn from "../ui/button/OutLine";
import { FiPlus } from "react-icons/fi";
import HeadingTwo from "../ui/heading/HeadingTwo";
import HeadingOne from "../ui/heading/HeadinhOne";
import SubHeading from "../ui/heading/SubHeading";
import { Modal } from "../ui/modal";
import { useModal } from "../../hooks/useModal";
import Button from "../ui/button/Button";
import CreateTarget from "../dashboard/CreateTargetModal/CreateTarget";
import TargetReport from "../dashboard/CreateTargetModal/TargetReport";

type TargetCardProps = {
  achieved: number;
  target: number;
  onCreateClick?: () => void;
  onReportClick?: () => void;
};

const TargetCard: React.FC<TargetCardProps> = ({
  achieved,
  target,
  // onCreateClick,
  onReportClick,
}) => {
  const percentage = Math.round((achieved / target) * 100);

  const { isOpen, openModal, closeModal } = useModal();
  const [step, setStep] = useState(0);

  const handleBack = () => setStep((prev) => prev - 1);
  const handleNext = () => setStep((prev) => prev + 1);
  const handleSave = () => {
    console.log("Saving...");
    closeModal();
    setStep(0);
    setCurrentModal("");
  };
  const [currentModal, setCurrentModal] = useState("");

  const handleOpenModal = (type: SetStateAction<string>) => {
    setCurrentModal(type);
    setStep(0);
    openModal();
  };

  const stepLabels = [
    "",
    "",
  ];
  return (
    <div className="bg-white dark:bg-[#0D0D0D] rounded-xl pl-2 w-full py-1">
      {/* Header */}
      <div className="flex flex-row justify-between items-start mb-1 gap-2 lg:flex-row">
        <HeadingTwo text="Target" />
        <div className="flex flex-col items-start sm:items-end space-y-1">
          <OutlineBtn
            BtnName="Create Target"
            icon={FiPlus}
            // onClick={onCreateClick}
            className="rounded-[6px] text-[9px]"
            onClick={() => handleOpenModal("target")}
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

      <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[725px] m-4">
        {currentModal === "target" && (
          <>
            {step === 0 && <CreateTarget />}
            {step === 1 && <TargetReport />}
          </>
        )}

        <div className="flex items-center gap-3 px-2 mt-0 mb-4 lg:justify-end">
          {step > 0 && (
            <Button
              className="w-full mx-5 my-1 bg-gray-200 text-black"
              size="sm"
              onClick={handleBack}
            >
              Back
            </Button>
          )}

          {step < 1 && (
            <Button
              className="w-full bg:hover-red mx-5 my-1"
              size="sm"
              onClick={handleNext}
            >
              Next
            </Button>
          )}

          {step === 1 && (
            <Button
              className="w-full bg:hover-red mx-5 my-1"
              size="sm"
              onClick={handleSave}
            >
              Save
            </Button>
          )}

          {stepLabels[step] && (
            <Button className="w-full bg:hover-red mx-5 my-1" size="sm">
              {stepLabels[step]}
            </Button>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default TargetCard;
