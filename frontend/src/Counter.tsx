import { useContext, useState } from "react";
import { CounterButtons } from "./CounterButtons";
import { useCounter } from "./CounterContext";

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
  const { value, setValue } = useCounter();

  return (
    <div>
      <span data-testid="counter-value">{value}</span>

      <CounterButtons
        onIncrement={() => {
          const newValue = value + steps;

          if (newValue <= max) {
            setValue(value + steps);
          }
        }}
        onDecrement={() => {
          const newValue = value - steps;

          if (newValue >= min) {
            setValue(newValue);
          }
        }}
      />
    </div>
  );
};
