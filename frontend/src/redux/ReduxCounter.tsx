import { useSelector } from "react-redux";
import { CounterButtons } from "../CounterButtons";
import { decrement, increment } from "./counterSlice";
import { useAppDispatch, useAppSelector } from "./stores";

export const ReduxCounter = () => {
  const count = useAppSelector((store) => store.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      Redux Value is {count}
      <CounterButtons
        onIncrement={() => dispatch(increment(1))}
        onDecrement={() => dispatch(decrement(1))}
      />
    </div>
  );
};
