import { decrement, increment } from "./redux/features/counter/counterSlice";
import type { RootState } from "./redux/store";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state: RootState) => state.counter);
  const handleIncrement = (amount: number) => {
    dispatch(increment(amount));
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  return (
    <div>
      <h1>learn redux with counter</h1>
      <button onClick={() => handleIncrement(5)}>increment by 5</button>
      <button onClick={() => handleIncrement(1)}>increment</button>
      <div>{count}</div>
      <button onClick={handleDecrement}>decrement</button>
    </div>
  );
}

export default App;
