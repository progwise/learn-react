import { useState, useEffect } from "react";

export interface GreetingProps {
  names: string[];
  onGreetBack: () => void;
}

export const Greeting = (props: GreetingProps) => {
  const [hasGreetedBack, setHasGreetedBack] = useState(false);
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    if (hasGreetedBack) {
      document.title = "";
    } else {
      document.title = "HELLO!!!";
    }
  }, [hasGreetedBack]);

  useEffect(() => {
    const interval = setInterval(
      () => setBlink((currentBlink) => !currentBlink),
      1000
    );

    return () => {
      clearInterval(interval);
    };
  }, []);

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
        <button onClick={handleClick} onMouseEnter={handleMouseEnter}>
          Greet back
        </button>
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
