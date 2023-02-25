import * as React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { AppName } from "./global/definitions";
import Carousel from "./components/Carousel";
import Card from "./components/Card";
import { PropertyList } from "./global/data";
import { Grid } from "@material-ui/core";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { usePageEffect } from "./components/usePageEffect";
import { isHomeownerAccount } from "./global/data";
import Box from "@mui/material/Box";

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
          This is a demo version of the app. Most of the data on this site is
          fake. Some features are disabled or not working.
        </Alert>
      </Collapse>
      <Carousel />
      <Typography variant="h3" gutterBottom>
        <Divider />
      </Typography>
      <Grid container spacing={2} style={{ justifyContent: "center" }}>
        {PropertyList.map((item) => (
          <Grid item xs={2}>
            <Card
              id={item.id}
              title={item.title}
              description={item.description}
              propertyStats={item.status}
              route={item.route}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default App;
