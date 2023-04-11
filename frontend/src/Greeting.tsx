export interface GreetingProps {
  names: string[];
  onGreetBack: () => void;
}

export const Greeting = (props: GreetingProps) => {
  const handleClick = () => {
    props.onGreetBack();
  };

  const handleMouseEnter = () => {
    console.log("button was entered");
  };

  return (
    <div>
      <h1>Hello to:</h1>
      <ul>
        {props.names.map((name) => {
          return <li key={name}>{name}</li>;
        })}
      </ul>
      <button onClick={handleClick} onMouseEnter={handleMouseEnter}>
        Greet back
      </button>
    </div>
  );
};
