import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Counter } from "./Counter";
import { CounterContextProvider } from "./CounterContext";
import { ReactNode } from "react";

const user = userEvent.setup();

const wrapper = (props: { children: ReactNode }) => (
  <CounterContextProvider start={5}>{props.children}</CounterContextProvider>
);

it("should increase value when clicking on plus button", async () => {
  render(<Counter min={5} max={10} start={0} />, { wrapper });

  const counterValue = screen.getByTestId("counter-value");
  const incrementButton = screen.getByTestId("increment-button");
  const decrementButton = screen.getByTestId("decrement-button");

  expect(counterValue).toHaveTextContent("5");
  expect(decrementButton).toBeDisabled();

  await user.click(incrementButton);
  expect(counterValue).toHaveTextContent("6");
  expect(decrementButton).toBeEnabled();

  await user.click(decrementButton);
  expect(counterValue).toHaveTextContent("5");
});
