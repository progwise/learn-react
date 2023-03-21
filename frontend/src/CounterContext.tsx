import { createContext, ReactNode, useContext, useState } from "react";

interface CounterContext {
  value: number;
  setValue: (newValue: number) => void;
}

const CounterContext = createContext<CounterContext>({
  value: 0,
  setValue: () => {},
});

interface CounterProviderProps {
  children?: ReactNode;
  start: number;
  min: number;
  max: number;
}

export const CounterProvider = ({
  children,
  start,
  min,
  max,
}: CounterProviderProps) => {
  const [value, setValue] = useState(start);

  const setValueWithValidation = (newValue: number) => {
    if (newValue >= min && newValue <= max) {
      setValue(newValue);
    }
  };

  return (
    <CounterContext.Provider
      value={{ value, setValue: setValueWithValidation }}
    >
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => useContext(CounterContext);
