import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(10);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="mt-5">
      <h2>{counter}</h2>
      <div className="actions d-flex justify-content-between w-50 mx-auto">
        <button onClick={increment} className="btn btn-primary">
          Increment
        </button>
        <button onClick={decrement} className="btn btn-dark">
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
