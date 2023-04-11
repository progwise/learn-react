import "./App.css";
import { Greeting } from "./Greeting";
import { AboutMe } from "./AboutMe";

function App() {
  return (
    <div>
      App
      <Greeting names={["BITBW", "World"]} />
      <AboutMe name="Pascal" age={27} hobbies={["Sailing", "Coding"]}>
        Code-Stack:
        <ul>
          <li>TypeScript</li>
          <li>React</li>
        </ul>
      </AboutMe>
    </div>
  );
}

export default App;
