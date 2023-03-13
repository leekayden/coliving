import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

interface Props {}

const Adder: React.FC<Props> = () => {
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [result, setResult] = useState<number | undefined>(undefined);

  const handleClick = () => {
    setResult(num1 + num2);
  };

  const handleNum1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNum1(Number(event.target.value));
  };

  const handleNum2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNum2(Number(event.target.value));
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <TextField
        label="Number 1"
        variant="outlined"
        type="number"
        value={num1}
        onChange={handleNum1Change}
        style={{ marginBottom: "16px" }}
      />
      <TextField
        label="Number 2"
        variant="outlined"
        type="number"
        value={num2}
        onChange={handleNum2Change}
        style={{ marginBottom: "16px" }}
      />
      <Button variant="contained" color="primary" onClick={handleClick} style={{ marginBottom: "16px" }}>
        Add
      </Button>
      {result !== undefined && (
        <TextField
          label="Result"
          variant="outlined"
          type="number"
          value={result}
          InputProps={{ readOnly: true }}
        />
      )}
    </div>
  );
};

export default Adder;
