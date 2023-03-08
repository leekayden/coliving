import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

const QuadraticEquationSolver = () => {
  const [a, setA] = useState<number | "">("");
  const [b, setB] = useState<number | "">("");
  const [c, setC] = useState<number | "">("");
  const [result, setResult] = useState<string>("");

  const solveEquation = () => {
    const discriminant = Number(b) * Number(b) - 4 * Number(a) * Number(c);
    if (discriminant < 0) {
      setResult("No real solutions.");
    } else if (discriminant === 0) {
      const x = -b / (2 * +a);
      const equation = `${a}x^2${b < 0 ? "" : "+"}${b}x${c < 0 ? "" : "+"}${c}`;
      setResult(`x = (${x} + ${x}) = ${equation.replace("x", `(${x}+${x})`)}`);
    } else {
      const x1 = (-b + Math.sqrt(discriminant)) / (2 * +a);
      const x2 = (-b - Math.sqrt(discriminant)) / (2 * +a);
      const gcd = (a: number, b: number): number => {
        if (!b) {
          return a;
        }
        return gcd(b, a % b);
      };
      const gcdValue = gcd(x1, +a);
      setResult(
        `x1 = ${x1 * +a / gcdValue}/${+a / gcdValue}, x2 = ${x2}`
      );
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
};

export default QuadraticEquationSolver;
