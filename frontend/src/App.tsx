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
      <Greeting>Children</Greeting>
      <AboutMe name="Pascal" techStack={["TypeScript", "React"]} />
    </div>
  );
};

export default App;
