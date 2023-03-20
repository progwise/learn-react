import { ReactNode } from "react";

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
  return (
    <div>
      <h1>Hello {name}!</h1>
      <p>Welcome to my App</p>
      {children}
      <br />
      {hasGreetedBack === false && (
        <button onClick={onGreet}>Greet back</button>
      )}
      <hr />
    </div>
  );
};
