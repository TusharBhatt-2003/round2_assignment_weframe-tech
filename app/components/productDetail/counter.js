import React from "react";

const Counter = () => {
  const [count, setCount] = React.useState(1);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="border select-none rounded-lg w-[40%] lg:w-[30%] flex py-3 lg:p-3 justify-around gap-2 lg:gap-5 items-center">
      <img src="minus.svg" alt="Decrease" onClick={decrement} />
      {count}
      <img src="plus.svg" alt="Increase" onClick={increment} />
    </div>
  );
};

export default Counter;