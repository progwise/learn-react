import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";
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
      Aktueller Wert: <span data-testid="counter-value">{value}</span>
      <Button
        variant="outlined"
        onClick={increment}
        disabled={value >= props.max}
        data-testid="increment-button"
      >
        <Add />
      </Button>
      <Button
        variant="outlined"
        onClick={decrement}
        disabled={value <= props.min}
        data-testid="decrement-button"
      >
        <Remove />
      </Button>
    </div>
  );
};
