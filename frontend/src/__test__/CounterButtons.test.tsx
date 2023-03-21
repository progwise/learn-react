import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { CounterButtons } from "../CounterButtons";

describe("CounterButtons", () => {
  it("should render two buttons", () => {
    render(
      <CounterButtons onIncrement={console.log} onDecrement={console.log} />
    );

    const allButtons = screen.getAllByRole("button");

    expect(allButtons).toHaveLength(2);
    expect(allButtons.at(0)).toHaveTextContent("Increment");
    expect(allButtons.at(1)).toHaveTextContent("Decrement");

    // console.log(increment);

    // screen.debug();
    // screen.logTestingPlaygroundURL();
  });
});
