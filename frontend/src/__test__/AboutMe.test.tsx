import { render, screen, within } from "@testing-library/react";
import { AboutMe } from "../AboutMe";

describe("AboutMe", () => {
  it.each([
    { techStack: ["TypeScript"], hobbies: ["Coding"] },
    {
      techStack: ["TypeScript", "React"],
      hobbies: ["a", "b", "c"],
    },
  ])(
    "should renders the techStack=$techStack and hobbies=$hobbies",
    ({ techStack, hobbies }) => {
      render(
        <AboutMe name="Test User" techStack={techStack} hobbies={hobbies} />
      );

      const lists = screen.getAllByRole("list");
      expect(lists).toHaveLength(2);

      const techStackList = lists[0];
      const hobbyList = lists[1];

      const techStackListItems = within(techStackList).getAllByRole("listitem");
      const hobbyListItems = within(hobbyList).getAllByRole("listitem");

      expect(techStackListItems).toHaveLength(techStack.length);
      expect(hobbyListItems).toHaveLength(hobbies.length);
    }
  );
});
