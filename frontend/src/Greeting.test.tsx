import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Greeting } from "./Greeting";

const user = userEvent.setup();

it("should hide greet button after click", async () => {
  const onGreetBack = vi.fn();

  render(<Greeting names={[]} onGreetBack={onGreetBack} />);

  const greetBackButton = screen.getByRole("button", { name: /Greet back/i });
  await user.click(greetBackButton);

  expect(greetBackButton).not.toBeVisible();
  expect(onGreetBack).toHaveBeenCalledTimes(1);
});
