import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";

interface SimultaneousEquationsProps {}

const SimultaneousEquations: React.FC<SimultaneousEquationsProps> = ({}) => {
  const [equation1, setEquation1] = useState("");
  const [equation2, setEquation2] = useState("");
  const [method, setMethod] = useState<"elimination" | "substitution">(
    "elimination"
  );
  const [solution, setSolution] = useState<string>("");

  const solveEquations = () => {
    let x: number, y: number;
    let steps: string[] = [];

    // Parse equations into the form ax + by = c
    const [a1, b1, c1] = parseEquation(equation1);
    const [a2, b2, c2] = parseEquation(equation2);

    if (method === "elimination") {
      // Solve using elimination method
      if (a1 / a2 !== b1 / b2) {
        // Eliminate x variable
        const factor = a2 / a1;
        let newB2 = b2 - b1 * factor;
        const newC2 = c2 - c1 * factor;
        steps.push(`Multiply equation 1 by ${factor} and subtract from equation 2:`);
        steps.push(`${a2}x + ${newB2}y = ${newC2}`);
        // Solve for y variable
        y = newC2 / newB2;
        steps.push(`Solve for y: y = ${y}`);
        // Solve for x variable
        x = (c1 - b1 * y) / a1;
        steps.push(`Solve for x: x = ${x}`);
      } else {
        setSolution("Cannot use elimination method here :(");
        return;
      }
    } else {
      // Solve using substitution method
      if (a1 !== 0 && a2 !== 0 && b1 / a1 !== b2 / a2) {
        // Solve for y variable in equation 1
        const y1 = (c1 - a1 * x) / b1;
        steps.push(`Solve equation 1 for y: y = ${y1}`);
        // Substitute y variable into equation 2
        const eq2 = b2 * x + a2 * y1 - c2;
        steps.push(`Substitute y into equation 2: ${eq2} = 0`);
        // Solve for x variable
        x = eq2 / a2;
        steps.push(`Solve for x: x = ${x}`);
        // Solve for y variable
        y = y1;
        steps.push(`Substitute x into equation 1: ${a1}x + ${b1}y = ${c1}`);
        steps.push(`Solve for y: y = ${y}`);
      } else {
        setSolution("Cannot use substitution method");
        return;
      }
    }

    // Display solution
    setSolution(
      `Solution: x = ${x.toFixed(2)}, y = ${y.toFixed(
        2
      )}\n\nSteps:\n${steps.join("\n")}`
    );
  };

  const parseEquation = (equation: string): [number, number, number] => {
    // Split equation into terms
    const terms = equation.split(/(?=[+-])/);
    // Parse each term into coefficient and variable
    const [a, b, c] = terms.map((term) => {
      const coefficient = term.match(/[-]?\d+/)
        ? parseInt(term.match(/[-]?\d+/)![0])
        : 1;
      const variable = term.includes("x") ? "x" : "y";
      return variable === "x"
        ? coefficient
        : variable === "y"
        ? coefficient
        : 0;
    });
    return [a, b, c];
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "80%",
        }}
      >
        <Typography variant="h4" mb={4}>
          Simultaneous Equations Solver
        </Typography>
        <FormControl component="fieldset" sx={{ mb: 4 }}>
          <FormLabel component="legend">Select method:</FormLabel>
          <RadioGroup
            row
            aria-label="method"
            name="method"
            value={method}
            onChange={(e) => setMethod(e.target.value as any)}
          >
            <FormControlLabel
              value="elimination"
              control={<Radio />}
              label="Elimination"
            />
            <FormControlLabel
              value="substitution"
              control={<Radio />}
              label="Substitution"
            />
          </RadioGroup>
        </FormControl>
        <FormControl sx={{ width: "100%", mb: 4 }}>
          <TextField
            label="Equation 1"
            variant="outlined"
            placeholder="Enter equation"
            value={equation1}
            onChange={(e) => setEquation1(e.target.value)}
          />
        </FormControl>
        <FormControl sx={{ width: "100%", mb: 4 }}>
          <TextField
            label="Equation 2"
            variant="outlined"
            placeholder="Enter equation"
            value={equation2}
            onChange={(e) => setEquation2(e.target.value)}
          />
        </FormControl>
        <Button variant="contained" onClick={solveEquations}>
          Solve
        </Button>
        {solution && (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6">Solution:</Typography>
            <Typography sx={{ whiteSpace: "pre-line" }}>{solution}</Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default SimultaneousEquations;
