/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { MoreVertical, Check, Plus } from "react-feather";
import "./TargetRow.scss";
import HeadingTwo from "../ui/heading/HeadingTwo";

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
  return (
    <div className="taskManagement bg-white rounded-lg p-6 flex flex-col">
      <div className="task-header">
        <div className="flex items-center justify-between mb-3">
          {/* Left: Heading */}
          <HeadingTwo
            text="Tasks"
            className="text-[20px] font-bold tracking-tight"
          />

          {/* Right: Buttons */}
          <div className="flex items-center gap-2">
           
            <button
              className="create-task flex items-center gap-1"
              onClick={onAddTask}
            >
              <Plus size={16} />
              <span>Create Task</span>
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
        

        <div className="task-list">
          {tasks.map((task : any) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </div>
    </div>
  );
};

const TaskCard = ({ task }: { task: Task }) => {
  return (
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
        <span className="assigned-date">Assigned on: {task.assignedDate}</span>
        <div className={`status-badge ${task.status}`}>
          {task.status === "completed" && <Check size={14} />}
          <span>
            {task.status.charAt(0).toUpperCase() + task.status.slice(1)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
