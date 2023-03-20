import { AboutMe } from "./AboutMe";
import "./App.css";
import { Counter } from "./Counter";
import { Greeting } from "./Greeting";

const COMPANY_NAME = "Cosmos Direct";

const App = () => {
  return (
    <div>
      App
      <Greeting name="Cosmos Direct">
        <span>🎉</span>
      </Greeting>
      <AboutMe
        name="Pascal"
        techStack={["TypeScript", "React"]}
        hobbies={["Sailing", "Coding"]}
      />
      <Counter steps={10} start={100} min={100} max={150} />
    </div>
  );
};

export default App;
