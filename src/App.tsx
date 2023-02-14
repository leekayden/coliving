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

function App() {
  // const titles = PropertyList.map(item => item.title);
  const [open, setOpen] = React.useState(true);
  usePageEffect({ title: "Home | Eden CoSpaces" });
  return (
    <div className="App">
      <NavBar appname={AppName} isHomeOwner={false} />
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
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          This is a demo version of the app. Most of the data on this site is
          fake.
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
