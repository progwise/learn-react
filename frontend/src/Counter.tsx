import { Add, Remove } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useCounter } from "./useCounter";

interface CounterProps {
  start: number;
  min: number;
  max: number;
}

export const Counter = (props: CounterProps) => {
  const [count, increment, decrement] = useCounter({ start: props.start });

  return (
    <div>
      Aktueller Wert: {count}
      <Button
        variant="outlined"
        onClick={increment}
        disabled={count >= props.max}
      >
        <Add />
      </Button>
      <Button
        variant="outlined"
        onClick={decrement}
        disabled={count <= props.min}
      >
        <Remove />
      </Button>
    </div>
  );
};
