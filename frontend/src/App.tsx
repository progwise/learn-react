import { AboutMe } from "./AboutMe";
import "./App.css";
import { Greeting } from "./Greeting";

const COMPANY_NAME = "Cosmos Direct";

const App = () => {
  return (
    <div>
      App
      <Greeting name="Cosmos Direct" />
      <Greeting />
      <AboutMe />
    </div>
  );
};

export default App;
