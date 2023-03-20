import { ReactNode } from "react";

interface GreetingProps {
  name?: string;
  children: ReactNode;
}

export const Greeting = ({ name = "World", children }: GreetingProps) => {
  // optional logic

  return (
    <div>
      <h1>Hello {name}!</h1>
      <p>Welcome to my App</p>
      {children}
    </div>
  );
};
