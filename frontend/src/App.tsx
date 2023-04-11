import "./App.css";
import { Greeting } from "./Greeting";
import { AboutMe } from "./AboutMe";

function App() {
  return (
    <div>
      App
      <Greeting name="BITBW" />
      <AboutMe name="Pascal" age={27} />
    </div>
  );
}

export default App;
