import { useState, useEffect, useCallback } from 'react';

interface UseCountdownReturn {
  remainingTime: number;
  isActive: boolean;
  start: (duration: number) => void;
  stop: () => void;
  reset: () => void;
}

export const useCountdown = (initialDuration: number = 600): UseCountdownReturn => {
  const [remainingTime, setRemainingTime] = useState(initialDuration);
  const [isActive, setIsActive] = useState(false);

  const start = useCallback((duration: number) => {
    setRemainingTime(duration);
    setIsActive(true);
  }, []);

  const stop = useCallback(() => {
    setIsActive(false);
  }, []);

  const reset = useCallback(() => {
    setIsActive(false);
    setRemainingTime(initialDuration);
  }, [initialDuration]);

  useEffect(() => {
    let interval: number | null = null;

    if (isActive && remainingTime > 0) {
      interval = window.setInterval(() => {
        setRemainingTime((prev) => {
          if (prev <= 1) {
            setIsActive(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, remainingTime]);

  return { remainingTime, isActive, start, stop, reset };
};