import { AboutMe } from "./AboutMe";
import "./App.css";
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
    </div>
  );
};

export default App;
