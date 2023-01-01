import NavBar from "./NavBar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import HomeownerCard from "./HomeownerCard";
import { PropertyList } from "../global/data";

function HomeownerView() {
  let ownerId = 0;
  const filteredList = PropertyList.filter((item) => item.ownerId === ownerId);
  return (
    <div>
      <NavBar isHomeOwner />
      <Typography variant="h3" gutterBottom sx={{ padding: "7px" }}>
        <Divider textAlign="left">My Properties</Divider>
        <Button
          size="large"
          disableElevation
          variant="contained"
          startIcon={<AddIcon />}
        >
          Add New
        </Button>
      </Typography>
      {filteredList?.map((item: any,) => (
        <HomeownerCard key={item.title} identifier={item} />
      ))}
    </div>
  );
}

export default HomeownerView;
