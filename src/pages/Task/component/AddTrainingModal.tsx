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
      const url = URL.createObjectURL(files[0]);
      setFormData(prev => ({ ...prev, [name]: url }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-lg p-6">
      <div className="space-y-6">
        <HeadingTwo text="Add New Training" />

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#737791] dark:text-white mb-2">
              Training Name
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5D5FEF] dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              placeholder="Enter training name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#737791] dark:text-white mb-2">
              Training Type
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
            <label className="block text-sm font-medium text-[#737791] dark:text-white mb-2">
              Training Time
            </label>
            <input
              type="text"
              name="duration"
              value={formData.duration}
              onChange={handleInputChange}
              required
              pattern="^\d{2}:\d{2}:\d{2}$"
              className="w-full px-3 py-2 border bg-[#73779140]/25 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5D5FEF] dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              placeholder="00:00:00"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#737791] dark:text-white mb-2">
              Training Asset Type
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

          {formData.type === 'video' && (
            <div>
              <label className="block text-sm font-medium text-[#737791] dark:text-white mb-2">
                Upload Video
              </label>
              <input
                type="file"
                name="thumbnail"
                onChange={handleFileChange}
                accept="video/*"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5D5FEF] dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              />
            </div>
          )}

          <div className="flex justify-end gap-3 pt-4">
            <Button
            className='w-[50%]'
              variant="outline"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              className="bg-[#5D5FEF] hover:bg-[#4a4cd1] text-white w-[50%]"
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