import "./App.css";
import { Greeting } from "./Greeting";
import { AboutMe } from "./AboutMe";

function App() {
  return (
    <div>
      App
      <Greeting name="BITBW" />
      <AboutMe name="Pascal" age={27}>
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
