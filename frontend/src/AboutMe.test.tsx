import { AboutMe } from "./AboutMe";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("AboutMe", () => {
  it.each([{ name: "Max" }, { name: "Mäxchen" }])(
    "should display the name $name of the person",
    ({ name }) => {
      render(
        <AboutMe name={name} age={100} hobbies={[]}>
          ...
        </AboutMe>
      );

      const heading = screen.getByRole("heading");
      expect(heading).toHaveTextContent(new RegExp(name));
    }
  );

  it("should renders all hobbies", () => {
    render(
      <AboutMe name="" age={0} hobbies={["Coding", "Cooking"]}>
        ...
      </AboutMe>
    );

    screen.debug();

    const listItems = screen.getAllByRole("listitem");

    expect(listItems).toHaveLength(2);
    expect(listItems[0]).toHaveTextContent("Coding");
    expect(listItems[1]).toHaveTextContent("Cooking");
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
