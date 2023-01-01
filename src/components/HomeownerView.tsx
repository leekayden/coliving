import NavBar from "./NavBar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import CreateProperty from "./CreateProperty";
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
        <CreateProperty />
      </Typography>
      {filteredList?.map((item: any) => (
        <HomeownerCard key={item.title} identifier={item} />
      ))}
    </div>
  );
}

export default HomeownerView;
