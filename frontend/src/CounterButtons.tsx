import styled from "@emotion/styled";

const StyledButton = styled.button`
  padding: 8px;
  margin: 4px;
  background-color: #67bfff;
  border: 1px solid #004576;
  border-radius: 10px;
  box-shadow: inset 0px -2px 4px 0px #004576;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes.normal};

  :hover {
    box-shadow: inset 0px -2px 4px 0px #363636;
    cursor: pointer;
  }
`;

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
      <StyledButton onClick={onIncrement}>Increment</StyledButton>
      <StyledButton onClick={onDecrement}>Decrement</StyledButton>
    </div>
  );
};
