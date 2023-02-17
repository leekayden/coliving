import NavBar from "./NavBar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import CreateProperty from "./CreateProperty";
import HomeownerCard from "./HomeownerCard";
import { PropertyList, isHomeownerAccount } from "../global/data";
import Error from "./Error";

function Homeowner() {
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

function Guest() {
  return(<div><NavBar isHomeOwner={false} /><Error errorCode={403} message="Resource forbidden" /></div>);
}

interface HomeownerViewProps {
  isHomeownerAccountArg?: boolean;
}

function HomeownerView({isHomeownerAccountArg}: HomeownerViewProps) {
  if (isHomeownerAccount || isHomeownerAccountArg === true) {
    return <Homeowner />;
  } else {
    return <Guest />;
  }
}

export default HomeownerView;
