import React, { useState } from "react";
import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Box,
  Button,
} from "@mui/material";

interface Equation {
  a: number;
  b: number;
  c: number;
}

const SimultaneousEquationSolver: React.FC = () => {
  const [equation1, setEquation1] = useState<Equation>({ a: 0, b: 0, c: 0 });
  const [equation2, setEquation2] = useState<Equation>({ a: 0, b: 0, c: 0 });
  const [method, setMethod] = useState<"elimination" | "substitution">(
    "elimination"
  );
  const [solution, setSolution] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    equationIndex: number,
    coeffName: keyof Equation
  ) => {
    const value = parseFloat(e.target.value);
    if (isNaN(value)) return;
    if (equationIndex === 0) {
      setEquation1({ ...equation1, [coeffName]: value });
    } else {
      setEquation2({ ...equation2, [coeffName]: value });
    }
  };

  const solveEquations = () => {
    let solutionText = "";
    let x = 0;
    let y = 0;

    if (method === "elimination") {
      const coefficientRatio = equation1.a / equation2.a;
      const elimCoeff = coefficientRatio * equation2.b;
      const newEquation2 = { a: equation2.a, b: equation2.b, c: equation2.c };
      newEquation2.b = newEquation2.b * coefficientRatio;
      newEquation2.c = newEquation2.c * coefficientRatio;

      const elimEquation = { a: equation1.a, b: equation1.b, c: equation1.c };
      elimEquation.b = elimEquation.b - newEquation2.b;
      elimEquation.c = elimEquation.c - newEquation2.c;

      y = elimEquation.c / elimEquation.b;
      x = (equation1.c - equation1.b * y) / equation1.a;
    } else {
      x =
        (equation1.c - equation1.b * (equation2.c / equation2.b)) /
        (equation1.a - equation1.b * (equation2.a / equation2.b));
      y = (equation2.c - equation2.a * x) / equation2.b;
    }

    solutionText = `x = ${x}, y = ${y}`;

    setSolution(solutionText);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <h2>Simultaneous Equation Solver</h2>
      <Box display="flex" justifyContent="center" mb={2}>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel>Method</InputLabel>
          <Select
            value={method}
            onChange={(e) =>
              setMethod(e.target.value as "elimination" | "substitution")
            }
          >
            <MenuItem value="elimination">Elimination</MenuItem>
            <MenuItem value="substitution">Substitution</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box display="flex" justifyContent="space-around" mb={2} width="100%">
        <Box>
          <TextField
            label="Equation 1 - Coefficient of x"
            type="number"
            variant="outlined"
            value={equation1.a}
            onChange={(e) => handleInputChange(e, 0, "a")}
          />
          <TextField
            label="Equation 1 - Coefficient of y"
            type="number"
            variant="outlined"
            value={equation1.b}
            onChange={(e) => handleInputChange(e, 0, "b")}
          />
          <TextField
            label="Equation 1 - Constant"
            type="number"
            variant="outlined"
            value={equation1.c}
            onChange={(e) => handleInputChange(e, 0, "c")}
          />
        </Box>
        <Box>
          <TextField
            label="Equation 2 - Coefficient of x"
            type="number"
            variant="outlined"
            value={equation2.a}
            onChange={(e) => handleInputChange(e, 1, "a")}
          />
          <TextField
            label="Equation 2 - Coefficient of y"
            type="number"
            variant="outlined"
            value={equation2.b}
            onChange={(e) => handleInputChange(e, 1, "b")}
          />
          <TextField
            label="Equation 2 - Constant"
            type="number"
            variant="outlined"
            value={equation2.c}
            onChange={(e) => handleInputChange(e, 1, "c")}
          />
        </Box>
      </Box>
      <Button variant="contained" onClick={solveEquations}>
        Solve
      </Button>
      <Box mt={2}>
        {solution && (
          <div>
            <h3>Solution:</h3>
            <p>{solution}</p>
          </div>
        )}
      </Box>
    </Box>
  );
};

export default SimultaneousEquationSolver;
