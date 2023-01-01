import "./App.css";
import NavBar from "./components/NavBar";
import { AppName } from "./global/definitions";
import Carousel from "./components/Carousel";
import Card from "./components/Card";
import { PropertyList } from "./global/data";
import { Grid } from "@material-ui/core";
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

function App() {
  const titles = PropertyList.map(item => item.title);
  return (
    <div className="App">
      <NavBar appname={AppName} isHomeOwner={false} />
      <Carousel items={titles} />
      <Typography variant="h3" gutterBottom>
        <Divider>Properties</Divider>
      </Typography>
      <Grid container spacing={2} style={{ justifyContent: "center" }}>
        {PropertyList.map((item) => (
          <Grid item xs={2}>
            <Card title={item.title} description={item.description} propertyStats={item.status} route={item.route} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default App;
