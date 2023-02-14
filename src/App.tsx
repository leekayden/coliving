import "./App.css";
import NavBar from "./components/NavBar";
import { AppName } from "./global/definitions";
import Carousel from "./components/Carousel";
import Card from "./components/Card";
import { PropertyList } from "./global/data";
import { Grid } from "@material-ui/core";
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Alert from '@mui/material/Alert';
import { usePageEffect } from "./components/usePageEffect";

function App() {
  // const titles = PropertyList.map(item => item.title);
  usePageEffect({ title: "Home | Eden CoSpaces" });
  return (
    <div className="App">
      <NavBar appname={AppName} isHomeOwner={false} />
      <Alert severity="warning">This is a warning alert — check it out!</Alert>
      <Carousel />
      <Typography variant="h3" gutterBottom>
        <Divider />
      </Typography>
      <Grid container spacing={2} style={{ justifyContent: "center" }}>
        {PropertyList.map((item) => (
          <Grid item xs={2}>
            <Card id={item.id} title={item.title} description={item.description} propertyStats={item.status} route={item.route} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default App;
