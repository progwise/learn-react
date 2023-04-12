import { useState } from "react";

interface UseCounterOptions {
  start?: number;
}

export const useCounter = (
  options?: UseCounterOptions
): [number, () => void, () => void] => {
  const [count, setCount] = useState(options?.start ?? 0);

  const increment = () => {
    setCount(count + 1);
    // setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return [count, increment, decrement];
};
