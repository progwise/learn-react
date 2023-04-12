import { ReactNode, createContext, useContext, useState } from "react";

/**
 * Dieses Interface beschreibt, wie die Werte im Context aussehen
 */
interface CounterContext {
  value: number;
  increment: () => void;
  decrement: () => void;
}

/**
 * Der eigentliche Context.
 * Mit diesem kann der Provider gebaut werden: `<CounterContext.Provider>`
 * Wird auch zum Auslesen verwendet: `useContext(CounterContext)`
 */
const CounterContext = createContext<CounterContext>({
  value: 0,
  increment: () => {
    throw new Error("Provider is missing");
  },
  decrement: () => {
    throw new Error("Provider is missing");
  },
});

/**
 * Props Definition für die CounterContextProvider Komponente
 */
interface CounterContextProviderProps {
  children: ReactNode;
  start?: number;
}

/**
 * Der Wrapper, der den `CounterContext.Provider` setzt.
 * Dieser sollte möglichst weit oben im Tree verwendet werden.
 */
export const CounterContextProvider = (props: CounterContextProviderProps) => {
  const [count, setCount] = useState(props.start ?? 0);

  const increment = () => {
    setCount(count + 1);
    // setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <CounterContext.Provider value={{ value: count, increment, decrement }}>
      {props.children}
    </CounterContext.Provider>
  );
};

/**
 * Ein eigener Hook, um den aktuellen Wert aus dem Context zu lesen.
 * Alternativ kann stattdessen auch direkt `useContext` verwendet werden.
 */
export const useCounter = () => {
  return useContext(CounterContext);
};
