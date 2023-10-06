import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store/index";
const Counter = () => {
  const counter = useSelector((state) => {
    return state.counter;
  });

  const toggleCounter = useSelector((state) => state.toggleCounter);

  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrease());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {!toggleCounter && <div className={classes.value}>{counter}</div>}
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
