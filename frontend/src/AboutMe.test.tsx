import { AboutMe } from "./AboutMe";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("AboutMe", () => {
  it("should display the name of the person", () => {
    render(
      <AboutMe name="Max" age={100} hobbies={[]}>
        ...
      </AboutMe>
    );

    const heading = screen.getByRole("heading");
    expect(heading).toHaveTextContent("Hello, I'm Max and I am 100 years old.");
  });

  test("1 + 2 should be 3", () => {
    const result = 1 + 2;
    expect(result).toBe(3);
  });

  it("should return 3 for 1 + 2", () => {
    const result = 1 + 2;
    expect(result).toBe(3);
  });
});
