import React, { useState } from "react";
import TextField from '@mui/material/TextField';

function QuadEqSolver() {
  const [a, setA] = useState<number | "">("");
  const [b, setB] = useState<number | "">("");
  const [c, setC] = useState<number | "">("");
  const [result, setResult] = useState("");

  const solveEquation = () => {
    const numA = parseFloat(a as string);
    const numB = parseFloat(b as string);
    const numC = parseFloat(c as string);

    if (isNaN(numA) || isNaN(numB) || isNaN(numC)) {
      setResult("Please enter valid numbers for all fields.");
      return;
    }

    const discriminant = numB * numB - 4 * numA * numC;
    if (discriminant < 0) {
      setResult("No real solutions.");
    } else if (discriminant === 0) {
      const x = -numB / (2 * numA);
      const equation = `(${numA}x^2${numB < 0 ? '' : '+'}${numB}x${numC < 0 ? '' : '+'}${numC})`;
      setResult(`x = (${x} + ${x}) = ${equation.replace('x', `(${x}+${x})`)}`);
    } else {
      const x1 = (-numB + Math.sqrt(discriminant)) / (2 * numA);
      const x2 = (-numB - Math.sqrt(discriminant)) / (2 * numA);
      const equation = `(${numA}x^2${numB < 0 ? '' : '+'}${numB}x${numC < 0 ? '' : '+'}${numC})`;
      setResult(`x = ${x1} or x = ${x2} = ${equation.replace('x', `(${x1}+${x2})`).replace('x', `${x1}+${x2}`)}`);
    }
  } 

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
