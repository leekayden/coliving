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
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { PropertyList, enquireExternal } from "../global/data";

interface FormDialogProps {
    title: string;
}

export default function FormDialog({title}: FormDialogProps) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [gender, setGender] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setGender(event.target.value);
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
            <br/>
            Maximum tenants allowed: {filteredList?.maxPax}
            <br/>
            You are currently booking: {title}
          </DialogContentText>
          <TextField
            sx={{ m: 1, minWidth: 208.5 }}
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            variant="standard"
            required={true}
          />
          <TextField
            sx={{ m: 1 }}
            autoFocus
            margin="dense"
            id="nationality"
            label="Nationality"
            type="text"
            variant="standard"
            required={true}
          />
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">
              Gender
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={gender}
              onChange={handleChange}
              label="Age"
              required
            >
              <MenuItem value="" disabled>
                <em>--- Select ---</em>
              </MenuItem>
              <MenuItem value={"Male"}>Male</MenuItem>
              <MenuItem value={"Female"}>Female</MenuItem>
            </Select>
          </FormControl>
          <TextField
            sx={{ m: 1, minWidth: 345 }}
            autoFocus
            margin="dense"
            id="email"
            label="Email"
            type="email"
            variant="standard"
            required={true}
          />
          <TextField
            sx={{ m: 1 }}
            autoFocus
            margin="dense"
            id="phone"
            label="Phone"
            type="phone"
            placeholder="+65 8123 4567"
            variant="standard"
            required={true}
          />
          <TextField
            sx={{ m: 1 }}
            id="filled-multiline-static"
            label="Message"
            multiline
            rows={3}
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
