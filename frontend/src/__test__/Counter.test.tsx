import { render, screen } from "@testing-library/react";
import { ReactNode } from "react";
import { Counter } from "../Counter";
import { CounterProvider } from "../CounterContext";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

const user = userEvent.setup();

const wrapper = ({ children }: { children: ReactNode }) => (
  <CounterProvider start={0} min={0} max={10}>
    {children}
  </CounterProvider>
);

describe("Counter", () => {
  it("should increment and decrement the counter", async () => {
    render(<Counter />, { wrapper });

    const counterValue = screen.getByTestId("counter-value");
    expect(counterValue).toHaveTextContent("0");

    const incrementButton = screen.getByRole("button", { name: "Increment" });
    await user.click(incrementButton);
    expect(counterValue).toHaveTextContent("1");

    const decrementButton = screen.getByRole("button", { name: "Decrement" });
    await user.click(decrementButton);
    expect(counterValue).toHaveTextContent("0");
  });

  it("should stop at max value", async () => {
    render(<Counter />, { wrapper });

    const counterValue = screen.getByTestId("counter-value");
    const incrementButton = screen.getByRole("button", { name: "Increment" });

    for (let i = 0; i < 11; i++) {
      await user.click(incrementButton);
    }

    expect(counterValue).toHaveTextContent("10");
  });
});
