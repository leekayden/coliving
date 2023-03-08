import React, { useState } from "react";
import TextField from '@mui/material/TextField';

function QuadEqSolver() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [result, setResult] = useState("");

  const solveEquation = () => {
    const discriminant = +b * +b - 4 * +a * +c;
    if (discriminant < 0) {
      setResult("No real solutions.");
    } else if (discriminant === 0) {
      const x = (-b + Math.sqrt(+discriminant)) / (2 * +a);
      setResult(`x = ${x}`);
    } else {
      const x1 = (-b + Math.sqrt(+discriminant)) / (2 * +a);
      const x2 = (-b - Math.sqrt(+discriminant)) / (2 * +a);
      setResult(`x1 = ${x1}, x2 = ${x2}, ${x1 = (-b + Math.sqrt(discriminant)) / (2 * a)}`);
    }
  };

  return (
    <div>
      <p>Enter in the form of ax^2 + bx + c</p>
      <br />
      <TextField id="outlined-basic-a" label="a" variant="outlined" value={a} onChange={(e) => setA(e.target.value)} />
      <TextField id="outlined-basic-b" label="b" variant="outlined" value={b} onChange={(e) => setB(e.target.value)} />
      <TextField id="outlined-basic-c" label="c" variant="outlined" value={c} onChange={(e) => setC(e.target.value)} />
      <button onClick={solveEquation}>Solve</button>
      <p>{result}</p>
    </div>
  );
}

export default QuadEqSolver;
