import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Divider from "@mui/material/Divider";

const FractionConverter = () => {
  const [numerator, setNumerator] = useState("");
  const [denominator, setDenominator] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const handleNumeratorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    setNumerator(input);
  };

  const handleDenominatorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    setDenominator(input);
  };

  const handleConvertClick = () => {
    const numeratorValue = parseInt(numerator, 10);
    const denominatorValue = parseInt(denominator, 10);

    if (!numeratorValue || !denominatorValue) {
      setError("Please enter valid numerator and denominator values.");
      return;
    }

    const gcd = (a: number, b: number): number => {
      if (!b) {
        return a;
      }
      return gcd(b, a % b);
    };

    const gcdValue = gcd(numeratorValue, denominatorValue);
    const simplifiedNumerator = numeratorValue / gcdValue;
    const simplifiedDenominator = denominatorValue / gcdValue;

    setResult(`${simplifiedNumerator} / ${simplifiedDenominator}`);
    setError("");
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Typography variant="h4" gutterBottom>
        Fraction Converter
      </Typography>
      {error && <Alert severity="error">{error}</Alert>}
      <TextField
        id="numerator-input"
        label="Numerator"
        onChange={handleNumeratorChange}
        value={numerator}
        type="number"
        sx={{ mt: 2 }}
      />
      <Divider />
      <TextField
        id="denominator-input"
        label="Denominator"
        onChange={handleDenominatorChange}
        value={denominator}
        type="number"
        sx={{ mt: 2 }}
      />
      <Button variant="contained" onClick={handleConvertClick} sx={{ mt: 2 }}>
        Convert
      </Button>
      {result && (
        <Typography variant="h6" gutterBottom mt={2}>
          Simplest Fraction: {result}
        </Typography>
      )}
    </Box>
  );
};

export default FractionConverter;
