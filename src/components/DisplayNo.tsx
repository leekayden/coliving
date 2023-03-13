import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const NumberCounter = () => {
  const [count, setCount] = useState(0);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    const regex = /[0-9]/g;
    const matches = input.match(regex);
    const numbersCount = matches ? matches.length : 0;
    setCount(numbersCount);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Typography variant="h4" gutterBottom>
        Enter some numbers
      </Typography>
      <TextField
        id="numbers-input"
        label="Numbers"
        onChange={handleInputChange}
      />
      <Typography variant="h6" gutterBottom mt={2}>
        Number of numbers entered: {count}
      </Typography>
    </Box>
  );
};

export default NumberCounter;
