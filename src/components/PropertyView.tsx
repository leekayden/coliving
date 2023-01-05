import NavBar from "./NavBar";
import PropertyCarousel from "./PropertyCarousel";
import Typography from '@mui/material/Typography';
import { PropertyList } from "../global/data";
import PropertyTabs from "./PropertyTabs";
import PropertyOverview from "./PropertyOverview";

interface PropertyViewProps {
    id: number;
}

function PropertyView({id}: PropertyViewProps) {
  const images = [
    "https://picsum.photos/id/10/200/300",
    "https://picsum.photos/id/100/200/300",
    "https://picsum.photos/id/1000/200/300",
  ];
  return (
    <div>
      <NavBar isHomeOwner={false} />
      <PropertyCarousel />
      <Typography variant="h3" gutterBottom sx={{ padding:"7px" }}>
        {PropertyList[id].title}
      </Typography>
      <PropertyOverview title={PropertyList[id].title} />
      <PropertyTabs property={PropertyList[id].title} />
    </div>
  );
}

export default PropertyView;
