import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

interface Equations {
  a: number;
  b: number;
  c: number;
  d: number;
  e: number;
  f: number;
}

const SimultaneousEquations: React.FC = () => {
  const [equations, setEquations] = useState<Equations>({
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
  });
  const [method, setMethod] = useState<"elimination" | "substitution">(
    "elimination"
  );
  const [solution, setSolution] = useState<{
    x: number | string;
    y: number | string;
    workings: string[];
  }>({
    x: "",
    y: "",
    workings: [],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: keyof Equations
  ) => {
    const { value } = e.target;
    setEquations((prev) => ({ ...prev, [key]: parseFloat(value) || 0 }));
  };

  const solveEquations = () => {
    const { a, b, c, d, e, f } = equations;
    const workings: string[] = [];

    let x: number | string = "";
    let y: number | string = "";

    if (method === "elimination") {
      const denominator = a * e - b * d;
      if (denominator === 0) {
        setSolution({
          x: "",
          y: "",
          workings: ["Cannot solve equations by elimination method."],
        });
        return;
      }
      x = (c * e - b * f) / denominator;
      y = (a * f - c * d) / denominator;

      workings.push(
        `Multiply first equation by ${e}`,
        `Multiply second equation by ${-b}`,
        `Add both equations to eliminate y`,
        `Solve for x`,
        `Substitute x value to find y`,
        `x = ${x}`,
        `y = ${y}`
      );
    } else {
      if (a / d === b / e) {
        setSolution({
          x: "",
          y: "",
          workings: ["Cannot solve equations by substitution method."],
        });
        return;
      }
      if (a === 0) {
        y = c / b;
        x = (f - e * y) / d;

        workings.push(
          `Solve first equation for y in terms of x`,
          `Substitute into second equation`,
          `Solve for x`,
          `Substitute x value to find y`,
          `y = ${y}`,
          `x = ${x}`
        );
      } else {
        y = (c - a * (f / e)) / (b - a * (d / e));
        x = (f - e * y) / d;

        workings.push(
          `Solve second equation for x in terms of y`,
          `Substitute into first equation`,
          `Solve for y`,
          `Substitute y value to find x`,
          `x = ${x}`,
          `y = ${y}`
        );
      }
    }

    setSolution({ x, y, workings });
  };

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 4,
        }}
      >
        {/* <TextField
          label="Equation 1 (ax + by = c)"
          variant="outlined"
          size="small"
          type="number"
          value={equations.a}
          onChange={(e) => handleChange(e, "a")}
          sx={{ mb: 1 }}
        /> */}
        <TextField
          label="Equation 1 (ax + by = c)"
          variant="outlined"
          size="small"
          type="number"
          value={equations.a}
          onChange={(e) =>
            handleChange(e as React.ChangeEvent<HTMLInputElement>, "a")
          }
          sx={{ mb: 1 }}
        />
        <TextField
          variant="outlined"
          size="small"
          type="number"
          value={equations.b}
          onChange={(e) =>
            handleChange(e as React.ChangeEvent<HTMLInputElement>, "b")
          }
          sx={{ mb: 1 }}
        />
        <TextField
          variant="outlined"
          size="small"
          type="number"
          value={equations.c}
          onChange={(e) =>
            handleChange(e as React.ChangeEvent<HTMLInputElement>, "c")
          }
          sx={{ mb: 2 }}
        />
        <TextField
          label="Equation 2 (dx + ey = f)"
          variant="outlined"
          size="small"
          type="number"
          value={equations.d}
          onChange={(e) =>
            handleChange(e as React.ChangeEvent<HTMLInputElement>, "d")
          }
          sx={{ mb: 1 }}
        />
        <TextField
          variant="outlined"
          size="small"
          type="number"
          value={equations.e}
          onChange={(e) =>
            handleChange(e as React.ChangeEvent<HTMLInputElement>, "e")
          }
          sx={{ mb: 1 }}
        />
        <TextField
          variant="outlined"
          size="small"
          type="number"
          value={equations.f}
          onChange={(e) =>
            handleChange(e as React.ChangeEvent<HTMLInputElement>, "f")
          }
          sx={{ mb: 2 }}
        />
        <Button variant="contained" onClick={solveEquations}>
          Solve
        </Button>
      </Box>
      {solution.x !== "" && (
        <Box sx={{ mt: 4 }}>
          <p>x = {solution.x}</p>
          <p>y = {solution.y}</p>
          <Box sx={{ mt: 2 }}>
            <p>Workings:</p>
            <ul>
              {solution.workings.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default SimultaneousEquations;
