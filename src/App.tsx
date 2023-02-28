import * as React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { AppName } from "./global/definitions";
import Carousel from "./components/Carousel";
import { PropertyList } from "./global/data";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { usePageEffect } from "./components/usePageEffect";
import { isHomeownerAccount } from "./global/data";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import Grid from "@mui/material/Grid";

function App() {
  const [open, setOpen] = React.useState(!localStorage.getItem("alertClosed"));
  usePageEffect({ title: "Home | Eden CoSpaces" });
  return (
    <div className="App">
      <NavBar appname={AppName} isHomeOwner={isHomeownerAccount} />
      <Collapse in={open}>
        <Alert
          severity="warning"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
                localStorage.setItem('alertClosed', true.toString());
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          This is a demo version of "{AppName}". Some features are disabled or not functional.
        </Alert>
      </Collapse>
      <Carousel />
      <Typography variant="h3" gutterBottom>
        <Divider />
      </Typography>
      <Gallery data={PropertyList} />
      <Footer />
    </div>
  );
}

export default App;
