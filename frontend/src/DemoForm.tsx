import { useRef } from "react";
import styled from "@emotion/styled";
import classes from "./DemoForm.module.css";

// CSS in JS
const StyledButton = styled.button<{ size?: "normal" | "big" }>`
  border: none;
  background-color: grey;
  padding: 10px;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  font-size: ${({ size }) => (size === "big" ? "20px" : "small")};
`;

const StyledButton2 = styled(StyledButton)`
  border: 4px solid darkblue;
`;

export const DemoForm = () => {
  const titleRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!titleRef.current) {
      return;
    }

    const title = titleRef.current.value;

    console.log(title);

    titleRef.current.value = "";
  };

  console.log("titleRef", titleRef);

  return (
    <>
      <h1>Demo Form</h1>
      <form onSubmit={handleSubmit}>
        <input name="title" ref={titleRef} />{" "}
        <button type="submit" className={classes.button}>
          Create
        </button>
        <StyledButton type="reset" size="normal">
          Reset
        </StyledButton>
        <StyledButton2>hello</StyledButton2>
      </form>
    </>
  );
};
