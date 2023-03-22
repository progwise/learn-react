import { Theme, ThemeProvider } from "@emotion/react";
import { useState } from "react";
import { AboutMe } from "./AboutMe";
import "./App.css";
import { Counter } from "./Counter";
import { CounterProvider } from "./CounterContext";
import { ErrorBoundary } from "./ErrorBoundary";
import { Greeting } from "./Greeting";
import { useTodo } from "./TodoApp/useTodo";

const COMPANY_NAME = "Cosmos Direct";

const theme: Theme = {
  fontSizes: {
    normal: "15px",
    small: "10px",
    big: "20px",
  },
};

const App = () => {
  const [hasGreetedBack, setHasGreetedBack] = useState(false);
  const [todos] = useTodo();

  const handleGreet = () => setHasGreetedBack(true);

  return (
    <ThemeProvider theme={theme}>
      <CounterProvider start={100} min={100} max={150}>
        App
        <ErrorBoundary fallback={<div>Error in Greeting</div>}>
          <Greeting
            name="Cosmos Direct"
            hasGreetedBack={hasGreetedBack}
            onGreet={handleGreet}
          >
            <span>🎉</span>
          </Greeting>
        </ErrorBoundary>
        <AboutMe
          name="Pascal"
          techStack={["TypeScript", "React"]}
          hobbies={["Sailing", "Coding"]}
        />
        <Counter steps={10} />
        <Counter steps={10} />
        <CounterProvider start={110} min={100} max={150}>
          <Counter steps={10} />
          <Counter steps={10} />
        </CounterProvider>
        Number of Todos: {todos.length}
      </CounterProvider>
    </ThemeProvider>
  );
};

export default App;
