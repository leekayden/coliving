import React, { useState } from "react";
import TextField from '@mui/material/TextField';

function QuadEqSolver() {
  const [a, setA] = useState<number | "">("");
  const [b, setB] = useState<number | "">("");
  const [c, setC] = useState<number | "">("");
  const [result, setResult] = useState("");

  const solveEquation = () => {
    if (a === "" || b === "" || c === "") {
      setResult("Please enter valid values for a, b, and c.");
      return;
    }

    const discriminant = b * b - 4 * +a * +c;

    if (discriminant < 0) {
      setResult("No real solutions.");
    } else if (discriminant === 0) {
      const x = -b / (2 * +a);
      const equation = `${a}x^2${b < 0 ? '' : '+'}${b.toString()}x${c < 0 ? '' : '+'}${c.toString()}`;
      setResult(`x = (${x} + ${x}) = ${equation.replace('x', `(${x}+${x})`)}`);
    } else {
      const x1 = (-b + Math.sqrt(discriminant)) / (2 * +a);
      const x2 = (-b - Math.sqrt(discriminant)) / (2 * +a);
      const equation = `${a}x^2${b < 0 ? '' : '+'}${b.toString()}x${c < 0 ? '' : '+'}${c.toString()}`;
      setResult(`x = ${x1} or x = ${x2}\n${equation}`);
    }
  };  

  return (
    <div>
      <p>Enter in the form of ax^2 + bx + c</p>
      <TextField id="outlined-basic-a" label="a" variant="outlined" value={a} onChange={(e) => setA(e.target.value)} />
      <TextField id="outlined-basic-b" label="b" variant="outlined" value={b} onChange={(e) => setB(e.target.value)} />
      <TextField id="outlined-basic-c" label="c" variant="outlined" value={c} onChange={(e) => setC(e.target.value)} />
      <button onClick={solveEquation}>Solve</button>
      <p>{result}</p>
    </div>
  );
}

export default QuadEqSolver;
