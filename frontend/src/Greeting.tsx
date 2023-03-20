interface GreetingProps {
  name?: string;
}

export const Greeting = ({ name = "World" }: GreetingProps) => {
  // optional logic

  return (
    <div>
      <h1>Hello {name}!</h1>
      <p>Welcome to my App</p>
    </div>
  );
};
