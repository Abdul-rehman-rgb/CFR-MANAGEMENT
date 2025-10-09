import React, { useState } from 'react';
import { Modal } from '../../../components/ui/modal';
import Button from '../../../components/ui/button/Button';
import HeadingTwo from '../../../components/ui/heading/HeadingTwo';

interface AddTrainingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddTrainingModal: React.FC<AddTrainingModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    label: 'Basic',
    duration: '',
    type: 'video',
    thumbnail: '',
    avatar: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      // In a real app, you'd upload the file and get a URL
      const url = URL.createObjectURL(files[0]);
      setFormData(prev => ({ ...prev, [name]: url }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Just close the modal for UI demo
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-lg p-6">
      <div className="space-y-6">
        <HeadingTwo text="Add New Training" className="text-center" />

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5D5FEF] dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              placeholder="Enter training title"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
              Level
            </label>
            <select
              name="label"
              value={formData.label}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5D5FEF] dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            >
              <option value="Basic">Basic</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advance">Advance</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
              Duration (HH:MM:SS)
            </label>
            <input
              type="text"
              name="duration"
              value={formData.duration}
              onChange={handleInputChange}
              required
              pattern="^\d{2}:\d{2}:\d{2}$"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5D5FEF] dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              placeholder="00:00:00"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
              Type
            </label>
            <select
              name="type"
              value={formData.type}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5D5FEF] dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            >
              <option value="video">Video</option>
              <option value="pdf">PDF</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
              Thumbnail
            </label>
            <input
              type="file"
              name="thumbnail"
              onChange={handleFileChange}
              accept="image/*"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5D5FEF] dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
              Avatar (Optional)
            </label>
            <input
              type="file"
              name="avatar"
              onChange={handleFileChange}
              accept="image/*"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5D5FEF] dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            />
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button
              variant="outline"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              className="bg-[#5D5FEF] hover:bg-[#4a4cd1] text-white"
            >
              Add Training
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AddTrainingModal;