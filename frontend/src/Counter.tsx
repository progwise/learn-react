import { useState } from "react";

interface CounterProps {
  steps?: number;
  start?: number;
  min?: number;
  max?: number;
}

export const Counter = ({
  steps = 1,
  start = 0,
  min = -Infinity,
  max = Infinity,
}: CounterProps) => {
  const [value, setValue] = useState(start);

  return (
    <div>
      {value}

      <div>
        <button
          onClick={() => {
            const newValue = value + steps;

            if (newValue <= max) {
              setValue(value + steps);
            }
          }}
        >
          increment
        </button>
        <button
          onClick={() => {
            const newValue = value - steps;

            if (newValue >= min) {
              setValue(newValue);
            }
          }}
        >
          decrement
        </button>
      </div>
    </div>
  );
};
