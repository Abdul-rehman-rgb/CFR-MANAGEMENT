import React, { useState, useRef, useEffect } from 'react';
import { Modal } from '../../../components/ui/modal';
import Button from '../../../components/ui/button/Button';
import HeadingTwo from '../../../components/ui/heading/HeadingTwo';
import { ChevronDown } from 'lucide-react';

interface Filters {
  status: string[];
  priority: string[];
  assignee: string;
  date?: string;
}

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyFilters: (filters: Filters) => void;
}

const FilterModal: React.FC<FilterModalProps> = ({ isOpen, onClose, onApplyFilters }) => {
  const [selectedStatus, setSelectedStatus] = useState<string[]>([]);
  const [selectedPriority, setSelectedPriority] = useState<string[]>([]);
  const [selectedAssignee, setSelectedAssignee] = useState<string>('John Doe');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [isAssigneeDropdownOpen, setIsAssigneeDropdownOpen] = useState(false);
  const assigneeRef = useRef<HTMLDivElement>(null);

  const statusOptions = ['To Do', 'In Progress', 'Completed'];
  const priorityOptions = ['High', 'Medium', 'Low'];
  const assigneeOptions = [
    { name: "John Doe", image: "../../../../public/images/user/user-01.jpg" },
    { name: "Jane Smith", image: "../../../../public/images/user/user-02.jpg" },
    { name: "Alice Johnson", image: "../../../../public/images/user/user-03.jpg" },
    { name: "Bob Brown", image: "../../../../public/images/user/user-04.jpg" },
    { name: "Charlie Wilson", image: "../../../../public/images/user/user-05.jpg" },
    { name: "Diana Lee", image: "../../../../public/images/user/user-06.jpg" },
    { name: "Eve Davis", image: "../../../../public/images/user/user-07.jpg" },
    { name: "Frank Miller", image: "../../../../public/images/user/user-08.jpg" },
    { name: "Grace Garcia", image: "../../../../public/images/user/user-09.jpg" },
    { name: "Henry Martinez", image: "../../../../public/images/user/user-10.jpg" },
  ];

  const handleStatusChange = (status: string) => {
    setSelectedStatus(prev =>
      prev.includes(status)
        ? prev.filter(s => s !== status)
        : [...prev, status]
    );
  };

  const handlePriorityChange = (priority: string) => {
    setSelectedPriority(prev =>
      prev.includes(priority)
        ? prev.filter(p => p !== priority)
        : [...prev, priority]
    );
  };


  const handleApply = () => {
    onApplyFilters({
      status: selectedStatus,
      priority: selectedPriority,
      assignee: selectedAssignee,
      date: selectedDate
    });
    onClose();
  };

  const handleClear = () => {
    setSelectedStatus([]);
    setSelectedPriority([]);
    setSelectedAssignee('John Doe');
    setSelectedDate('');
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (assigneeRef.current && !assigneeRef.current.contains(event.target as Node)) {
        setIsAssigneeDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-md p-6">
      <div className="space-y-6">
        <HeadingTwo text="Filters" className="text-center" />
        <div>
          <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Status</h3>
          <div className="space-y-2 flex flex-row justify-between">
            {statusOptions.map((status) => (
              <label key={status} className="flex items-center">
                <input
                  type="checkbox"
                  checked={selectedStatus.includes(status)}
                  onChange={() => handleStatusChange(status)}
                  className="mr-2"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">{status}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Priority</h3>
          <div className="space-y-2 flex flex-row justify-between">
            {priorityOptions.map((priority) => (
              <label key={priority} className="flex items-center">
                <input
                  type="checkbox"
                  checked={selectedPriority.includes(priority)}
                  onChange={() => handlePriorityChange(priority)}
                  className="mr-2"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">{priority}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Assignee</h3>
          <div className="relative" ref={assigneeRef}>
            <div
              className="flex items-center gap-2 cursor-pointer border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 px-3 py-2"
              onClick={() => setIsAssigneeDropdownOpen(!isAssigneeDropdownOpen)}
            >
              <img
                src={assigneeOptions.find(user => user.name === selectedAssignee)?.image}
                alt="user"
                className="w-6 h-6 rounded-full"
              />
              <span className="text-sm text-gray-900 dark:text-white">
                {selectedAssignee}
              </span>
              <ChevronDown size={14} className="text-gray-900 dark:text-white ml-auto" />
            </div>
            {isAssigneeDropdownOpen && (
              <div className="absolute left-0 top-full mt-1 bg-white dark:bg-[#1a1a1a] border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg z-[99999] w-full max-h-48 overflow-y-auto">
                {assigneeOptions.map((userItem) => (
                  <div
                    key={userItem.name}
                    onClick={() => {
                      setSelectedAssignee(userItem.name);
                      setIsAssigneeDropdownOpen(false);
                    }}
                    className="flex items-center gap-3 p-3 hover:bg-gray-100 dark:hover:bg-[#2a2a2a] cursor-pointer"
                  >
                    <img src={userItem.image} alt={userItem.name} className="w-8 h-8 rounded-full" />
                    <span className="text-sm text-black dark:text-white">{userItem.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Date</h3>
          <div className="relative">
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-[#5D5FEF]"
            />
          </div>
        </div>

        <div className="flex justify-between gap-3 pt-4">
          <Button
            variant="outline"
            onClick={handleClear}
            className="flex-1"
          >
            Clear All
          </Button>
          <Button
            onClick={handleApply}
            className="flex-1 bg-[#5D5FEF] hover:bg-[#4a4cd1] text-white"
          >
            Apply Filters
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default FilterModal;