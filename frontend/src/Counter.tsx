import styled from "@emotion/styled";
import { CounterButtons } from "./CounterButtons";
import { useCounter } from "./CounterContext";

const StyledSpan = styled.span<{ value: number }>`
  color: ${({ value }) => (value >= 120 ? "red" : "black")};
`;

interface CounterProps {
  steps?: number;
  start?: number;
  min?: number;
  max?: number;
}

export const Counter = ({
  steps = 1,
  start = 0,
  min = -Infinity,
  max = Infinity,
}: CounterProps) => {
  const { value, dispatch } = useCounter();

  return (
    <div>
      <StyledSpan data-testid="counter-value" value={value}>
        {value}
      </StyledSpan>

      <CounterButtons
        onIncrement={() => dispatch({ type: "increment", steps })}
        onDecrement={() => dispatch({ type: "decrement", steps })}
      />
    </div>
  );
};
