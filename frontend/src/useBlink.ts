import { useEffect, useState } from "react";

interface UseBlinkOptions {
  duration?: number;
  startValue?: boolean;
}

export const useBlink = (options?: UseBlinkOptions): boolean => {
  const [blink, setBlink] = useState(options?.startValue ?? false);

  useEffect(() => {
    const interval = setInterval(
      () => setBlink((currentBlink) => !currentBlink),
      options?.duration ?? 1000
    );

    return () => {
      clearInterval(interval);
    };
  }, []);

  return blink;
};
