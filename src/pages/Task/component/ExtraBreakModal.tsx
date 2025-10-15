import { Modal } from "./Modal";

const ExtraBreakModal = ({
  isOpen,
  onClose,
  extraBreakTime,
  setExtraBreakTime,
  extraBreakReason,
  setExtraBreakReason,
  onStartBreak,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-lg p-6">
      <div className="bg-white dark:bg-[#0D0D0D] p-4 sm:p-6 rounded-lg w-full">
        <h3 className="text-lg font-semibold mb-4 text-black dark:text-white">Extra Break</h3>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2 text-black dark:text-white">Duration</label>
          <select
            value={extraBreakTime / 60}
            onChange={(e) => setExtraBreakTime(parseInt(e.target.value) * 60)}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white/30 dark:bg-gray-800/30 text-black dark:text-white placeholder:text-gray-700 dark:placeholder:text-gray-300"
          >
            <option value={5}>5 Min</option>
            <option value={10}>10 Min</option>
            <option value={15}>15 Min</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2 text-black dark:text-white">Reason</label>
          <textarea
            value={extraBreakReason}
            onChange={(e) => setExtraBreakReason(e.target.value)}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-black dark:text-white"
            rows={3}
          />
        </div>

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 dark:bg-gray-600 text-black dark:text-white rounded"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onStartBreak(extraBreakTime);
              onClose();
              setExtraBreakReason("");
            }}
            className="px-4 py-2 bg-[#27C840] text-white rounded"
          >
            Start Break
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ExtraBreakModal;
