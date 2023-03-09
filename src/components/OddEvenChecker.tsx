import React, { useState } from "react";

function OddEvenChecker() {
  const [number, setNumber] = useState<number | "">("");

  const checkOddEven = () => {
    if (number === "") {
      alert("Please enter a number.");
    } else if (isNaN(+number)) {
      alert("Please enter a valid number.");
    } else {
      const result = +number % 2 === 0 ? "even" : "odd";
      alert(`The number is ${result}.`);
    }
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Enter a number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={checkOddEven}>Check</button>
    </div>
  );
}

export default OddEvenChecker;
