export interface GreetingProps {
  name: string;
}

export const Greeting = (props: GreetingProps) => {
  return <h1>Hello {props.name}</h1>;
};
