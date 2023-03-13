import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

interface Props {}

const MultipleChecker: React.FC<Props> = () => {
  const [num, setNum] = useState<number | undefined>(undefined);
  const [result, setResult] = useState<string>("");

  const handleClick = () => {
    if (num !== undefined) {
      let multiples: string[] = [];
      if (num % 3 === 0) multiples.push("3");
      if (num % 4 === 0) multiples.push("4");
      if (num % 5 === 0) multiples.push("5");
      if (num % 6 === 0) multiples.push("6");
      if (num % 7 === 0) multiples.push("7");
      if (num % 8 === 0) multiples.push("8");
      if (num % 9 === 0) multiples.push("9");
      if (num % 10 === 0) multiples.push("10");
      if (multiples.length > 0) {
        setResult(`The number ${num} is a multiple of: ${multiples.join(", ")}`);
      } else {
        setResult(`The number ${num} is not a multiple of 3, 4, 5, 6, 7, 8, 9, or 10`);
      }
    }
  };

  const handleNumChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNum(Number(event.target.value));
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <TextField
        label="Number"
        variant="outlined"
        type="number"
        value={num === undefined ? "" : num}
        onChange={handleNumChange}
        style={{ marginBottom: "16px" }}
      />
      <Button variant="contained" color="primary" onClick={handleClick} style={{ marginBottom: "16px" }}>
        Check
      </Button>
      {result !== "" && (
        <TextField
          label="Result"
          variant="outlined"
          multiline
          value={result}
          InputProps={{ readOnly: true }}
        />
      )}
    </div>
  );
};

export default MultipleChecker;
