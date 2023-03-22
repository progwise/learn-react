import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useReducer,
  useState,
} from "react";

interface CounterContext {
  value: number;
  dispatch: React.Dispatch<CounterAction>;
}

const CounterContext = createContext<CounterContext>({
  value: 0,
  dispatch: () => {},
});

interface CounterProviderProps {
  children?: ReactNode;
  start: number;
  min: number;
  max: number;
}

interface CounterAction {
  type: "increment" | "decrement";
  steps: number;
}

export const CounterProvider = ({
  children,
  start,
  min,
  max,
}: CounterProviderProps) => {
  const counterReducer = useCallback(
    (state: number, action: CounterAction): number => {
      const newState =
        state + (action.type === "increment" ? action.steps : -action.steps);

      if (newState >= min && newState <= max) {
        return newState;
      }

      return state;
    },
    [min, max]
  );

  const [value, dispatch] = useReducer(counterReducer, start);

  return (
    <CounterContext.Provider value={{ value, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => useContext(CounterContext);
