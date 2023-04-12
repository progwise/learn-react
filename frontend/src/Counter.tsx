import { Add, Remove } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useCounter } from "./CounterContext";

interface CounterProps {
  start: number;
  min: number;
  max: number;
}

export const Counter = (props: CounterProps) => {
  const { value, increment, decrement } = useCounter();

  return (
    <div>
      Aktueller Wert: {value}
      <Button
        variant="outlined"
        onClick={increment}
        disabled={value >= props.max}
      >
        <Add />
      </Button>
      <Button
        variant="outlined"
        onClick={decrement}
        disabled={value <= props.min}
      >
        <Remove />
      </Button>
    </div>
  );
};
