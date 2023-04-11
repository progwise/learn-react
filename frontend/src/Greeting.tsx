export interface GreetingProps {
  names: string[];
}

export const Greeting = (props: GreetingProps) => {
  return (
    <div>
      <h1>Hello to:</h1>
      <ul>
        {props.names.map((name) => {
          return <li key={name}>{name}</li>;
        })}
      </ul>
    </div>
  );
};
