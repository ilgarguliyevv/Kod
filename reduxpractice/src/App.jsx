import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  decrementByAmount,
  reset,
} from "./redux/slices/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const [inpValue, setInpValue] = useState("");
  return (
    <>
      <h1>REDUX</h1>
      <div>
        <button
          onClick={() => {
            dispatch(incrementByAmount(inpValue));
          }}
        >
          Inc Amount
        </button>
        <input
          type="text"
          placeholder="ededi daxil edin:"
          onChange={(e) => {
            setInpValue(e.target.value);
          }}
        />
        <button
          onClick={() => {
            dispatch(decrementByAmount(inpValue));
          }}
        >
          Dec Amount
        </button>

        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
        <button
          onClick={() => {
            dispatch(reset());
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
}

export default App;
