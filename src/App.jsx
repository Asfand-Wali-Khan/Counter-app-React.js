import { useState } from "react";
import "./App.css";
function Counter_app() {
  let [counter, setCount] = useState(0);
  let [step, setStep] = useState(0);
  let Increment = () => {
    setCount(counter + step);
  };
  let Decrement = () => {
    setCount(counter - step);
  };
  let Reset = () => {
    setCount(0);
    setStep(0);
  };
  return (
    <>
      <div className="container">
        <h1>Counter App</h1>
        <h3>
          Count value :<span>{counter}</span>
        </h3>
        <p>
          Step:
          <input
            type="Number"
            placeholder="Enter a Number"
            value={step}
            onChange={(e) => {
              setStep(Number(e.target.value));
            }}
          />
        </p>
        <div class="buttons">
          <button onClick={Increment} disabled={counter >= 100}>
            Increment
          </button>
          <button onClick={Decrement} disabled={counter <= 0}>
            Decrement
          </button>
          <button onClick={Reset}>Reset</button>
        </div>
      </div>
    </>
  );
}
export default Counter_app;
