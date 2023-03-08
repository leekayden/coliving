import React, { useState } from "react";
import TextField from "@mui/material/TextField";

function QuadEqSolver() {
  const [a, setA] = useState<number | "">("");
  const [b, setB] = useState<number | "">("");
  const [c, setC] = useState<number | "">("");
  const [result, setResult] = useState("");

  const solveEquation = () => {
    const discriminant = Number(b) * Number(b) - 4 * Number(a) * Number(c);
    if (discriminant < 0) {
      setResult("No real solutions.");
    } else if (discriminant === 0) {
      const x = -Number(b) / (2 * Number(a));
      const equation = `${Number(a)}x^2${Number(b) < 0 ? "" : "+"}${Number(
        b
      )}x${Number(c) < 0 ? "" : "+"}${Number(c)}`;
      setResult(`x = (${x} + ${x}) = ${equation.replace("x", `(${x}+${x})`)}`);
    } else {
      const x1 = (-Number(b) + Math.sqrt(discriminant)) / (2 * Number(a));
      const x2 = (-Number(b) - Math.sqrt(discriminant)) / (2 * Number(a));
      const equation = `${Number(a)}x^2${Number(b) < 0 ? "" : "+"}${Number(
        b
      )}x${Number(c) < 0 ? "" : "+"}${Number(c)}`;
      setResult(`x1 = ${x1}, x2 = ${x2} => ${equation}`);
    }
  };

  return (
    <div>
      <p>Enter in the form of ax^2 + bx + c</p>
      <TextField
        id="outlined-basic-a"
        label="a"
        variant="outlined"
        value={a}
        onChange={(e) => setA(e.target.value)}
      />
      <TextField
        id="outlined-basic-b"
        label="b"
        variant="outlined"
        value={b}
        onChange={(e) => setB(e.target.value)}
      />
      <TextField
        id="outlined-basic-c"
        label="c"
        variant="outlined"
        value={c}
        onChange={(e) => setC(e.target.value)}
      />
      <button onClick={solveEquation}>Solve</button>
      <p>{result}</p>
    </div>
  );
}

export default QuadEqSolver;
