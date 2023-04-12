import "./App.css";
import { Greeting } from "./Greeting";
import { Counter } from "./Counter";

function App() {
  const handleGreetBack = () => {
    alert("button was clicked ");
  };

  return (
    <>
      App
      <Greeting names={["BITBW", "World"]} onGreetBack={handleGreetBack} />
      <Counter start={10} min={0} max={20} />
      <Counter start={10} min={0} max={20} />
      <Counter start={10} min={0} max={20} />
    </>
  );
}

export default App;
