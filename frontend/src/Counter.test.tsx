import { render, screen } from "@testing-library/react";
import { Counter } from "./Counter";
import { CounterContextProvider } from "./CounterContext";
import { ReactNode } from "react";

const wrapper = (props: { children: ReactNode }) => (
  <CounterContextProvider start={5}>{props.children}</CounterContextProvider>
);

it("should increase value when clicking on plus button", () => {
  render(<Counter min={0} max={10} start={0} />, { wrapper });

  // screen.getByRole("button", { name: "plus" });
  const counterValue = screen.getByTestId("counter-value");
  const incrementButton = screen.getByTestId("increment-button");

  expect(counterValue).toHaveTextContent("5");
});
