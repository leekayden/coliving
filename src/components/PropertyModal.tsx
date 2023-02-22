import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
// import Select, { SelectChangeEvent } from "@mui/material/Select";
import { PropertyList, enquireExternal } from "../global/data";
import { SelectChangeEvent } from "@mui/material";
import Select from "@mui/material/Select";
import axios from "axios";

interface FormDialogProps {
  title: string;
}

export default function FormDialog({ title }: FormDialogProps) {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("");
  const [nationality, setNationality] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleNationalityChange = (event: SelectChangeEvent<string>) => {
    setNationality(event.target.value);
  };

  const handleGenderChange = (event: SelectChangeEvent<string>) => {
    setGender(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };

  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleSubmit = () => {
    window.open(`https://wa.me/6592976946/?text=Name:%20${name}%0AEmail:%20${email}%0APhone:%20${phone}%0AMessage:%20${message}%0ANationality:%20${nationality}%0AGender:%20${gender}`);
    // const formData = new FormData();
    // formData.append("name", name);
    // formData.append("nationality", nationality);
    // formData.append("gender", gender);
    // formData.append("email", email);
    // formData.append("phone", phone);
    // formData.append("message", message);

    // const config = {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // };
    // console.log(formData);
    // axios
    //   .post(`https://wa.me/6589204050/?text=${name}`, formData, config)
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  const filteredList = PropertyList.find((item) => item.title === title);

  return (
    <div>
      <Button
        variant="contained"
        style={{ display: "flex", justifyContent: "flex-end" }}
        onClick={handleClickOpen}
        disabled={enquireExternal}
      >
        Enquire
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Enquire</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter your details so that we can process your order.
            <br />
            Maximum tenants allowed: {filteredList?.maxPax}
            <br />
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            value={name}
            onChange={handleNameChange}
            variant="standard"
            required
          />
          <br />
          <TextField
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            value={email}
            onChange={handleEmailChange}
            variant="standard"
            required
          />
          <br />
          <TextField
            margin="dense"
            id="phone"
            label="Phone Number"
            type="tel"
            fullWidth
            value={phone}
            onChange={handlePhoneChange}
            variant="standard"
            required
          />
          <br />
          <br />
          <FormControl fullWidth>
            <InputLabel id="nationality-label">Nationality</InputLabel>
            <Select
              labelId="nationality-label"
              id="nationality"
              value={nationality}
              label="Nationality"
              onChange={handleNationalityChange}
              variant="standard"
              required
            >
              {filteredList?.nationalities.map((nationality: string) => (
                <MenuItem value={nationality} key={nationality}>
                  {nationality}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <br />
          <br />
          <FormControl fullWidth>
            <InputLabel id="gender-label">Gender</InputLabel>
            <Select
              labelId="gender-label"
              id="gender"
              value={gender}
              label="Gender"
              onChange={handleGenderChange}
              variant="standard"
              required
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="nonbinary">Non-Binary</MenuItem>
            </Select>
          </FormControl>
          <br />
          <TextField
            margin="dense"
            id="message"
            label="Message"
            type="text"
            fullWidth
            multiline
            rows={4}
            value={message}
            onChange={handleMessageChange}
            variant="standard"
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Send</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
