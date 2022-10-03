import { useState } from 'react';

export default function useClock() {
  const [intervalId, setIntervalId] = useState(0);
  const handleClick = () => {
    if (intervalId !== 0) {
      clearInterval(intervalId);
      setIntervalId(0);
    } else {
      const interval = setInterval(() => {}, 5);
      setIntervalId(interval);
    }
  };

  return {
    handleClick
  };
}
