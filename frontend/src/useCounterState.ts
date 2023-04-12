import { useState } from "react";

interface UseCounterStateOptions {
  start?: number;
}

export const useCounterState = (
  options?: UseCounterStateOptions
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
