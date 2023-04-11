import { Add, Remove } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useState } from "react";

interface CounterProps {
  start: number;
  min: number;
  max: number;
}

export const Counter = (props: CounterProps) => {
  const [count, setCount] = useState(props.start);

  const handleIncreaseClick = () => {
    setCount(count + 1);
    // setCount((prevCount) => prevCount + 1);
  };

  const handleDecreaseClick = () => {
    setCount(count - 1);
  };

  return (
    <div>
      Aktueller Wert: {count}
      <Button
        variant="outlined"
        onClick={handleIncreaseClick}
        disabled={count >= props.max}
      >
        <Add />
      </Button>
      <Button
        variant="outlined"
        onClick={handleDecreaseClick}
        disabled={count <= props.min}
      >
        <Remove />
      </Button>
    </div>
  );
};
