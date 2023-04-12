import { ReactNode, createContext, useContext, useState } from "react";
import { useCounterState } from "./useCounterState";

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
  const [value, increment, decrement] = useCounterState({ start: props.start });

  return (
    <CounterContext.Provider value={{ value, increment, decrement }}>
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
