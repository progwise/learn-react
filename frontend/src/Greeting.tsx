import { ReactNode, useState } from "react";

interface GreetingProps {
  name?: string;
  children: ReactNode;
}

export const Greeting = ({ name = "World", children }: GreetingProps) => {
  const [hasGreetedBack, setHasGreetedBack] = useState(false);
  // optional logic

  console.log({ hasGreetedBack });

  return (
    <div>
      <h1>Hello {name}!</h1>
      <p>Welcome to my App</p>
      {children}
      <br />
      {hasGreetedBack === false && (
        <button onClick={() => setHasGreetedBack(true)}>Greet back</button>
      )}
      <hr />
    </div>
  );
};
