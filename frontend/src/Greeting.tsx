import { useState, useEffect, useMemo, useCallback } from "react";
import { Button } from "@mui/material";
import { useBlink } from "./useBlink";
import { AboutMe } from "./AboutMe";

export interface GreetingProps {
  names: string[];
  onGreetBack: () => void;
}

export const Greeting = (props: GreetingProps) => {
  const [hasGreetedBack, setHasGreetedBack] = useState(false);
  const blink = useBlink({ duration: 1500, startValue: true });

  useEffect(() => {
    if (hasGreetedBack) {
      document.title = "";
    } else {
      document.title = "HELLO!!!";
    }
  }, [hasGreetedBack]);

  const handleClick = () => {
    props.onGreetBack();
    setHasGreetedBack(true);
  };

  const handleMouseEnter = useCallback(() => {
    console.log("button was entered ");
  }, []);

  const showGreetingButton = !hasGreetedBack;

  const hobbies = useMemo(() => ["Coding", "React"], []);
  const numberOfHobbies = useMemo(() => {
    console.log("calculate number of hobbies");
    return hobbies.length;
  }, [hobbies]);

  return (
    <div>
      <h1>Hello to:</h1>
      <ul>
        {props.names.map((name) => {
          return <li key={name}>{name}</li>;
        })}
      </ul>

      {showGreetingButton && (
        <Button
          variant="outlined"
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
        >
          Greet back
        </Button>
      )}
      {false}
      {undefined}
      {null}
      {true}
      <span style={{ backgroundColor: blink ? "yellow" : "white" }}>
        {hasGreetedBack ? "Has greeted back" : "has not greeted back"}
      </span>
      <AboutMe name="Pascal" age={27} hobbies={hobbies}>
        ...
      </AboutMe>
    </div>
  );
};
