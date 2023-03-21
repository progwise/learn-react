import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { CounterButtons } from "../CounterButtons";

const user = userEvent.setup();

describe("CounterButtons", () => {
  it("should render two buttons", () => {
    render(
      <CounterButtons onIncrement={console.log} onDecrement={console.log} />
    );

    const allButtons = screen.getAllByRole("button");

    expect(allButtons).toHaveLength(2);
    expect(allButtons.at(0)).toHaveTextContent("Increment");
    expect(allButtons.at(1)).toHaveTextContent("Decrement");
  });

  it("should call onIncrement and onDecrement when clicking the buttons", async () => {
    const onIncrement = vi.fn();
    const onDecrement = vi.fn();
    render(
      <CounterButtons onIncrement={onIncrement} onDecrement={onDecrement} />
    );

    const incrementButton = screen.getByRole("button", { name: "Increment" });
    await user.click(incrementButton);
    expect(onIncrement).toHaveBeenCalledTimes(1);

    const decrementButton = screen.getByRole("button", { name: "Decrement" });
    await user.click(decrementButton);
    expect(onDecrement).toHaveBeenCalledTimes(1);
  });
});
