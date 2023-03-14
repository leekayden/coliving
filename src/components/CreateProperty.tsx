import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import { TransitionProps } from "@mui/material/transitions";
import { PropertyList } from "../global/data";
import { Edit } from "@mui/icons-material";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const nextId = PropertyList[PropertyList.length - 1].id + 1;
  const paddedNextId = nextId.toString().padStart(5, "0");
  return (
    <div>
      <Button
        size="large"
        disableElevation
        variant="contained"
        onClick={handleClickOpen}
        startIcon={<Edit />}
        sx={{ width: "40vw", margin: "0 auto", display: "flex" }}
      >
        Edit Template
      </Button>
      <br />
      <Button
        size="large"
        disableElevation
        variant="contained"
        onClick={handleClickOpen}
        startIcon={<AddIcon />}
        sx={{ width: "40vw", margin: "0 auto", display: "flex" }}
      >
        Add New
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              New Property
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Create
            </Button>
          </Toolbar>
        </AppBar>
        <div style={{ padding: "7px" }}>
          <TextField
            id="standard-basic"
            label="Property ID"
            variant="standard"
            helperText="Automatically Generated"
            size="medium"
            defaultValue={paddedNextId}
            disabled={true}
            sx={{ width: 500 }}
          />
        </div>
        <div style={{ padding: "7px" }}>
          <TextField
            id="standard-basic"
            label="Property Name"
            variant="standard"
            helperText="Name of Property"
            size="medium"
            sx={{ width: 500 }}
          />
        </div>
      </Dialog>
    </div>
  );
}
