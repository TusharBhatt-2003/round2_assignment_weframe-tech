import { motion } from "framer-motion";
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
    <div
      id="counter"
      aria-label="Counter"
      className="border select-none rounded-lg lg:w-[30%] flex  justify-between items-center"
    >
      <motion.img
        className="p-4"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.7 }}
        transition={{
          type: "spring",
          stiffness: 600,
          damping: 10,
        }}
        role="button"
        aria-label="Minus"
        src="minus.svg"
        alt="Decrease"
        onClick={decrement}
      />
      <p>{count}</p>
      <motion.img
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.7 }}
        transition={{
          type: "spring",
          stiffness: 600,
          damping: 10,
        }}
        className="p-4"
        role="button"
        aria-label="Add"
        src="plus.svg"
        alt="Increase"
        onClick={increment}
      />
    </div>
  );
};

export default Counter;
