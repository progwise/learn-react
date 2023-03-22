import { ReactNode, useEffect, useState } from "react";

interface GreetingProps {
  name?: string;
  children: ReactNode;
  hasGreetedBack: boolean;
  onGreet: () => void;
}

export const Greeting = ({
  name = "World",
  children,
  hasGreetedBack,
  onGreet,
}: GreetingProps) => {
  console.log("render");
  const [throwError, setThrowError] = useState(false);

  useEffect(() => {
    console.log("Hello from use effect");
    document.title = hasGreetedBack ? "" : "Hello - please greet back";
  }, [hasGreetedBack]);

  if (throwError) {
    throw new Error("some error from Greeting");
  }

  return (
    <div>
      <h1>Hello {name}!</h1>
      <p>Welcome to my App</p>
      {children}
      <br />
      {hasGreetedBack === false && (
        <button onClick={onGreet}>Greet back</button>
      )}
      <button onClick={() => setThrowError(true)}>Throw an Error</button>
      <hr />
    </div>
  );
};
