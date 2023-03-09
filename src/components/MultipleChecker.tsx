import React, { useState } from "react";

function MultipleChecker() {
  const [number, setNumber] = useState<number | "">("");
  const [multipleOf, setMultipleOf] = useState<number | "">("");

  const checkMultiple = () => {
    if (number === "" || multipleOf === "") {
      alert("Please enter both numbers.");
    } else if (isNaN(+number) || isNaN(+multipleOf)) {
      alert("Please enter valid numbers.");
    } else {
      const isMultiple = +number % +multipleOf === 0;
      const result = isMultiple ? "is" : "is not";
      alert(`${number} ${result} a multiple of ${multipleOf}.`);
    }
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Enter a number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="Enter another number"
        value={multipleOf}
        onChange={(e) => setMultipleOf(Number(e.target.value))}
      />
      <button onClick={checkMultiple}>Check</button>
    </div>
  );
}

export default MultipleChecker;
