import React, { useEffect, useState, useRef } from 'react';
import { useCountdown } from '../../../hooks/useCountdown';

interface BreakTimerModalProps {
  isOpen: boolean;
  onClose: () => void;
  duration: number;
  onBreakEnd?: () => void;
}

const BreakTimerModal: React.FC<BreakTimerModalProps> = ({
  isOpen,
  onClose,
  duration,
  onBreakEnd,
}) => {
  const { remainingTime, isActive, start } = useCountdown();
  const [showSuccess, setShowSuccess] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && duration > 0) {
      start(duration);
    }
  }, [isOpen, duration, start]);

  useEffect(() => {
    if (remainingTime === 0 && isActive === false) {
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        onClose();
        onBreakEnd?.();
      }, 2000);
    }
  }, [remainingTime, isActive, onClose, onBreakEnd]);

  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isOpen]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.preventDefault();
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };


  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-99"
      role="dialog"
      aria-modal="true"
      aria-labelledby="break-timer-title"
      onKeyDown={handleKeyDown}
    >
      <div
        ref={modalRef}
        className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-sm w-full mx-4 shadow-xl focus:outline-none"
        tabIndex={-1}
        role="document"
      >
        {showSuccess ? (
          <div className="text-center">
            <div className="text-6xl mb-4" role="img" aria-label="Celebration">🎉</div>
            <h2 className="text-2xl font-bold text-green-600 mb-2">Break Over!</h2>
            <p className="text-gray-600 dark:text-gray-300">Time to get back to work.</p>
          </div>
        ) : (
          <>
            <h2 id="break-timer-title" className="text-xl font-semibold text-center mb-4 text-gray-800 dark:text-white">
              Break Time
            </h2>
            <div className="text-center mb-4">
              <div
                className="text-4xl font-mono font-bold text-gray-800 dark:text-white mb-2"
                aria-live="polite"
                aria-atomic="true"
              >
                {formatTime(remainingTime)}
              </div>
            </div>
            <p className="text-center text-gray-600 dark:text-gray-300">
              Take a break and relax. The timer will close automatically when finished.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default BreakTimerModal;