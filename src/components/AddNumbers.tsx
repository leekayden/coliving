import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

interface Props {}

const AddNumbers: React.FC<Props> = () => {
  const [inputValue, setInputValue] = useState('');

  // function to handle input change
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  // function to handle button click
  const handleButtonClick = () => {
    let sum = 0;
    for (let i = 0; i < inputValue.length; i++) {
      sum += parseInt(inputValue.charAt(i));
    }
    alert(`Sum of all numbers in ${inputValue} is ${sum}`);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <TextField
        label="Enter numbers"
        variant="outlined"
        value={inputValue}
        onChange={handleInputChange}
        style={{ marginBottom: '1rem', width: '80%' }}
      />
      <Button variant="contained" onClick={handleButtonClick}>
        Calculate Sum
      </Button>
    </div>
  );
};

export default AddNumbers;
