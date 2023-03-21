import { useState } from "react";
import { AboutMe } from "./AboutMe";
import "./App.css";
import { Counter } from "./Counter";
import { Greeting } from "./Greeting";
import { useTodo } from "./TodoApp/useTodo";

const COMPANY_NAME = "Cosmos Direct";

const App = () => {
  const [hasGreetedBack, setHasGreetedBack] = useState(false);
  const [todos] = useTodo();

  const handleGreet = () => setHasGreetedBack(true);

  return (
    <div>
      App
      <Greeting
        name="Cosmos Direct"
        hasGreetedBack={hasGreetedBack}
        onGreet={handleGreet}
      >
        <span>🎉</span>
      </Greeting>
      <AboutMe
        name="Pascal"
        techStack={["TypeScript", "React"]}
        hobbies={["Sailing", "Coding"]}
      />
      <Counter steps={10} start={100} min={100} max={150} />
      Number of Todos: {todos.length}
    </div>
  );
};

export default App;
