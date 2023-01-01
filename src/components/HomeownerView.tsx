import NavBar from "./NavBar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import AddIcon from '@mui/icons-material/Add';
import HomeownerCard from "./HomeownerCard";

function HomeownerView() {
  return (
    <div>
      <NavBar />
      <Typography variant="h3" gutterBottom sx={{ padding: "7px" }}>
        <Divider textAlign="left">My Properties</Divider>
        <Button size="large" disableElevation variant="contained" startIcon={<AddIcon />}>Add New</Button>
      </Typography>
      <HomeownerCard />
    </div>
  );
}

export default HomeownerView;
