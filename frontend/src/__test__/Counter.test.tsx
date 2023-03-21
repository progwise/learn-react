import { render, screen } from "@testing-library/react";
import { ReactNode } from "react";
import { Counter } from "../Counter";
import { CounterProvider } from "../CounterContext";
import "@testing-library/jest-dom";

const wrapper = ({ children }: { children: ReactNode }) => (
  <CounterProvider start={0} min={0} max={10}>
    {children}
  </CounterProvider>
);

describe("Counter", () => {
  it("should increment and decrement the counter", () => {
    render(<Counter />, { wrapper });

    const counterValue = screen.getByTestId("counter-value");
    expect(counterValue).toHaveTextContent("0");
  });
});
