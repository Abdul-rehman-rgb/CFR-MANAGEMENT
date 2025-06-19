/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { SetStateAction, useState } from "react";
import { MoreVertical, Check, Plus } from "react-feather";
import "./TargetRow.scss";
import HeadingTwo from "../ui/heading/HeadingTwo";
import { useModal } from "../../hooks/useModal";
import Button from "../ui/button/Button";
import { Modal } from "../ui/modal";
import TargetReport from "./CreateTargetModal/TargetReport";
import CreateTaskStepOne from "./CreateTask/CreateTaskStepOne";

export type Task = {
  id: string;
  userName: string;
  userRole: string;
  title: string;
  description: string;
  deadline?: string;
  assignedDate: string;
  status: "active" | "completed";
};

type TaskListProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tasks?: any;
  onAddTask?: () => void;
  onViewAll?: () => void;
};

const TaskList = ({ tasks, onAddTask, onViewAll }: TaskListProps) => {
    const { isOpen, openModal, closeModal } = useModal();
  const [step, setStep] = useState(0);

  const handleOpenModal = (type: SetStateAction<string>) => {
    setCurrentModal(type);
    setStep(0);
    openModal();
  };

  // const handleBack = () => setStep((prev) => prev - 1);
  const handleNext = () => setStep((prev) => prev + 1);

  // const handleSave = () => {
  //   console.log("Saving...");
  //   closeModal();
  //   setStep(0);
  //   setCurrentModal("");
  // };
  const [currentModal, setCurrentModal] = useState("");

  return (
    <div>
    <div className="taskManagement bg-white rounded-lg p-6 flex flex-col dark:bg-[#0D0D0D] dark:text-white">
      <div className="task-header">
        <div className="flex items-center justify-between mb-3">
          {/* Left: Heading */}
          <HeadingTwo
            text="Tasks"
            className="text-[20px] font-bold tracking-tight dark:text-white"
          />

          {/* Right: Buttons */}
          <div className="flex items-center gap-2">
            <button
              className="create-task flex items-center gap-1"
              onClick={onAddTask}
            >
              <Plus size={16} />
              <span onClick={() => handleOpenModal("task")}>Create Task</span>
              {/* <button
                
                className="text-[9px] text-[#5D5FEF] underline"
              >
                View target report
              </button> */}
            </button>
          </div>
        </div>
      </div>

      <div className="task-footer">
        <div className="task-actions">
          <span className="more-count">+15 more</span>
          <div className="status-filter">
            <span className="active">Active</span>
          </div>
          <button className="icon-button">
            <MoreVertical size={18} />
          </button>
          <button className="view-all" onClick={onViewAll}>
            View All
          </button>
        </div>
      </div>

      <div className="task-management-container bg-white h-[340px] rounded-lg p-6 sm:p-6 flex flex-col dark:text-white dark:bg-[#0D0D0D] overflow-y-auto">
        <div className="task-list dark:bg-[#0D0D0D]">
          {tasks.map((task: any) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </div>
    </div>

    <Modal
        isOpen={isOpen}
        onClose={closeModal}
        className="max-w-[1000px] w-full mx-auto m-4"
      >
        {currentModal === "task" && (
          <>
            {step === 0 && <CreateTaskStepOne />}
            {step === 1 && <TargetReport />}
          </>
        )}

        <div className="flex items-center gap-3 px-2 mt-0 mb-4 lg:justify-end">
          {/* {step > 0 && (
            <Button
              className="w-full mx-5 my-1 bg-gray-200 text-black"
              size="sm"
              onClick={handleBack}
            >
              Back
            </Button>
          )} */}

          {step == 0 && (
            <Button
              className="w-full bg:hover-red mx-5 my-1"
              size="sm"
              onClick={closeModal}
            >
              Cancel
            </Button>
          )}

          {step == 0 && (
            <Button
              className="w-full bg:hover-red mx-5 my-1"
              size="sm"
              onClick={handleNext}
            >
              Save
            </Button>
          )}
         
        </div>
      </Modal>

    </div>
  );
};

const TaskCard = ({ task }: { task: Task }) => {

  return (
    <div>
      <div className={`task-card ${task.status}`}>
        <div className="task-user">
          <div className="user-avatar">{task.userName.charAt(0)}</div>
          <div className="user-info">
            <span className="user-name">{task.userName}</span>
            <span className="user-role">{task.userRole}</span>
          </div>
        </div>

        <div className="task-content">
          <h3 className="task-title">{task.title}</h3>
          <p className="task-description">{task.description}</p>
          {task.deadline && (
            <div className="task-deadline">Deadline: {task.deadline}</div>
          )}
        </div>

        <div className="task-meta">
          <span className="assigned-date">
            Assigned on: {task.assignedDate}
          </span>
          <div className={`status-badge ${task.status}`}>
            {task.status === "completed" && <Check size={14} />}
            <span>
              {task.status.charAt(0).toUpperCase() + task.status.slice(1)}
            </span>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default TaskList;
