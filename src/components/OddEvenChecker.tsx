import React, { useState } from "react";

function OddEvenChecker() {
  const [number, setNumber] = useState<number | "">("");

  const checkOddEven = () => {
    if (number === "") {
      alert("Please enter a number.");
    } else if (isNaN(+number)) {
      alert("Please enter a valid number.");
    } else if (number === 0) {
      alert("The number is even. P.S. the identity of 0 is under debate, but for now, it's even.")
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
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <button onClick={checkOddEven}>Check</button>
    </div>
  );
}

export default OddEvenChecker;
