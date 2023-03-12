import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Superscript from "./Superscript";

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
      setResult(`x1 = ${x1}, x2 = ${x2}, Factored: ${a}(x - ${x1})(x - ${x2})`);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <Typography variant="body1">
          Enter in the form of <Superscript text="ax" superscript="2" /> + bx +
          c
        </Typography>
        <br />
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
        <Button onClick={solveEquation} variant="contained">
          Solve
        </Button>
        <Typography variant="body1">
          {isNaN(+result) ? "Not a number!" : result}
        </Typography>
      </div>
    </div>
  );
}

export default QuadEqSolver;
