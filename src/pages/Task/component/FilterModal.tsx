import React, { useState } from 'react';
import { Modal } from '../../../components/ui/modal';
import Button from '../../../components/ui/button/Button';
import HeadingTwo from '../../../components/ui/heading/HeadingTwo';
import { Calendar } from 'lucide-react';

interface Filters {
  status: string[];
  priority: string[];
  assignee: string[];
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
  const [selectedAssignee, setSelectedAssignee] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const statusOptions = ['To Do', 'In Progress', 'Completed'];
  const priorityOptions = ['High', 'Medium', 'Low'];
  const assigneeOptions = ['My Tasks', 'John Doe'];

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

  const handleAssigneeChange = (assignee: string) => {
    setSelectedAssignee(prev =>
      prev.includes(assignee)
        ? prev.filter(a => a !== assignee)
        : [...prev, assignee]
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
    setSelectedAssignee([]);
    setSelectedDate('');
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-md p-6">
      <div className="space-y-6">
        <HeadingTwo text="Filters" className="text-center" />
        <div>
          <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Status</h3>
          <div className="space-y-2">
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
          <div className="space-y-2">
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
          <div className="space-y-2">
            {assigneeOptions.map((assignee) => (
              <label key={assignee} className="flex items-center">
                <input
                  type="checkbox"
                  checked={selectedAssignee.includes(assignee)}
                  onChange={() => handleAssigneeChange(assignee)}
                  className="mr-2"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">{assignee}</span>
              </label>
            ))}
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