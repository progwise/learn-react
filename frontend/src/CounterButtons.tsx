interface CounterButtonsProps {
  onIncrement: () => void;
  onDecrement: () => void;
}

export const CounterButtons = ({
  onIncrement,
  onDecrement,
}: CounterButtonsProps) => {
  return (
    <div>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
    </div>
  );
};
