import { AboutMe } from "./AboutMe";
import "./App.css";
import { Greeting } from "./Greeting";

const App = () => {
  return (
    <div>
      App <Greeting />
      <AboutMe />
    </div>
  );
};

export default App;
