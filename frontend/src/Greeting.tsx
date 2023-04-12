import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { useBlink } from "./useBlink";

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

  const handleMouseEnter = () => {
    console.log("button was entered");
  };

  const showGreetingButton = !hasGreetedBack;

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
    </div>
  );
};
