import "./App.css";
import { Greeting } from "./Greeting";
import { AboutMe } from "./AboutMe";
import { Counter } from "./Counter";

function App() {
  const handleGreetBack = () => {
    alert("button was clicked ");
  };

  return (
    <div>
      App
      <Greeting names={["BITBW", "World"]} onGreetBack={handleGreetBack} />
      <AboutMe name="Pascal" age={27} hobbies={["Sailing", "Coding"]}>
        Code-Stack:
        <ul>
          <li>TypeScript</li>
          <li>React</li>
        </ul>
      </AboutMe>
      <Counter start={10} min={0} max={20} />
    </div>
  );
}

export default App;
